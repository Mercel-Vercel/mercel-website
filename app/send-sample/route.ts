import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import crypto from "crypto";

// Path to your JSON token store (create if missing)
const TOKEN_FILE = path.join(process.cwd(), "data", "tokens.json");

function readTokens() {
  if (!fs.existsSync(TOKEN_FILE)) return {};
  return JSON.parse(fs.readFileSync(TOKEN_FILE, "utf8"));
}

function writeTokens(tokens: any) {
  fs.mkdirSync(path.dirname(TOKEN_FILE), { recursive: true });
  fs.writeFileSync(TOKEN_FILE, JSON.stringify(tokens, null, 2));
}

export async function POST(request: NextRequest) {
  const { email, sample } = await request.json();

  if (!email || !sample) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  // Generate unique token
  const token = crypto.randomBytes(32).toString("hex");
  const expiresAt = Date.now() + 24 * 60 * 60 * 1000; // 24 hours

  // Store token
  const tokens = readTokens();
  tokens[token] = { email, sample, expiresAt, used: false };
  writeTokens(tokens);

  // Send email (using Nodemailer or any free SMTP — see Step 3)
  // For now, log the link
  const downloadLink = `https://mercel-vercel.vercel.app/samples/download?token=${token}&sample=${sample}`;
  console.log("Download link:", downloadLink);

  // You'll replace this with actual email sending
  // mailer.send({ to: email, subject: "Your Free Sample", text: `Download here: ${downloadLink}` });

  return NextResponse.json({ success: true, link: downloadLink });
}
