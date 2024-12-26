import { Suspense } from 'react'
import { ShopItems } from './_components/ShopItems'
import { ShopHeader } from './_components/ShopHeader'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import type { FilterParams } from '@/lib/types'

export default async function ShopPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  return (
    <>
      <Header />
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-8">Todos os Produtos</h1>
        <Suspense fallback={<div>Carregando cabeçalho...</div>}>
          <ShopHeader />
        </Suspense>
        <Suspense fallback={<div>Carregando...</div>}>
          <ShopItems searchParams={searchParams as FilterParams} />
        </Suspense>
      </div>
      <Footer />
    </>
  )
}

