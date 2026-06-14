import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

async function sendPush(sub: PushSubscription, payload: string) {
  const { default: webpush } = await import("web-push");
  webpush.setVapidDetails(
    "mailto:admin@madring.guide",
    process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
    process.env.VAPID_PRIVATE_KEY!
  );
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  await webpush.sendNotification(sub as any, payload);
}

export async function POST(req: NextRequest) {
  const adminSecret = process.env.NOTIFY_SECRET;
  if (adminSecret && req.headers.get("x-notify-secret") !== adminSecret) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { title, body, url } = await req.json();
  const supaUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supaKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supaUrl || !supaKey) return NextResponse.json({ ok: false }, { status: 503 });

  const db = createClient(supaUrl, supaKey);
  const { data: rows } = await db.from("push_subscriptions").select("subscription");
  if (!rows?.length) return NextResponse.json({ sent: 0 });

  const payload = JSON.stringify({ title, body, url: url ?? "/" });
  const results = await Promise.allSettled(
    rows.map((r) => sendPush(JSON.parse(r.subscription), payload))
  );
  const sent = results.filter((r) => r.status === "fulfilled").length;
  return NextResponse.json({ sent, total: rows.length });
}
