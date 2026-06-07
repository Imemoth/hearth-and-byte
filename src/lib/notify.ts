import { supabaseFetch } from './config'

export type NotifySource = 'chatbot' | 'honlap'

export async function subscribe(
  email: string,
  source: NotifySource,
): Promise<{ success: boolean; already_subscribed?: boolean }> {
  const res = await supabaseFetch('/functions/v1/subscribe', { email, source })
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  return res.json()
}
