/**
 * One-time script to seed Firestore with job postings from constants.
 *
 * Usage:
 *   npx tsx scripts/seed-jobs.ts
 *
 * Requires FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY,
 * and FIREBASE_STORAGE_BUCKET to be set in .env.local
 */

import { config } from 'dotenv';
import { resolve } from 'path';

config({ path: resolve(process.cwd(), '.env.local') });

import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

if (!getApps().length) {
  initializeApp({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    }),
  });
}

const db = getFirestore();

const JOB_POSTINGS = [
  {
    id: 'cs-agent-en',
    title: 'Customer Service Agent — English',
    department: 'Customer Service',
    type: 'Full-time',
    description:
      'Handle inbound customer inquiries via phone, email, and chat for our international clients. Provide exceptional support while maintaining quality standards and first-call resolution targets. Requires fluent English and strong communication skills.',
    shortDescription:
      'Provide world-class support for international clients via phone, email, and chat.',
    active: true,
    order: 1,
  },
  {
    id: 'senior-sales-rep',
    title: 'Senior Sales Representative',
    department: 'Sales',
    type: 'Full-time',
    description:
      'Drive revenue through outbound sales campaigns, upselling, and cross-selling to existing client bases. Mentor junior team members and contribute to sales strategy development. Requires 2+ years of telesales experience.',
    shortDescription: 'Lead outbound sales campaigns and mentor junior team members.',
    active: true,
    order: 2,
  },
  {
    id: 'team-lead-ops',
    title: 'Operations Team Lead',
    department: 'Operations',
    type: 'Full-time',
    description:
      'Oversee daily operations of a 15-20 person team, manage schedules, conduct performance reviews, and ensure KPI targets are met. Collaborate with QA and training departments to maintain service excellence.',
    shortDescription: 'Manage a team of 15-20 agents and drive operational excellence.',
    active: true,
    order: 3,
  },
  {
    id: 'qa-analyst',
    title: 'Quality Assurance Analyst',
    department: 'Operations',
    type: 'Full-time',
    description:
      'Monitor and evaluate agent interactions across all channels. Develop quality scorecards, identify training needs, and provide actionable feedback to improve team performance and customer satisfaction.',
    shortDescription: 'Evaluate interactions and drive quality improvement across teams.',
    active: true,
    order: 4,
  },
  {
    id: 'hr-coordinator',
    title: 'HR & Recruitment Coordinator',
    department: 'Admin',
    type: 'Full-time',
    description:
      'Manage the full recruitment cycle from sourcing to onboarding. Coordinate interviews, maintain employee records, and support HR initiatives including engagement programmes and policy implementation.',
    shortDescription: 'Drive recruitment and support HR operations across the organisation.',
    active: true,
    order: 5,
  },
  {
    id: 'lead-gen-specialist',
    title: 'Lead Generation Specialist',
    department: 'Sales',
    type: 'Full-time',
    description:
      'Identify and qualify potential business prospects through research and outbound outreach. Build prospect lists, execute calling campaigns, and schedule appointments for the sales team. Requires excellent research skills.',
    shortDescription:
      'Source and qualify high-value prospects through targeted outreach campaigns.',
    active: true,
    order: 6,
  },
];

async function seed() {
  const batch = db.batch();

  for (const job of JOB_POSTINGS) {
    const { id, ...data } = job;
    const ref = db.collection('jobs').doc(id);
    batch.set(ref, data, { merge: true });
  }

  await batch.commit();
  console.log(`✓ Seeded ${JOB_POSTINGS.length} jobs into Firestore`);
}

seed().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
