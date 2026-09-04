import { NextRequest, NextResponse } from "next/server";

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;

export async function POST(request: NextRequest) {
  try {
    if (!STRIPE_SECRET_KEY) {
      return NextResponse.json({ error: "Stripe secret key not configured" }, { status: 500 });
    }

    const { productName, description, amount, successUrl, cancelUrl } = await request.json();

    // Validate required fields
    if (!productName || !amount || !successUrl || !cancelUrl) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const stripe = require("stripe")(STRIPE_SECRET_KEY);

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: productName,
              description: description || "",
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      success_url: successUrl,
      cancel_url: cancelUrl,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 });
  }
}
