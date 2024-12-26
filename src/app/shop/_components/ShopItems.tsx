import { prisma } from "@/lib/prisma";
import { ProductGrid } from "./products/ProductGrid";
import { parseFilterParams, filterProducts } from "../utils/filter-utils";
import type { FilterParams, Product } from "@/lib/types";

interface ShopItemsProps {
  searchParams: Promise<FilterParams>;
}

export async function ShopItems({ searchParams }: ShopItemsProps) {
  // Await the searchParams to access its properties
  const params = await searchParams;

  const filters = parseFilterParams(params);

  const products = await prisma.product.findMany({
    select: {
      id: true,
      name: true,
      slug: true,
      size: true,
      quantity: true,
      category: true,
      image: true,
      price: true,
      description: true,
      rating: true,
    },
  });

  const transformedProducts: Product[] = products.map((product) => ({
    ...product,
    size: product.size ?? undefined,
    quantity: product.quantity ?? undefined,
    price: Number(product.price),
  }));

  const filteredItems = filterProducts(transformedProducts, filters);

  return (
    <div>
      {filteredItems.length > 0 ? (
        <ProductGrid products={filteredItems} />
      ) : (
        <p>Nenhum produto encontrado</p>
      )}
    </div>
  );
}

