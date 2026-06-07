export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL as string
export const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string

export function supabaseFetch(path: string, body: unknown): Promise<Response> {
  return fetch(`${SUPABASE_URL}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
    },
    body: JSON.stringify(body),
  })
}
