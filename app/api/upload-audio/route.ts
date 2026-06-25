import { NextResponse } from 'next/server';
import { storageBucket } from '@/lib/firebase-admin';
import { corsHeaders, handleOptions } from '@/lib/cors';

export async function OPTIONS(request: Request) {
  return handleOptions(request);
}

const ALLOWED_BASE_TYPES = new Set([
  'audio/webm',
  'audio/mp4',
  'audio/mpeg',
  'audio/ogg',
  'audio/wav',
  'audio/x-wav',
  'audio/aac',
  'audio/x-m4a',
  'audio/m4a',
]);

const EXT_TO_MIME: Record<string, string> = {
  webm: 'audio/webm',
  m4a: 'audio/mp4',
  mp4: 'audio/mp4',
  mp3: 'audio/mpeg',
  ogg: 'audio/ogg',
  wav: 'audio/wav',
};

function normalizeAudioMimeType(type: string): string {
  const base = type.split(';')[0].trim().toLowerCase();
  if (base === 'audio/x-m4a' || base === 'audio/m4a') return 'audio/mp4';
  return base;
}

function sniffAudioMimeType(buffer: Buffer): string | null {
  if (
    buffer.length >= 4 &&
    buffer[0] === 0x1a &&
    buffer[1] === 0x45 &&
    buffer[2] === 0xdf &&
    buffer[3] === 0xa3
  ) {
    return 'audio/webm';
  }

  if (buffer.length >= 8 && buffer.subarray(4, 8).toString('ascii') === 'ftyp') {
    return 'audio/mp4';
  }

  if (buffer.length >= 4 && buffer.subarray(0, 4).toString('ascii') === 'OggS') {
    return 'audio/ogg';
  }

  if (
    buffer.length >= 12 &&
    buffer.subarray(0, 4).toString('ascii') === 'RIFF' &&
    buffer.subarray(8, 12).toString('ascii') === 'WAVE'
  ) {
    return 'audio/wav';
  }

  if (buffer.length >= 2 && buffer[0] === 0xff && (buffer[1] & 0xe0) === 0xe0) {
    return 'audio/mpeg';
  }

  return null;
}

function mimeFromFileName(name: string): string | null {
  const ext = name.split('.').pop()?.toLowerCase();
  return ext ? EXT_TO_MIME[ext] ?? null : null;
}

function resolveAudioContentType(file: File, buffer: Buffer): string | null {
  const declared = file.type?.trim();
  if (declared && declared !== 'application/octet-stream') {
    const normalized = normalizeAudioMimeType(declared);
    if (ALLOWED_BASE_TYPES.has(normalized)) return normalized;
  }

  const fromName = mimeFromFileName(file.name);
  if (fromName) return fromName;

  return sniffAudioMimeType(buffer);
}

export async function POST(request: Request) {
  const origin = request.headers.get('origin');
  try {
    const formData = await request.formData();
    const audio = formData.get('audio') as File | null;

    if (!audio) {
      return NextResponse.json({ error: 'No audio file provided.' }, { status: 400, headers: corsHeaders(origin) });
    }

    const buffer = Buffer.from(await audio.arrayBuffer());

    if (buffer.length === 0) {
      return NextResponse.json(
        { error: 'Recording is empty. Please record again.' },
        { status: 400, headers: corsHeaders(origin) }
      );
    }

    const contentType = resolveAudioContentType(audio, buffer);
    if (!contentType) {
      console.error('Unsupported audio upload:', {
        name: audio.name,
        type: audio.type,
        size: audio.size,
      });
      return NextResponse.json({ error: 'Unsupported audio format.' }, { status: 400, headers: corsHeaders(origin) });
    }

    const safeName = audio.name.replace(/[^a-zA-Z0-9._-]/g, '_');
    const path = `audio/${Date.now()}-${safeName}`;

    const file = storageBucket.file(path);
    await file.save(buffer, { contentType, resumable: false });

    const [url] = await file.getSignedUrl({
      action: 'read',
      expires: new Date(Date.now() + 10 * 365 * 24 * 60 * 60 * 1000),
    });

    return NextResponse.json({ url }, { headers: corsHeaders(origin) });
  } catch (error) {
    console.error('Audio upload error:', error);
    return NextResponse.json({ error: 'Upload failed. Please try again.' }, { status: 500, headers: corsHeaders(origin) });
  }
}
