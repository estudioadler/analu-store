import { notFound } from "next/navigation";
import { getProduct } from "./actions";
import ProductDetailClient from "./_components/ProductDetailClient";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RelatedProducts } from "./_components/RelatedProducts";

export type paramsType = Promise<{ slug: string }>
export default async function ProductDetailPage({ params }: { params: paramsType }) {
  const { slug } = await params;
  const product = await getProduct(slug) as any;  

  if (!product) {
    notFound();
  }

  return (
    <div>
      <Header />
      <ProductDetailClient product={product} />
      <RelatedProducts category={product.category} currentProductId={product.id} />
      <Footer />
    </div>
  );
}