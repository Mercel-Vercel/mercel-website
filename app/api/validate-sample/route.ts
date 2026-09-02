import { NextRequest, NextResponse } from "next/server";
import { kv } from "@vercel/kv";
import fs from "fs";
import path from "path";

interface TokenRecord {
  email: string;
  sample: string;
  expiresAt: number;
  used: boolean;
}

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const token = url.searchParams.get("token");
  const sample = url.searchParams.get("sample");

  if (!token || !sample) {
    return NextResponse.json({ error: "Missing token/sample" }, { status: 400 });
  }

  // Use type assertion to tell TypeScript the shape of the record
  const record = (await kv.get(token)) as TokenRecord | null;

  if (!record || record.used || Date.now() > (record.expiresAt || 0)) {
    return NextResponse.json({ error: "Invalid or expired link" }, { status: 404 });
  }

  // Mark as used (single-use)
  await kv.set(token, { ...record, used: true }, { ex: 60 * 60 * 24 });

  // Serve the file
  const filePath = path.join(process.cwd(), "public", "samples", `${sample}.pdf`);
  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }

  const fileBuffer = fs.readFileSync(filePath);
  // Convert Buffer to Uint8Array (compatible with BodyInit)
  const body = new Uint8Array(fileBuffer);

  return new NextResponse(body, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${sample}.pdf"`,
    },
  });
}
