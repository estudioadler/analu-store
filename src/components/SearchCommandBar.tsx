"use client";

import * as React from "react";
import {
  CommandDialog,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Search01Icon } from "hugeicons-react";
import { useRouter } from "next/navigation";

export function SearchCommandBar() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");

  const handleSearchChange = (search: string) => {
    setSearch(search);
  };

  const handleSearchSubmit = () => {
    router.push(`/search?search=${encodeURIComponent(search)}`);
    setOpen(false);
  };

  const handleItemSelect = (value: string) => {
    router.push(`/search?search=${encodeURIComponent(value)}`);
    setOpen(false);
  };

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <button onClick={() => setOpen((open) => !open)}>
        <Search01Icon
          strokeWidth={1.5}
          className="size-5 text-muted-foreground hover:text-primary transition-colors"
        />
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          value={search}
          onValueChange={handleSearchChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearchSubmit();
            }
          }}
          placeholder="Pesquise por produtos..."
        />
        <CommandList>
          <CommandGroup heading="Sugestões">
            <CommandItem onSelect={() => handleItemSelect("bermuda")}>
              <span>Bermudas</span>
            </CommandItem>
            <CommandItem onSelect={() => handleItemSelect("blusa")}>
              <span>Blusas</span>
            </CommandItem>
            <CommandItem onSelect={() => handleItemSelect("calca")}>
              <span>Calças</span>
            </CommandItem>
            <CommandItem onSelect={() => handleItemSelect("saia")}>
              <span>Saias</span>
            </CommandItem>
            <CommandItem onSelect={() => handleItemSelect("casaco")}>
              <span>Casacos</span>
            </CommandItem>
            <CommandItem onSelect={() => handleItemSelect("vestido")}>
              <span>Vestidos</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
