import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { Readable } from "stream";

const TOKEN_FILE = path.join(process.cwd(), "data", "tokens.json");
const SAMPLES_DIR = path.join(process.cwd(), "public", "samples");

function readTokens() {
  if (!fs.existsSync(TOKEN_FILE)) return {};
  return JSON.parse(fs.readFileSync(TOKEN_FILE, "utf8"));
}

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const token = url.searchParams.get("token");
  const sample = url.searchParams.get("sample");

  if (!token || !sample) {
    return NextResponse.json({ error: "Missing token/sample" }, { status: 400 });
  }

  const tokens = readTokens();
  const record = tokens[token];

  if (!record) {
    return NextResponse.json({ error: "Invalid or expired token" }, { status: 404 });
  }

  if (record.used) {
    return NextResponse.json({ error: "Token already used" }, { status: 410 });
  }

  if (Date.now() > record.expiresAt) {
    delete tokens[token];
    writeTokens(tokens);
    return NextResponse.json({ error: "Token expired" }, { status: 410 });
  }

  // Mark as used (single-use)
  tokens[token].used = true;
  writeTokens(tokens);

  // Serve the file
  const filePath = path.join(SAMPLES_DIR, `${sample}.pdf`);
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
