import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className='text-3xl font-mollie'>404</h2>
      <p>Página não encontrada.</p>
      <Link href="/" className="underline">Página Inicial</Link>
    </div>
  )
}