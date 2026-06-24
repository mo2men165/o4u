import { cookies } from 'next/headers';

export const ADMIN_SESSION_COOKIE = 'admin_session';

export function validateCredentials(username: string, password: string): boolean {
  return (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  );
}

export function isAdminAuthenticated(sessionValue: string | undefined): boolean {
  return (
    !!sessionValue &&
    !!process.env.ADMIN_SESSION_SECRET &&
    sessionValue === process.env.ADMIN_SESSION_SECRET
  );
}

export async function requireAdmin(): Promise<boolean> {
  const cookieStore = await cookies();
  const session = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;
  return isAdminAuthenticated(session);
}
