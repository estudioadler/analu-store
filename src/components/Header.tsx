"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import { SearchBar } from "./SearchBar";
import { Search01Icon } from "hugeicons-react";
import { forwardRef, useState } from "react";
import { CartSheet } from "./CartSheet";


export function Header() {
  const [openSearch, setOpenSearch] = useState(false);

  const handleOpenSearch = () => {
    setOpenSearch(!openSearch);
  };
  return (
    <header className="w-full flex items-center justify-between px-6 md:px-8 h-20 md:h-24 bg-background fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center gap-4">
        <Link href={"/"} className="font-mollie text-4xl mb-1">
          analu
        </Link>
        <Link href={"/shop"} className="hidden md:block">
          <Button variant={"ghost"} className="hover:bg-transparent text-muted-foreground hover:text-foreground transition-colors">Shop</Button>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <div className="items-center flex">
          <Link href={"/login"}>
          <Button variant={"ghost"} size={"lg"} className="hover:bg-transparent text-muted-foreground hover:text-foreground transition-colors ">
            Login
          </Button>
          </Link>
          <Link href={"/signup"}>
          <Button variant={"default"} size={"lg"}>
            Cadastre-se
          </Button>
          </Link>
        </div>
        <div className="w-px h-8 bg-border mx-4"/>
        <div className="flex items-center gap-6">
          <button onClick={handleOpenSearch}>
            <Search01Icon strokeWidth={1.5} className="size-5" />
          </button>
            
          <CartSheet items={[]} />
          {openSearch && <SearchBar on={handleOpenSearch} />}
        </div>
      </div>
    </header>
  );
}

const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
