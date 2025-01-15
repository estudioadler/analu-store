import { ProductCarousel } from "@/components/ProductCarousel";
import { prisma } from "@/lib/prisma";
import { Product, convertPrismaProduct } from "@/lib/types";

interface BestSellersProductsProps {
  category: string;
  currentProductId: string;
}

export async function BestSellersProducts({ category, currentProductId }: BestSellersProductsProps) {
  const relatedProductsRaw = await prisma.product.findMany({
    where: {
      rating: {
          gt: 4,
      }
    },
    orderBy: {
      rating: 'desc'
    },
    take: 11
  });

  const relatedProducts: Product[] = relatedProductsRaw.map(convertPrismaProduct);

  return relatedProducts.length > 0 ? (
    <div className="px-4 md:px-6">
      <ProductCarousel title="Mais vendidos" products={relatedProducts} />
    </div>
  ) : null;
}