import data from "@/lib/data"
import { ProductCard } from '@/components/ProductCard'

export function ShopItems({ searchParams }: { searchParams?: { filter?: string } }) {
  const filter = searchParams?.filter?.toLowerCase() || ''

  const filteredItems = data.products.filter(item =>
    item.name.toLowerCase().includes(filter) ||
    item.description.toLowerCase().includes(filter) ||
    item.category.toLowerCase().includes(filter)
  )

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredItems.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  )
}

