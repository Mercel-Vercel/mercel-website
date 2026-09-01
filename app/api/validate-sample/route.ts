import { NextRequest, NextResponse } from "next/server";
import { kv } from "@vercel/kv";
import { Readable } from "stream";
import fs from "fs";
import path from "path";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const token = url.searchParams.get("token");
  const sample = url.searchParams.get("sample");

  if (!token || !sample) {
    return NextResponse.json({ error: "Missing token/sample" }, { status: 400 });
  }

  const record = await kv.get(token);

  if (!record || record.used || Date.now() > (record.expiresAt || 0)) {
    return NextResponse.json({ error: "Invalid or expired link" }, { status: 404 });
  }

  await kv.set(token, { ...record, used: true }, { ex: 60 * 60 * 24 });

  const filePath = path.join(process.cwd(), "public", "samples", `${sample}.pdf`);
  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }

  const fileBuffer = fs.readFileSync(filePath);
  const stream = Readable.from(fileBuffer);

  return new NextResponse(stream, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${sample}.pdf"`,
    },
  });
}
