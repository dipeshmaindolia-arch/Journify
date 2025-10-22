import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function GET() {
  const entries = await prisma.entry.findMany({
    where: { isPrivate: true },
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(entries);
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const text = typeof data?.text === "string" ? data.text : "";
  const isPrivate = data?.isPrivate !== false; // default private
  if (!text.trim()) {
    return NextResponse.json({ error: "Text required" }, { status: 400 });
  }
  const entry = await prisma.entry.create({
    data: { text, isPrivate },
  });
  return NextResponse.json(entry, { status: 201 });
}
