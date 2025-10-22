import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const data = await req.json();
  const updates: { text?: string; isPrivate?: boolean } = {};
  if (typeof data.text === "string") updates.text = data.text;
  if (typeof data.isPrivate === "boolean") updates.isPrivate = data.isPrivate;

  const entry = await prisma.entry.update({ where: { id }, data: updates });
  return NextResponse.json(entry);
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  await prisma.entry.delete({ where: { id } });
  return new NextResponse(null, { status: 204 });
}
