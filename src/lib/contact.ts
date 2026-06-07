import { supabaseFetch } from './config'

export interface LeadData {
  name: string
  email: string
  phone?: string
  message: string
  service?: string
}

export async function submitLead(
  data: LeadData,
): Promise<{ success: boolean; lead_id?: string }> {
  const res = await supabaseFetch('/functions/v1/submit-lead', data)
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  return res.json()
}
