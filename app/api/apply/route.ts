import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase-admin';
import { FieldValue } from 'firebase-admin/firestore';
import { sendApplicationEmails } from '@/lib/emails/application-emails';
import { corsHeaders, handleOptions } from '@/lib/cors';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function OPTIONS(request: Request) {
  return handleOptions(request);
}

export async function POST(request: Request) {
  const origin = request.headers.get('origin');
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
        { status: 400, headers: corsHeaders(origin) }
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address.' },
        { status: 400, headers: corsHeaders(origin) }
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

    return NextResponse.json({ ok: true }, { headers: corsHeaders(origin) });
  } catch (error) {
    console.error('Failed to process application:', error);
    return NextResponse.json(
      { error: 'Failed to submit application. Please try again or contact us directly.' },
      { status: 500, headers: corsHeaders(origin) }
    );
  }
}
