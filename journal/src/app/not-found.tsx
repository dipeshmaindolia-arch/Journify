import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-lg text-center space-y-4">
        <h1 className="text-3xl font-semibold">404: Not Found</h1>
        <p className="text-zinc-500">
          The page or resource you requested could not be found.
        </p>
        <div className="flex gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center rounded-md bg-black text-white dark:bg-white dark:text-black px-4 py-2 text-sm font-medium"
          >
            Go home
          </Link>
          <Link
            href="/docs/errors/not-found"
            className="inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium"
          >
            Read our documentation
          </Link>
        </div>
      </div>
    </div>
  );
}
