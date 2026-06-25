const ALLOWED_ORIGINS = [
  'https://outsourcing-4-you.com',
  'https://www.outsourcing-4-you.com',
];

export function corsHeaders(origin: string | null): Record<string, string> {
  const allowed = origin && ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    'Access-Control-Allow-Origin': allowed,
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

export function handleOptions(request: Request): Response {
  return new Response(null, {
    status: 204,
    headers: corsHeaders(request.headers.get('origin')),
  });
}
