import { NextResponse } from 'next/server';
import { getJobById } from '@/lib/jobs';
import { corsHeaders, handleOptions } from '@/lib/cors';

type RouteContext = { params: Promise<{ id: string }> };

export async function OPTIONS(request: Request) {
  return handleOptions(request);
}

export async function GET(request: Request, context: RouteContext) {
  const origin = request.headers.get('origin');
  try {
    const { id } = await context.params;
    const job = await getJobById(id);
    if (!job || !job.active) {
      return NextResponse.json({ error: 'Job not found.' }, { status: 404, headers: corsHeaders(origin) });
    }
    return NextResponse.json(job, { headers: corsHeaders(origin) });
  } catch (error) {
    console.error('Failed to fetch job:', error);
    return NextResponse.json({ error: 'Failed to fetch job.' }, { status: 500, headers: corsHeaders(origin) });
  }
}
