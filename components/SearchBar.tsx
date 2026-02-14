"use client";

export default function SearchBar({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <input
      type="text"
      placeholder="Search bookmarks..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="
        input w-full md:w-64
        focus:ring-blue-500/40
        focus:border-blue-500
      "
    />
  );
}
