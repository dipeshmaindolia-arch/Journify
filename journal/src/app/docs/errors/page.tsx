import Link from "next/link";
import { getGroupedByScopeAndCategory } from "@/lib/error-catalog";

export default function ErrorsIndexPage() {
  const groups = getGroupedByScopeAndCategory();
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Error codes</h1>
      <p className="text-zinc-600">Browse known error codes categorized by scope and category.</p>
      <div className="grid md:grid-cols-2 gap-6">
        {groups.map((g) => (
          <div key={`${g.scope}-${g.category}`} className="rounded-lg border p-4 bg-white dark:bg-zinc-900">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm uppercase tracking-wide text-zinc-500">{g.scope}</div>
              <div className="font-medium">{g.category}</div>
            </div>
            <ul className="text-sm space-y-1">
              {g.items.map((item) => (
                <li key={`${g.scope}-${g.category}-${item.code}`} className="flex items-center justify-between">
                  <Link href={`/docs/errors/${item.code}`} className="underline">
                    {item.code}
                  </Link>
                  <span className="text-zinc-500">HTTP {item.httpStatus}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
