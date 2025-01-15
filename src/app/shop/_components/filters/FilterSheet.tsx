"use client"

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { FilterState } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { FilterIcon } from "hugeicons-react"

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
          Filtros
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader className="flex flex-col items-start">
          <SheetTitle>Filtrar Produtos</SheetTitle>
          <SheetDescription>
            Ajuste os filtros para encontrar o produto perfeito para você.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="name" className="text-right">
              Nome
            </Label>
            <Input
              id="name"
              value={filters.name}
              onChange={(e) => onFilterChange("name", e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="category" className="text-right">
              Categoria
            </Label>
            <Select
              value={filters.category}
              onValueChange={(value) => onFilterChange("category", value)}
            >
              <SelectTrigger className="w-full col-span-3">
                <SelectValue placeholder="Selecione uma categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Bermudas">Bermudas</SelectItem>
                  <SelectItem value="Blusas">Blusas</SelectItem>
                  <SelectItem value="Calças">Calças</SelectItem>
                  <SelectItem value="Saias">Saias</SelectItem>
                  <SelectItem value="Casacos">Casacos</SelectItem>
                  <SelectItem value="Vestidos">Vestidos</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col items-start gap-4">
            <Label className="text-right">
              Faixa de Preço
            </Label>
            <div className="grid grid-cols-2 gap-4 w-full">
              <div>
                <Label htmlFor="minPrice" className="text-xs">
                  Mínimo
                </Label>
                <Input
                  id="minPrice"
                  type="number"
                  min={0}
                  value={filters.minPrice}
                  onChange={(e) => onFilterChange("minPrice", Number(e.target.value))}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="maxPrice" className="text-xs">
                  Máximo
                </Label>
                <Input
                  id="maxPrice"
                  type="number"
                  min={0}
                  value={filters.maxPrice}
                  onChange={(e) => onFilterChange("maxPrice", Number(e.target.value))}
                  className="mt-1"
                />
              </div>
            </div>
          </div>
        </div>
        <Button onClick={onApplyFilters} className="w-full">Aplicar Filtros</Button>
      </SheetContent>
    </Sheet>
  )
}

