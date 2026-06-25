import { NextResponse } from 'next/server';
import { storageBucket } from '@/lib/firebase-admin';

const ALLOWED_TYPES = [
  'audio/webm',
  'audio/mp4',
  'audio/mpeg',
  'audio/ogg',
  'audio/wav',
  'audio/x-wav',
];

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const audio = formData.get('audio') as File | null;

    if (!audio) {
      return NextResponse.json({ error: 'No audio file provided.' }, { status: 400 });
    }

    if (!ALLOWED_TYPES.includes(audio.type)) {
      return NextResponse.json({ error: 'Unsupported audio format.' }, { status: 400 });
    }

    const buffer = Buffer.from(await audio.arrayBuffer());
    const safeName = audio.name.replace(/[^a-zA-Z0-9._-]/g, '_');
    const path = `audio/${Date.now()}-${safeName}`;

    const file = storageBucket.file(path);
    await file.save(buffer, { contentType: audio.type, resumable: false });

    const [url] = await file.getSignedUrl({
      action: 'read',
      expires: new Date(Date.now() + 10 * 365 * 24 * 60 * 60 * 1000),
    });

    return NextResponse.json({ url });
  } catch (error) {
    console.error('Audio upload error:', error);
    return NextResponse.json({ error: 'Upload failed. Please try again.' }, { status: 500 });
  }
}
