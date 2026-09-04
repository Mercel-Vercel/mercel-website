import { NextRequest, NextResponse } from "next/server";

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY!;

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const sessionId = url.searchParams.get("session_id");

  if (!sessionId) {
    return NextResponse.json({ verified: false, error: "Missing session ID" }, { status: 400 });
  }

  try {
    const stripe = require("stripe")(STRIPE_SECRET_KEY);
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status === "paid") {
      return NextResponse.json({ verified: true, session });
    }

    return NextResponse.json({ verified: false, error: "Payment not completed" });
  } catch (error) {
    console.error("Verification error:", error);
    return NextResponse.json({ verified: false, error: "Verification failed" }, { status: 500 });
  }
}
