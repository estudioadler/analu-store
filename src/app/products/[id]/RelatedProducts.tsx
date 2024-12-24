import { prisma } from "@/lib/prisma";
import { convertPrismaProduct, Product } from "@/lib/types";
import { ProductCarousel } from "@/components/ProductCarousel";

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
    <div className="mt-12">
      <ProductCarousel products={relatedProducts} />
    </div>
  ) : null;
}

