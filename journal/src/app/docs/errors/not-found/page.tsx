import Link from "next/link";

export default function NotFoundDocsPage() {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-semibold">NOT_FOUND error</h1>
      <p className="text-zinc-600">
        You are seeing this when a requested resource does not exist or is no longer available.
      </p>
      <h2 className="text-lg font-medium">Common causes</h2>
      <ul className="list-disc pl-6 space-y-1 text-zinc-600">
        <li>The entry ID does not exist or was deleted.</li>
        <li>A shared link was revoked (the entry is private again).</li>
        <li>The share ID is incorrect or mistyped.</li>
      </ul>
      <h2 className="text-lg font-medium">How to fix</h2>
      <ul className="list-disc pl-6 space-y-1 text-zinc-600">
        <li>Verify the URL or identifier is correct.</li>
        <li>If you control the entry, ensure it is shared publicly.</li>
        <li>Request a fresh link from the owner.</li>
      </ul>
      <div className="pt-2">
        <Link href="/" className="underline">Return to home</Link>
      </div>
    </div>
  );
}
