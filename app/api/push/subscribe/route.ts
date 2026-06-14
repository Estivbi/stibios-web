import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: NextRequest) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return NextResponse.json({ ok: false }, { status: 503 });

  const sub = await req.json();
  const db = createClient(url, key);
  await db.from("push_subscriptions").upsert(
    { endpoint: sub.endpoint, subscription: JSON.stringify(sub) },
    { onConflict: "endpoint" }
  );
  return NextResponse.json({ ok: true });
}
