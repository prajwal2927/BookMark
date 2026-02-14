"use client";

import { Sun } from "lucide-react";

export default function ThemeToggle() {
  return (
    <div
      className="
        p-2.5 rounded-xl
        bg-blue-100
        text-blue-600
        cursor-default
      "
      aria-label="Light mode enabled"
    >
      <Sun className="w-5 h-5" />
    </div>
  );
}
