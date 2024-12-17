import { ProductCard } from "@/components/ProductCard"
import { Product } from "@/lib/types"
import { shuffle } from "lodash"
import { useMemo } from "react"

interface ProductGridProps {
  products: Product[]
}

export function ProductGrid({ products }: ProductGridProps) {
  // Em vez de shuffle em todos os renders
  const shuffledProducts = useMemo(() => shuffle(products), [products])

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {shuffledProducts.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}