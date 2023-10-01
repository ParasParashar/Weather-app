"use client";
import { useState } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
const SearchBar = () => {
    const router = useRouter();
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`?search=${search}`);
  };
  return (
    <form onSubmit={handleSubmit} className="flex  items-center p-2 bg-neutral-100/30 my-2  rounded-md">
      <input
        type="text"
        value={search}
        placeholder="Search City,Country or State......"
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 bg-neutral-100 rounded-lg text-black"
      />
      <button type="submit" className="p-1 rounded-lg hover:bg-blue-100/20">
        <Search />
      </button>
    </form>
  );
};

export default SearchBar;
