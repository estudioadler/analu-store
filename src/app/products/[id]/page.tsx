import { Suspense } from "react";
import { notFound } from "next/navigation";
import { products as seedData } from '@/../../prisma/seed';
import ProductDetailClient from "./ProductDetailClient";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export async function generateStaticParams() {
  return seedData.map((product) => ({
    id: product.slug,
  }));
}

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const product = seedData.find((product) => product.slug === params.id);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Header />
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-8">{product.name}</h1>
        <Suspense fallback={<div>Carregando...</div>}>
          <ProductDetailClient productId={product.id} />
        </Suspense>
      </div>
      <Footer />
    </>
  );
}

