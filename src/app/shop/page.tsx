// app/shop/page.tsx
import { Suspense } from 'react'
import { ShopItems } from '@/app/shop/_components/ShopItems'
import { ShopHeader } from '@/app/shop/_components/ShopHeader'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function ShopPage({
  searchParams,
}: {
  searchParams: { 
    name?: string; 
    category?: string; 
    minPrice?: string; 
    maxPrice?: string; 
  };
}) {
  return (
    <>
      <Header />
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-8">Todos os Produtos</h1>
        <ShopHeader />
        <Suspense fallback={<div>Loading...</div>}>
          <ShopItems searchParams={searchParams} />
        </Suspense>
      </div>
      <Footer />
    </>
  )
}