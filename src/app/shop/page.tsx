import { Suspense, use } from 'react'
import { ShopItems } from './_components/ShopItems'
import { ShopHeader } from './_components/ShopHeader'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import type { ShopPageProps } from './types'


export default function ShopPage({ searchParams }: ShopPageProps) {
  const params = use(searchParams)
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 md:px-6 py-8">
        <h1 className="text-3xl font-bold mb-8">Todos os Produtos</h1>
        <Suspense fallback={<div>Carregando ...</div>}>
          <ShopHeader />
        </Suspense>
        <Suspense fallback={<div>Carregando...</div>}>
          <ShopItems searchParams={searchParams} />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}