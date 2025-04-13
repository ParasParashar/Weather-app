"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar({ defaultValue }) {
  const [search, setSearch] = useState(defaultValue || "");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/?search=${encodeURIComponent(search)}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search for a city..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
      </div>
    </form>
  );
}
