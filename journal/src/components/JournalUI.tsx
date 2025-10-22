"use client";

import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Sun, Moon, Share2, Lock } from "lucide-react";
import { motion } from "framer-motion";

interface Entry {
  id: string;
  text: string;
  date?: string; // local display only
  createdAt: string;
  isPrivate: boolean;
  shareId?: string | null;
}

export default function JournalUI() {
  const [theme, setTheme] = useState("light");
  const [entry, setEntry] = useState("");
  const [entries, setEntries] = useState<Entry[]>([]);
  const [error, setError] = useState<string | null>(null);

  // theme persistence
  useEffect(() => {
    const t = localStorage.getItem("theme");
    if (t === "dark" || t === "light") setTheme(t);
  }, []);
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  async function loadEntries() {
    setError(null);
    const res = await fetch("/api/entries", { cache: "no-store" });
    const data: Entry[] = await res.json();
    const withDate = data.map((e) => ({ ...e, date: new Date(e.createdAt).toLocaleString() }));
    setEntries(withDate);
  }

  useEffect(() => {
    loadEntries();
  }, []);

  const handleSave = async () => {
    if (!entry.trim()) return;
    setError(null);
    const res = await fetch("/api/entries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: entry, isPrivate: true }),
    });
    if (!res.ok) return;
    setEntry("");
    await loadEntries();
  };

  const toggleShare = async (id: string) => {
    setError(null);
    const res = await fetch(`/api/share/${id}`, { method: "POST" });
    if (!res.ok) {
      try {
        const data = await res.json();
        if (res.status === 404 && (data?.code === "NOT_FOUND" || data?.error)) {
          const docsUrl = typeof data?.docsUrl === "string" ? data.docsUrl : "/docs/errors/not-found";
          setError(
            `This entry could not be found. Learn more: ${docsUrl}`
          );
        } else {
          setError("Something went wrong while updating sharing status.");
        }
      } catch {
        setError("Something went wrong while updating sharing status.");
      }
      return;
    }
    await loadEntries();
  };

  const shareUrl = (shareId?: string | null) =>
    shareId ? `${location.origin}/share/${shareId}` : undefined;

  return (
    <div
      className={`min-h-screen ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      } transition-colors duration-300`}
    >
      <div className="max-w-3xl mx-auto p-6 space-y-6">
        {error ? (
          <div className="rounded-md border border-red-200 bg-red-50 text-red-700 p-3 text-sm">
            {error}
          </div>
        ) : null}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold tracking-tight">My Journal</h1>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        <Card className="shadow-lg rounded-2xl border-0">
          <CardContent className="p-4 space-y-3">
            <Textarea
              placeholder="Start writing your thoughts..."
              className="min-h-[150px] text-base bg-transparent border-none focus:ring-0"
              value={entry}
              onChange={(e) => setEntry(e.target.value)}
            />
            <div className="flex justify-end">
              <Button onClick={handleSave} className="rounded-full px-5">
                Save
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          {entries.length === 0 ? (
            <p className="text-center text-gray-500 italic">
              No entries yet. Start your journaling journey today ✨
            </p>
          ) : (
            entries.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="rounded-2xl border-0 shadow-md">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-500">{item.date}</span>
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => toggleShare(item.id)}
                          aria-label={item.isPrivate ? "Share" : "Unshare"}
                          title={item.isPrivate ? "Share" : "Unshare"}
                        >
                          {item.isPrivate ? (
                            <Share2 className="h-4 w-4" />
                          ) : (
                            <Lock className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>
                    {!item.isPrivate && item.shareId ? (
                      <div className="text-xs text-zinc-500 mb-2 break-all">
                        Share link: {shareUrl(item.shareId)}
                      </div>
                    ) : null}
                    <p className="whitespace-pre-wrap text-base leading-relaxed">{item.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
