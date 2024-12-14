import type { Product } from "@/lib/types"
import type { FilterParams } from "@/lib/types"

export function parseFilterParams(searchParams?: FilterParams) {
  return {
    name: searchParams?.name?.toLowerCase() || "",
    category: searchParams?.category?.toLowerCase() || "",
    minPrice: Number(searchParams?.minPrice) || 0,
    maxPrice: Number(searchParams?.maxPrice) || Infinity,
  }
}

export function filterProducts(products: Product[], filters: ReturnType<typeof parseFilterParams>) {
  return products.filter(item => {
    const matchesName = item.name.toLowerCase().includes(filters.name)
    const matchesCategory = item.category.toLowerCase().includes(filters.category)
    const matchesPrice = item.price >= filters.minPrice && 
                        (filters.maxPrice === Infinity || item.price <= filters.maxPrice)
    return matchesName && matchesCategory && matchesPrice
  })
}