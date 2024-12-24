import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import ProductDetailClient from "./ProductDetailClient";
import { RelatedProducts } from "./RelatedProducts";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { convertPrismaProduct, Product } from "@/lib/types";

export async function generateStaticParams() {
  const products = await prisma.product.findMany({
    select: { slug: true }
  });

  return products.map((product: { slug: string }) => ({
    id: product.slug,
  }));
}

interface ProductDetailPageProps {
  params: { id: string };
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { id } = params;

  const productData = await prisma.product.findUnique({
    where: { slug: id }
  });

  if (!productData) {
    notFound();
  }

  const product: Product = convertPrismaProduct(productData);

  return (
    <>
      <Header />
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-8">{product.name}</h1>
        <ProductDetailClient product={product} />
        <RelatedProducts category={product.category} currentProductId={product.id} />
      </div>
      <Footer />
    </>
  );
}

