// app/shop/_components/ShopItems.tsx
import data from "@/lib/data"
import { ProductCard } from '@/components/ProductCard'

export function ShopItems({ 
  searchParams 
}: { 
  searchParams?: { 
    name?: string; 
    category?: string; 
    minPrice?: string; 
    maxPrice?: string; 
  } 
}) {
  const name = searchParams?.name?.toLowerCase() || ''
  const category = searchParams?.category?.toLowerCase() || ''
  const minPrice = searchParams?.minPrice ? Number(searchParams.minPrice) : 0
  const maxPrice = searchParams?.maxPrice ? Number(searchParams.maxPrice) : Infinity

  const filteredItems = data.products.filter(item => 
    (name === '' || item.name.toLowerCase().includes(name)) &&
    (category === '' || item.category.toLowerCase().includes(category)) &&
    item.price >= minPrice &&
    item.price <= maxPrice
  )

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredItems.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  )
}