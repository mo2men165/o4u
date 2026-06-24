import { db } from './firebase-admin';

export interface Job {
  id: string;
  title: string;
  department: string;
  type: string;
  description: string;
  shortDescription: string;
  active: boolean;
  order: number;
}

export async function getJobs(): Promise<Job[]> {
  const snap = await db.collection('jobs').orderBy('order', 'asc').get();
  return snap.docs
    .map((doc) => ({ id: doc.id, ...doc.data() } as Job))
    .filter((job) => job.active);
}

export async function getJobById(id: string): Promise<Job | null> {
  const doc = await db.collection('jobs').doc(id).get();
  if (!doc.exists) return null;
  return { id: doc.id, ...doc.data() } as Job;
}
