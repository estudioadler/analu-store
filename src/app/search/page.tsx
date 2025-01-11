// /search/page.tsx
import { Suspense } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import SearchResults from "./SearchResults";

const SearchPage = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 md:px-6 py-28 min-h-screen">
        <Suspense fallback={<div>Carregando resultados...</div>}>
          <SearchResults />
        </Suspense>
      </div>
      <Footer />
    </>
  );
};

export default SearchPage;