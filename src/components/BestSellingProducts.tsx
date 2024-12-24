import { prisma } from "@/lib/prisma";
import { convertPrismaProduct, Product } from "@/lib/types";
import { ProductCarousel } from "@/components/ProductCarousel";

export async function BestSellingProducts() {
  const bestSellers = await prisma.product.findMany({
    orderBy: [
      { quantity: "asc" }, // Assume que menor quantidade = mais vendido
      { rating: "desc" },
    ],
    take: 12,
  });

  const bestSellingProducts: Product[] = bestSellers.map(convertPrismaProduct);

  return bestSellingProducts.length > 0 ? (
    <div className="container mx-auto md:px-6 px-4">
      <ProductCarousel products={bestSellingProducts} title="Produtos mais vendidos" />
    </div>
    
  ) : null;
}

