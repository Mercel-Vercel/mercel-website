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
  const { firstName, lastName, email, sample } = await request.json();

  if (!firstName || !lastName || !email || !sample) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const token = crypto.randomUUID().replace(/-/g, "");
  const expiresAt = Date.now() + 24 * 60 * 60 * 1000;

  await redis.set(
    token,
    JSON.stringify({ firstName, lastName, email, sample, expiresAt, used: false }),
    { ex: 60 * 60 * 24 }
  );

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mercel-vercel.vercel.app";
  const downloadLink = `${baseUrl}/api/validate-sample?token=${token}&sample=${sample}`;

  const { error } = await resend.emails.send({
    from: "Mercel <onboarding@resend.dev>", // Replace with verified domain later
    to: email,
    subject: `Your Free Sample: ${sample}`,
    html: `<p>Hello ${firstName},</p>
           <p>Thanks for requesting <strong>${sample}</strong>.</p>
           <p>Click the link below to download your sample. This link expires in 24 hours and can only be used once.</p>
           <p><a href="${downloadLink}">Download Now</a></p>
           <p>Best,<br/>Mercel</p>`,
  });

  if (error) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
