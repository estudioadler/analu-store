import { ProductCarousel } from "@/components/ProductCarousel";
import { prisma } from "@/lib/prisma";
import { Product, convertPrismaProduct } from "@/lib/types";

interface RelatedProductsProps {
  category: string;
  currentProductId: string;
}

export async function RelatedProducts({ category, currentProductId }: RelatedProductsProps) {
  const relatedProductsRaw = await prisma.product.findMany({
    where: {
      category: category,
      NOT: { id: currentProductId }
    },
    take: 11
  });

  const relatedProducts: Product[] = relatedProductsRaw.map(convertPrismaProduct);

  return relatedProducts.length > 0 ? (
    <div className="px-4 md:px-6">
      <ProductCarousel title="Produtos relacionados" products={relatedProducts} />
    </div>
  ) : null;
}