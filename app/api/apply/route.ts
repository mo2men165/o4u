import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase-admin';
import { FieldValue } from 'firebase-admin/firestore';

export async function POST(request: Request) {
  try {
    const { fullName, email, phone, position, coverMessage, cvFileName, cvUrl } =
      await request.json();

    if (!fullName || !email || !phone || !position) {
      return NextResponse.json(
        { error: 'Missing required fields.' },
        { status: 400 }
      );
    }

    await db.collection('applications').add({
      fullName,
      email,
      phone,
      position,
      coverMessage: coverMessage || '',
      cvFileName: cvFileName || '',
      cvUrl: cvUrl || '',
      submittedAt: FieldValue.serverTimestamp(),
      status: 'new',
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Failed to save application:', error);
    return NextResponse.json(
      { error: 'Failed to save application.' },
      { status: 500 }
    );
  }
}
