"use client"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useCart } from "@/context/CartContext"
import { Product, CartItem } from "@/lib/types"
import { ProductCarousel } from "@/components/ProductCarousel"
import data from "@/lib/data"
import { ShoppingBag01Icon, StarIcon } from "hugeicons-react"
import { toast } from "sonner"

interface ProductDetailClientProps {
  product: Product
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const { dispatch } = useCart()
  const [currentImage, setCurrentImage] = useState(product.image)
  const [selectedQuantity] = useState(1)

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      ...product,
      quantity: selectedQuantity
    }

    dispatch({ type: "ADD_ITEM", payload: cartItem })
    
    toast.success(`${product.name} adicionado ao carrinho`)
  }

  const relatedProducts = data.products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  const renderStarRating = () => {
    const fullStars = Math.floor(product.rating)
    const hasHalfStar = product.rating % 1 >= 0.5

    return (
      <div className="flex items-center mb-4">
        <span className="mr-2">Avaliação:</span>
        {[...Array(5)].map((_, i) => (
          <StarIcon
            key={i}
            className={`w-5 h-5 ${
              i < fullStars 
                ? 'text-yellow-400 fill-current' 
                : (i === fullStars && hasHalfStar)
                  ? 'text-yellow-400 fill-current opacity-50'
                  : 'text-gray-300'
            }`}
          />
        ))}
        <span className="ml-2">{product.rating.toFixed(1)}</span>
      </div>
    )
  }

  // Combine main image with gallery images
  const imageVariations = [product.image, ...product.galleryImages].slice(0, 4)

  return (
    <div className="py-8">
      <Card>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8 col-span-2">
            <div className="">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={currentImage}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  priority
                />
              </div>
              <div className="grid grid-cols-1 gap-2">
                {imageVariations.map((img, index) => (
                  <button
                    key={index}
                    className={`relative aspect-square overflow-hidden rounded-md focus:outline-none focus:ring-2 
                      ${currentImage === img 
                        ? 'ring-2 ring-blue-500' 
                        : 'hover:opacity-75 transition-opacity'
                      }`}
                    onClick={() => setCurrentImage(img)}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} - variação ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 12.5vw, 25vw"
                    />
                  </button>
                ))}
              </div>
            </div>
            <div className="col-span-1">
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              <p className="text-xl font-semibold mb-4">
                ${product.price.toFixed(2)}
              </p>
              <p className="mb-4">{product.description}</p>
              
              {renderStarRating()}

              <Button 
                onClick={handleAddToCart} 
                className="w-full"
                size={"lg"}
                disabled={selectedQuantity === 0}
              >
                <ShoppingBag01Icon className="mr-2 h-4 w-4" /> 
                Adicionar ao Carrinho
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {relatedProducts.length > 0 && (
        <div className="mt-12">
          <ProductCarousel products={relatedProducts} title="Produtos Relacionados" />
        </div>
      )}
    </div>
  )
}