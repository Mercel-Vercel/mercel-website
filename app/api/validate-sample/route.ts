import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";
import fs from "fs";
import path from "path";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_KV_REST_API_URL!,
  token: process.env.UPSTASH_REDIS_KV_REST_API_TOKEN!,
});

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const token = url.searchParams.get("token");
  const sample = url.searchParams.get("sample");

  if (!token || !sample) {
    return NextResponse.json({ error: "Missing token/sample" }, { status: 400 });
  }

  const rawRecord = await redis.get(token);
  if (!rawRecord) {
    return NextResponse.json({ error: "Invalid or expired link" }, { status: 404 });
  }

  const record = JSON.parse(rawRecord as string);

  if (record.used || Date.now() > (record.expiresAt || 0)) {
    return NextResponse.json({ error: "Invalid or expired link" }, { status: 404 });
  }

  // Mark as used (single-use)
  await redis.set(token, JSON.stringify({ ...record, used: true }), { ex: 60 * 60 * 24 });

  // Serve the file
  const filePath = path.join(process.cwd(), "public", "samples", `${sample}.pdf`);
  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }

  const fileBuffer = fs.readFileSync(filePath);
  const body = new Uint8Array(fileBuffer);

  return new NextResponse(body, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${sample}.pdf"`,
    },
  });
}
