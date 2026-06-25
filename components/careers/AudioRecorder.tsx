"use client";

import { useEffect, useRef, useState } from "react";
import { Mic, Square, Play, Pause, Trash2 } from "lucide-react";

interface AudioRecorderProps {
  onAudioChange: (file: File | null) => void;
  error?: string;
  resetKey?: number;
}

function formatDuration(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

const RECORDING_MIME_CANDIDATES = [
  "audio/webm;codecs=opus",
  "audio/webm",
  "audio/mp4",
  "audio/mp4;codecs=mp4a",
  "audio/aac",
  "audio/ogg;codecs=opus",
  "audio/ogg",
] as const;

function getSupportedRecordingMimeType(): string {
  for (const type of RECORDING_MIME_CANDIDATES) {
    if (MediaRecorder.isTypeSupported(type)) return type;
  }
  return "";
}

function normalizeAudioMimeType(mimeType: string): string {
  const base = mimeType.split(";")[0].trim().toLowerCase();
  if (base === "audio/x-m4a" || base === "audio/m4a") return "audio/mp4";
  return base;
}

function extensionForMimeType(mimeType: string): string {
  const base = normalizeAudioMimeType(mimeType);
  if (base.includes("webm")) return "webm";
  if (base.includes("mp4") || base === "audio/aac") return "m4a";
  if (base.includes("ogg")) return "ogg";
  if (base.includes("mpeg")) return "mp3";
  if (base.includes("wav")) return "wav";
  return "audio";
}

export default function AudioRecorder({ onAudioChange, error, resetKey = 0 }: AudioRecorderProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [recordedFile, setRecordedFile] = useState<File | null>(null);
  const [playbackUrl, setPlaybackUrl] = useState<string | null>(null);
  const [micError, setMicError] = useState<string | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const streamRef = useRef<MediaStream | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const cleanupStream = () => {
    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;
  };

  const clearRecording = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = "";
      audioRef.current = null;
    }
    setIsPlaying(false);
    if (playbackUrl) URL.revokeObjectURL(playbackUrl);
    setIsRecording(false);
    setDuration(0);
    setRecordedFile(null);
    setPlaybackUrl(null);
    onAudioChange(null);
  };

  useEffect(() => {
    clearRecording();
    setMicError(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetKey]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      cleanupStream();
      if (playbackUrl) URL.revokeObjectURL(playbackUrl);
    };
  }, [playbackUrl]);

  const startRecording = async () => {
    setMicError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const mimeType = getSupportedRecordingMimeType();

      const recorder = mimeType
        ? new MediaRecorder(stream, { mimeType })
        : new MediaRecorder(stream);

      chunksRef.current = [];
      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };

      recorder.onstop = () => {
        const rawType = recorder.mimeType || mimeType || "audio/webm";
        const blobType = normalizeAudioMimeType(rawType) || "audio/webm";
        const blob = new Blob(chunksRef.current, { type: blobType });

        if (blob.size === 0) {
          setMicError("Recording failed. Please try again.");
          cleanupStream();
          return;
        }

        const ext = extensionForMimeType(blobType);
        const file = new File([blob], `introduction.${ext}`, { type: blobType });
        const url = URL.createObjectURL(blob);

        if (playbackUrl) URL.revokeObjectURL(playbackUrl);
        setRecordedFile(file);
        setPlaybackUrl(url);
        onAudioChange(file);
        cleanupStream();
      };

      mediaRecorderRef.current = recorder;
      recorder.start(250);
      setIsRecording(true);
      setDuration(0);
      timerRef.current = setInterval(() => setDuration((d) => d + 1), 1000);
    } catch {
      setMicError("Microphone access denied. Please allow microphone access and try again.");
    }
  };

  const stopRecording = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    const recorder = mediaRecorderRef.current;
    if (recorder && recorder.state !== "inactive") {
      recorder.requestData();
      recorder.stop();
    }
    setIsRecording(false);
  };

  const togglePlayback = () => {
    if (!playbackUrl) return;
    if (!audioRef.current) {
      audioRef.current = new Audio(playbackUrl);
      audioRef.current.onended = () => setIsPlaying(false);
    }
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      void audioRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }
  };

  const borderClass = error || micError
    ? "border-red-500/50 bg-red-500/5"
    : "border-gray-300 dark:border-primary-700/50 bg-white dark:bg-primary-900";

  return (
    <div>
      <div className={`rounded-xl border px-4 py-4 transition-all duration-200 ${borderClass}`}>
        {recordedFile ? (
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <button
                type="button"
                onClick={togglePlayback}
                className="shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-primary-500 hover:bg-primary-400 text-white transition-colors cursor-pointer"
                aria-label={isPlaying ? "Pause playback" : "Play recording"}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
              </button>
              <div className="min-w-0">
                <p className="font-body text-sm text-ink dark:text-white truncate">
                  Introduction recording
                </p>
                <p className="font-body text-xs text-ink/40 dark:text-white/40">
                  {formatDuration(duration)} recorded
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={clearRecording}
              className="shrink-0 flex items-center justify-center w-9 h-9 rounded-full border border-gray-300 dark:border-white/10 text-ink/50 dark:text-white/50 hover:text-red-400 hover:border-red-400/50 transition-colors cursor-pointer"
              aria-label="Delete recording"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div
                className={`shrink-0 flex items-center justify-center w-9 h-9 rounded-full ${
                  isRecording ? "bg-red-500 animate-pulse" : "bg-primary-500/20"
                }`}
              >
                <Mic className={`w-4 h-4 ${isRecording ? "text-white" : "text-primary-500"}`} />
              </div>
              <div>
                <p className="font-body text-sm text-ink dark:text-white">
                  {isRecording ? "Recording..." : "Record a short introduction"}
                </p>
                <p className="font-body text-xs text-ink/40 dark:text-white/40">
                  {isRecording ? formatDuration(duration) : "Tell us about yourself in your own voice"}
                </p>
              </div>
            </div>
            {isRecording ? (
              <button
                type="button"
                onClick={stopRecording}
                className="shrink-0 inline-flex items-center gap-1.5 rounded-lg bg-red-500 hover:bg-red-400 px-3 py-2 font-heading text-xs font-semibold text-white transition-colors cursor-pointer"
              >
                <Square className="w-3 h-3 fill-current" />
                Stop
              </button>
            ) : (
              <button
                type="button"
                onClick={startRecording}
                className="shrink-0 inline-flex items-center gap-1.5 rounded-lg bg-primary-500 hover:bg-primary-400 px-3 py-2 font-heading text-xs font-semibold text-white transition-colors cursor-pointer"
              >
                <Mic className="w-3 h-3" />
                Record
              </button>
            )}
          </div>
        )}
      </div>
      {micError && <p className="font-body text-red-400 text-xs mt-1">{micError}</p>}
      {error && !micError && <p className="font-body text-red-400 text-xs mt-1">{error}</p>}
    </div>
  );
}
