import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { requireAdmin } from '@/lib/admin-auth';
import { deleteJob, getJobById, updateJob, type JobInput } from '@/lib/jobs';

type RouteContext = { params: Promise<{ id: string }> };

export async function GET(_request: Request, context: RouteContext) {
  if (!(await requireAdmin())) {
    return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
  }

  try {
    const { id } = await context.params;
    const job = await getJobById(id);

    if (!job) {
      return NextResponse.json({ error: 'Job not found.' }, { status: 404 });
    }

    return NextResponse.json(job);
  } catch (error) {
    console.error('Failed to fetch job:', error);
    return NextResponse.json({ error: 'Failed to fetch job.' }, { status: 500 });
  }
}

export async function PUT(request: Request, context: RouteContext) {
  if (!(await requireAdmin())) {
    return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
  }

  try {
    const { id } = await context.params;
    const data = (await request.json()) as Partial<JobInput>;

    const existing = await getJobById(id);
    if (!existing) {
      return NextResponse.json({ error: 'Job not found.' }, { status: 404 });
    }

    const job = await updateJob(id, data);

    revalidatePath('/careers');
    revalidatePath('/admin');

    return NextResponse.json(job);
  } catch (error) {
    console.error('Failed to update job:', error);
    return NextResponse.json({ error: 'Failed to update job.' }, { status: 500 });
  }
}

export async function DELETE(_request: Request, context: RouteContext) {
  if (!(await requireAdmin())) {
    return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
  }

  try {
    const { id } = await context.params;

    const existing = await getJobById(id);
    if (!existing) {
      return NextResponse.json({ error: 'Job not found.' }, { status: 404 });
    }

    await deleteJob(id);

    revalidatePath('/careers');
    revalidatePath('/admin');

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Failed to delete job:', error);
    return NextResponse.json({ error: 'Failed to delete job.' }, { status: 500 });
  }
}
