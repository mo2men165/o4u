import { onSchedule } from 'firebase-functions/v2/scheduler';
import { initializeApp } from 'firebase-admin/app';
import { getStorage } from 'firebase-admin/storage';

initializeApp();

// Runs on the 1st and 15th of every month (every ~2 weeks)
export const cleanStorage = onSchedule('0 0 1,15 * *', async () => {
  const bucket = getStorage().bucket('outsourcing-4-you-893d6.firebasestorage.app');
  const [files] = await bucket.getFiles();
  await Promise.all(files.map((file) => file.delete()));
  console.log(`Storage wipe: deleted ${files.length} files`);
});
