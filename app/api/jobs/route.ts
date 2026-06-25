import { NextResponse } from 'next/server';
import { getJobs } from '@/lib/jobs';
import { corsHeaders, handleOptions } from '@/lib/cors';

export async function OPTIONS(request: Request) {
  return handleOptions(request);
}

export async function GET(request: Request) {
  const origin = request.headers.get('origin');
  try {
    const jobs = await getJobs();
    return NextResponse.json(jobs, { headers: corsHeaders(origin) });
  } catch (error) {
    console.error('Failed to fetch jobs:', error);
    return NextResponse.json({ error: 'Failed to fetch jobs.' }, { status: 500, headers: corsHeaders(origin) });
  }
}
