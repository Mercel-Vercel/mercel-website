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

  // Validate all required fields
  if (!firstName || !lastName || !email || !sample) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  // Generate a unique token for the download link
  const token = crypto.randomUUID().replace(/-/g, "");
  const expiresAt = Date.now() + 24 * 60 * 60 * 1000; // 24 hours

  // Store the token for download validation (this expires after 24h)
  await redis.set(
    token,
    JSON.stringify({ email, sample, expiresAt, used: false }),
    { ex: 60 * 60 * 24 }
  );

  // Store the lead data permanently (no expiry)
  await redis.hset(`lead:${email}`, {
    firstName,
    lastName,
    email,
    sample,
    createdAt: new Date().toISOString(),
  });

  // Build the download link
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mercel-vercel.vercel.app";
  const downloadLink = `${baseUrl}/api/validate-sample?token=${token}&sample=${sample}`;

  // Send the sample email to the lead
  const { error: sampleError } = await resend.emails.send({
    from: "Mercel <onboarding@resend.dev>", // Replace with verified domain later
    to: email,
    subject: `Your Free Sample: ${sample}`,
    html: `<p>Hello ${firstName},</p>
           <p>Thanks for requesting <strong>${sample}</strong>.</p>
           <p>Click the link below to download your sample. This link expires in 24 hours and can only be used once.</p>
           <p><a href="${downloadLink}">Download Now</a></p>
           <p>Best,<br/>Mercel</p>`,
  });

  if (sampleError) {
    return NextResponse.json({ error: "Failed to send sample email" }, { status: 500 });
  }

  // Send a notification email to your ProtonMail inbox (so you have the lead details)
  const { error: notifyError } = await resend.emails.send({
    from: "Mercel <onboarding@resend.dev>",
    to: "Mercel.Vercel@proton.me",
    subject: `New Lead: ${firstName} ${lastName}`,
    html: `<p>A new lead has requested a sample:</p>
           <p><strong>Name:</strong> ${firstName} ${lastName}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Sample:</strong> ${sample}</p>
           <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>`,
  });

  // If notification fails, log but don't fail the request
  if (notifyError) {
    console.error("Lead notification email failed:", notifyError);
  }

  return NextResponse.json({ success: true });
}
  return NextResponse.json({ success: true });
}
