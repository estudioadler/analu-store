import { notFound } from "next/navigation";
import { getProduct } from "./actions";
import ProductDetailClient from "./_components/ProductDetailClient";

export default async function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProduct(params.id);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}