"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { FilterSheet } from "./filters/FilterSheet"
import { FilterState } from "@/lib/types"

export function ShopHeader() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isOpen, setIsOpen] = useState(false)
  const [filters, setFilters] = useState<FilterState>({
    name: searchParams.get("name") || "",
    category: searchParams.get("category") || "",
    minPrice: searchParams.get("minPrice")
      ? Number(searchParams.get("minPrice"))
      : 0,
    maxPrice: searchParams.get("maxPrice")
      ? Number(searchParams.get("maxPrice"))
      : 100,
  })

  const handleFilterChange = (key: string, value: string | number) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  const applyFilters = () => {
    const params = new URLSearchParams()
    if (filters.name) params.set("name", filters.name)
    if (filters.category) params.set("category", filters.category)
    if (filters.minPrice > 0) params.set("minPrice", filters.minPrice.toString())
    if (filters.maxPrice < 100) params.set("maxPrice", filters.maxPrice.toString())
    router.push(`/shop?${params.toString()}`)
    setIsOpen(false)
  }

  return (
    <div className="mb-6">
      <FilterSheet
        isOpen={isOpen}
        filters={filters}
        onOpenChange={setIsOpen}
        onFilterChange={handleFilterChange}
        onApplyFilters={applyFilters}
      />
    </div>
  )
}

