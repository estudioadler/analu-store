"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import { SearchBar } from "./SearchBar";
import { Search01Icon, Menu01Icon, Cancel01Icon } from "hugeicons-react";
import { forwardRef, useState } from "react";
import { CartSheet } from "./CartSheet";
import { useSession } from "next-auth/react";
import { UserMenuDropdown } from "./UserMenuDropdown";
import { signOut } from "next-auth/react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
  const [openSearch, setOpenSearch] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = useSession();

  const handleLogOut = async () => {
    await signOut({
      callbackUrl: "/",
    });
  };

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
          <Button
            variant={"ghost"}
            className="hover:bg-transparent text-muted-foreground hover:text-foreground transition-colors"
          >
            Shop
          </Button>
        </Link>
      </div>
      <div className="hidden md:flex items-center gap-4">
        {session ? (
          <div className="-mr-4">
            <UserMenuDropdown
              userName={session.user?.email ?? ""}
              logOut={handleLogOut}
            />
          </div>
        ) : (
          <div className="items-center flex">
            <Link href={"/login"}>
              <Button
                variant={"ghost"}
                size={"lg"}
                className="hover:bg-transparent text-muted-foreground hover:text-foreground transition-colors"
              >
                Login
              </Button>
            </Link>
            <Link href={"/signup"}>
              <Button variant={"default"} size={"lg"}>
                Cadastre-se
              </Button>
            </Link>
          </div>
        )}

        <div className="w-px h-8 bg-border mx-4 hidden md:block" />
        <div className="flex items-center gap-6">
          <button onClick={handleOpenSearch}>
            <Search01Icon strokeWidth={1.5} className="size-5" />
          </button>

          <CartSheet items={[]} />
          {openSearch && <SearchBar on={handleOpenSearch} />}
        </div>
      </div>

      {/* Mobile menu */}
      <div className="flex md:hidden items-center gap-4">
        <button onClick={handleOpenSearch}>
          <Search01Icon strokeWidth={1.5} className="size-5" />
        </button>
        <CartSheet items={[]} />
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <Cancel01Icon strokeWidth={1.5} className="size-6" />
              ) : (
                <Menu01Icon strokeWidth={1.5} className="size-6" />
              )}
            </button>
          </SheetTrigger>
          <SheetContent side="top" className="h-fit">
            <div className="flex flex-col gap-2 mt-8">
              {session ? (
                <>
                  <UserMenuDropdown
                    userName={session.user?.email ?? ""}
                    logOut={handleLogOut}
                  />
                </>
              ) : (
                <>
                  <Link href={"/login"}>
                    <Button variant="outline" className="w-full">
                      Fazer Login
                    </Button>
                  </Link>
                  <Link href={"/signup"}>
                    <Button variant="default" className="w-full">
                      Cadastre-se
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </SheetContent>
        </Sheet>
        {openSearch && <SearchBar on={handleOpenSearch} />}
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

