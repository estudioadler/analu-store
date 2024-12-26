import { notFound } from "next/navigation";
import { getProduct } from "./actions";
import ProductDetailClient from "./_components/ProductDetailClient";

export type paramsType = Promise<{ slug: string }>
export default async function ProductDetailPage({ params }: { params: paramsType }) {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}