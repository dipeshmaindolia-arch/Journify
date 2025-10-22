import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";

export default async function SharedEntryPage({
  params,
}: {
  params: { shareId: string };
}) {
  const { shareId } = params;
  const entry = await prisma.entry.findFirst({ where: { shareId, isPrivate: false } });
  if (!entry) return notFound();
  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="text-sm text-zinc-500 mb-2">{new Date(entry.createdAt).toLocaleString()}</div>
      <div className="whitespace-pre-wrap text-base leading-relaxed">{entry.text}</div>
    </div>
  );
}
