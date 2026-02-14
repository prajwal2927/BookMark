"use client";
import { createClient } from "@/utils/supabase/client";
import { useState } from "react";
import { Plus, Link2, Type, Loader2 } from "lucide-react";
import { useToast } from "./Toast";

export default function BookmarkForm({ userId }: { userId: string }) {
  const supabase = createClient();
  const { toast } = useToast();
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  async function addBookmark() {
    if (!title || !url) return;

    setLoading(true);
    const { error } = await supabase.from("bookmarks").insert({
      title,
      url,
      user_id: userId,
    });

    setLoading(false);

    if (error) {
      toast("Failed to add bookmark", "error");
      return;
    }

    setTitle("");
    setUrl("");
    toast("Bookmark added successfully!", "success");
  }

  return (
    <div className="card-elevated p-6 animate-fade-in-up">
      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-2 rounded-lg shadow-sm">
          <Plus className="w-4 h-4 text-white" />
        </div>
        <h2 className="text-lg font-semibold text-foreground">
          Add New Bookmark
        </h2>
      </div>

      {/* Form */}
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Title */}
        <div className="relative flex-1">
          <Type className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Bookmark title"
            className="input pl-10"
            onKeyDown={(e) => e.key === "Enter" && addBookmark()}
          />
        </div>

        {/* URL */}
        <div className="relative flex-1">
          <Link2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com"
            className="input pl-10"
            onKeyDown={(e) => e.key === "Enter" && addBookmark()}
          />
        </div>

        {/* Button */}
<button
  onClick={addBookmark}
  disabled={loading || !title || !url}
  className="
    flex items-center justify-center gap-2
    min-w-[120px]
    px-6 py-3 rounded-xl font-semibold text-white
    bg-gradient-to-r from-blue-500 to-indigo-600
    hover:from-blue-600 hover:to-indigo-700
    shadow-md hover:shadow-lg
    transition-all duration-200
    disabled:opacity-50
    disabled:cursor-not-allowed
    disabled:hover:shadow-md
  "
>
  {loading ? (
    <Loader2 className="w-4 h-4 animate-spin" />
  ) : (
    <>
      <Plus className="w-4 h-4" />
      Add
    </>
  )}
</button>

      </div>
    </div>
  );
}
