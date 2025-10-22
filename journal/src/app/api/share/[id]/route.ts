import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

// Toggle sharing: if private, generate shareId and set isPrivate=false; if public, remove shareId and set isPrivate=true
export async function POST(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const entry = await prisma.entry.findUnique({ where: { id } });
  if (!entry) return NextResponse.json({ error: "Not found" }, { status: 404 });

  if (entry.isPrivate) {
    const updated = await prisma.entry.update({
      where: { id },
      data: { isPrivate: false, shareId: crypto.randomUUID() },
    });
    return NextResponse.json(updated);
  } else {
    const updated = await prisma.entry.update({
      where: { id },
      data: { isPrivate: true, shareId: null },
    });
    return NextResponse.json(updated);
  }
}
