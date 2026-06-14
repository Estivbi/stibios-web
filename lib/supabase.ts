import { createClient } from "@supabase/supabase-js";
const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";
export const supabase = url && key ? createClient(url, key) : null;
export type Event = { id: string; day: "vie" | "sab" | "dom" | "free"; time_label: string; name: string; category: string; type: "f1" | "f2" | "f3" | "show" | null; badge: string | null; is_confirmed: boolean; };
export type Zone = { id: string; number: number; name: string; description: string; ticket_type: "all" | "gold" | "platinum" | "general" | "separate"; location: string; };
export type TransportOption = { id: string; icon: string; title: string; detail: string; time_estimate: string; sort_order: number; };
