import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { requireAdmin } from '@/lib/admin-auth';
import { createJob, getAllJobs, type JobInput } from '@/lib/jobs';

export async function GET() {
  if (!(await requireAdmin())) {
    return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
  }

  try {
    const jobs = await getAllJobs();
    return NextResponse.json(jobs);
  } catch (error) {
    console.error('Failed to fetch jobs:', error);
    return NextResponse.json({ error: 'Failed to fetch jobs.' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  if (!(await requireAdmin())) {
    return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { id, ...data } = body as { id: string } & JobInput;

    if (!id || !data.title || !data.department || !data.type) {
      return NextResponse.json(
        { error: 'Missing required fields: id, title, department, type.' },
        { status: 400 }
      );
    }

    const job = await createJob(id, {
      title: data.title,
      department: data.department,
      type: data.type,
      description: data.description || '',
      shortDescription: data.shortDescription || '',
      active: data.active ?? true,
      order: data.order ?? 0,
    });

    revalidatePath('/careers');
    revalidatePath('/admin');

    return NextResponse.json(job, { status: 201 });
  } catch (error) {
    console.error('Failed to create job:', error);
    return NextResponse.json({ error: 'Failed to create job.' }, { status: 500 });
  }
}
