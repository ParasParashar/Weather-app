import MainCard from "./components/MainCard";

export default function Home({ searchParams }) {
  return (
    <main className="min-h-screen bg-Main flex items-center justify-center">
      <div className="mx-auto p-0 rounded-lg md:p-10  ">
        <MainCard search={searchParams.search} />
      </div>
    </main>
  );
}
