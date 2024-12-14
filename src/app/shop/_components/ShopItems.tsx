import data from "@/lib/data"
import { ProductGrid } from "./products/ProductGrid"
import { parseFilterParams, filterProducts } from "../utils/filter-utils"
import type { FilterParams } from "@/lib/types"

interface ShopItemsProps {
  searchParams?: FilterParams
}

export async function ShopItems({ searchParams }: ShopItemsProps) {
  const filters = parseFilterParams(searchParams)
  const filteredItems = filterProducts(data.products, filters)

  return <ProductGrid products={filteredItems} />
}