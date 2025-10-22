import Link from "next/link";
import { notFound } from "next/navigation";
import { getVariantsByCode, getAllCodes } from "@/lib/error-catalog";

export function generateStaticParams() {
  return getAllCodes().map((code) => ({ code }));
}

export default function ErrorDetailPage({ params }: { params: { code: string } }) {
  const { code } = params;
  const variants = getVariantsByCode(code);
  if (!variants) notFound();

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-semibold">{code}</h1>
      <p className="text-zinc-600">Known variants for this error code.</p>
      <div className="space-y-3">
        {variants.map((v, idx) => (
          <div key={idx} className="rounded-lg border p-4 bg-white dark:bg-zinc-900">
            <div className="text-sm uppercase tracking-wide text-zinc-500">{v.scope}</div>
            <div className="font-medium">Category: {v.category}</div>
            <div className="text-sm text-zinc-600">HTTP status: {v.httpStatus}</div>
            {v.note ? <div className="text-sm mt-2">{v.note}</div> : null}
          </div>
        ))}
      </div>
      <div className="pt-2">
        <Link href="/docs/errors" className="underline">Back to all errors</Link>
      </div>
    </div>
  );
}
