import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import crypto from "crypto";

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Initialize Firebase (set env vars in Vercel)
const app = initializeApp({
  credential: cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  }),
});
const db = getFirestore(app);

export async function POST(request: NextRequest) {
  const { email, sample } = await request.json();

  if (!email || !sample) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  // Generate unique token
  const token = crypto.randomBytes(32).toString("hex");
  const expiresAt = Date.now() + 24 * 60 * 60 * 1000; // 24 hours

  // Store token in Firebase
  await db.collection("sample_tokens").doc(token).set({
    email,
    sample,
    expiresAt,
    used: false,
    createdAt: new Date().toISOString(),
  });

  // Build download link
  const downloadLink = `https://mercel-vercel.vercel.app/samples/download?token=${token}&sample=${sample}`;

  // Send email via Resend
  const { error } = await resend.emails.send({
    from: "Mercel <onboarding@resend.dev>",  // Replace with your verified domain later
    to: email,
    subject: `Your Free Sample: ${sample}`,
    html: `<p>Hi,</p><p>Thanks for requesting <strong>${sample}</strong>.</p><p>Click the link below to download your sample. This link expires in 24 hours and can only be used once.</p><p><a href="${downloadLink}">Download Now</a></p><p>Best,<br/>Mercel</p>`,
  });

  if (error) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
