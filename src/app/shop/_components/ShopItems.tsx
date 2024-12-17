import { db } from "@/lib/prisma";
import { ProductGrid } from "./products/ProductGrid";
import { parseFilterParams, filterProducts } from "../utils/filter-utils";
import type { FilterParams, Product } from "@/lib/types";

interface ShopItemsProps {
  searchParams?: FilterParams;
}

export async function ShopItems({ searchParams }: ShopItemsProps) {
  const filters = parseFilterParams(searchParams);

  // Considere adicionar seleção de campos específicos se não precisar de todos
  const products = await db.product.findMany({
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

  // Pode adicionar tratamento de erro caso não haja produtos
  const filteredItems = filterProducts(transformedProducts, filters) || [];

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
