
import React from "react";

export default function Pagination({ items }) {
  const pages = Math.ceil(items.length / 10);
  return (
    <div className="mt-4 flex gap-2">
      {Array.from({ length: pages }, (_, i) => (
        <button key={i} className="border px-2 py-1">
          {i + 1}
        </button>
      ))}
    </div>
  );
}
