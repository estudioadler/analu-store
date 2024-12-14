"use client"

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { FilterState } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { FilterIcon } from "hugeicons-react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"

interface FilterSheetProps {
  isOpen: boolean
  filters: FilterState
  onOpenChange: (open: boolean) => void
  onFilterChange: (key: string, value: string | number) => void
  onApplyFilters: () => void
}

export function FilterSheet({
  isOpen,
  filters,
  onOpenChange,
  onFilterChange,
  onApplyFilters,
}: FilterSheetProps) {
  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
      <Button variant="outline">
      <FilterIcon className="h-5 w-5 mr-2" />
      Filters
    </Button>
      </SheetTrigger>
      <SheetContent side="left">
      <SheetHeader>
      <SheetTitle>Filter Products</SheetTitle>
      <SheetDescription>
        Adjust the filters to find the perfect product for you.
      </SheetDescription>
    </SheetHeader>
    <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Name
          </Label>
          <Input
            id="name"
            value={filters.name}
            onChange={(e) => onFilterChange("name", e.target.value)}
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="category" className="text-right">
            Category
          </Label>
          <Input
            id="category"
            value={filters.category}
            onChange={(e) => onFilterChange("category", e.target.value)}
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="price" className="text-right">
            Price Range
          </Label>
          <div className="col-span-3">
            <Slider
              min={0}
              max={100}
              step={1}
              value={[filters.minPrice, filters.maxPrice]}
              onValueChange={(value) => {
                onFilterChange("minPrice", value[0])
                onFilterChange("maxPrice", value[1])
              }}
            />
            <div className="flex justify-between mt-2">
              <span>${filters.minPrice}</span>
              <span>${filters.maxPrice}</span>
            </div>
          </div>
        </div>
      </div>
      <Button onClick={onApplyFilters}>Apply Filters</Button>
      </SheetContent>
    </Sheet>
  )
}