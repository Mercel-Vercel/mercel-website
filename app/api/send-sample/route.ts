import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";
import { Resend } from "resend";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_KV_REST_API_URL!,
  token: process.env.UPSTASH_REDIS_KV_REST_API_TOKEN!,
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const { email, sample } = await request.json();

  if (!email || !sample) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const token = crypto.randomUUID().replace(/-/g, "");
  const expiresAt = Date.now() + 24 * 60 * 60 * 1000;

  await redis.set(token, JSON.stringify({ email, sample, expiresAt, used: false }), { ex: 60 * 60 * 24 });

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mercel-vercel.vercel.app";
  const downloadLink = `${baseUrl}/api/validate-sample?token=${token}&sample=${sample}`;

  const { error } = await resend.emails.send({
    from: "Mercel <onboarding@resend.dev>",
    to: email,
    subject: `Your Free Sample: ${sample}`,
    html: `<p>Click <a href="${downloadLink}">here</a> to download your sample. This link expires in 24 hours.</p>`,
  });

  if (error) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
