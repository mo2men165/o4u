import { NextResponse } from 'next/server';
import { storageBucket } from '@/lib/firebase-admin';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const cv = formData.get('cv') as File | null;

    if (!cv) {
      return NextResponse.json({ error: 'No file provided.' }, { status: 400 });
    }

    const allowed = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];
    if (!allowed.includes(cv.type)) {
      return NextResponse.json({ error: 'CV must be PDF, DOC, or DOCX.' }, { status: 400 });
    }

    const buffer = Buffer.from(await cv.arrayBuffer());
    const safeName = cv.name.replace(/[^a-zA-Z0-9._-]/g, '_');
    const path = `cvs/${Date.now()}-${safeName}`;

    const file = storageBucket.file(path);
    await file.save(buffer, { contentType: cv.type, resumable: false });

    // Signed URL valid for 10 years — long enough for HR review purposes
    const [url] = await file.getSignedUrl({
      action: 'read',
      expires: new Date(Date.now() + 10 * 365 * 24 * 60 * 60 * 1000),
    });

    return NextResponse.json({ url });
  } catch (error) {
    console.error('CV upload error:', error);
    return NextResponse.json({ error: 'Upload failed. Please try again.' }, { status: 500 });
  }
}
