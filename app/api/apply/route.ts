import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase-admin';
import { FieldValue } from 'firebase-admin/firestore';
import { sendApplicationEmails } from '@/lib/emails/application-emails';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const {
      fullName,
      email,
      phone,
      position,
      coverMessage,
      cvFileName,
      cvUrl,
      audioFileName,
      audioUrl,
    } = await request.json();

    if (!fullName || !email || !phone || !position) {
      return NextResponse.json(
        { error: 'Missing required fields.' },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address.' },
        { status: 400 }
      );
    }

    const applicationData = {
      fullName,
      email,
      phone,
      position,
      coverMessage: coverMessage || '',
      cvFileName: cvFileName || '',
      cvUrl: cvUrl || '',
      audioFileName: audioFileName || '',
      audioUrl: audioUrl || '',
    };

    await db.collection('applications').add({
      ...applicationData,
      submittedAt: FieldValue.serverTimestamp(),
      status: 'new',
    });

    await sendApplicationEmails(applicationData);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Failed to process application:', error);
    return NextResponse.json(
      { error: 'Failed to submit application. Please try again or contact us directly.' },
      { status: 500 }
    );
  }
}
