"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import { SearchCommandBar } from "./SearchCommandBar";
import {
  Menu01Icon,
  Cancel01Icon,
  ShoppingBag01Icon,
} from "hugeicons-react";
import { forwardRef, useContext, useState } from "react";
import { Cart } from "./Cart";
import { useSession } from "next-auth/react";
import { UserMenuDropdown } from "./UserMenuDropdown";
import { signOut } from "next-auth/react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "./ui/separator";
import { cartContext } from "@/app/_context/cart";

export function Header() {
  const { products } = useContext(cartContext);
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
          <SearchCommandBar />
          <Sheet>
            <SheetTrigger asChild>
              <button className="relative">
                <ShoppingBag01Icon strokeWidth={1.5} className="size-5" />
                {products.length > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 size-4 rounded-full bg-primary text-primary-foreground text-[0.625rem] flex items-center justify-center">
                    {products.length}
                  </span>
                )}
              </button>
            </SheetTrigger>
            <SheetContent>
              <Cart items={products} />
              <SheetTitle />
              <SheetDescription />
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="flex md:hidden items-center gap-4">
        <SearchCommandBar />
        <Sheet>
          <SheetTrigger asChild>
            <button className="relative">
              <ShoppingBag01Icon strokeWidth={1.5} className="size-5" />
              {products.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 size-4 rounded-full bg-primary text-primary-foreground text-[0.625rem] flex items-center justify-center">
                  {products.length}
                </span>
              )}
            </button>
          </SheetTrigger>
          <SheetContent>
            <Cart items={products} />
          </SheetContent>
        </Sheet>
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
            <SheetHeader>
              <SheetTitle />
              <SheetDescription />
            </SheetHeader>
            <div className="flex flex-col gap-4 mt-4">
              {session ? (
                <>
                  <div className="flex flex-col space-y-1 px-2">
                    <span className="font-medium">{session.user?.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {session.user?.email}
                    </span>
                  </div>
                  <Separator />
                  <nav className="flex flex-col">
                    <Link href="/profile">
                      <Button variant="ghost" className="w-full justify-start">
                        Meu perfil
                      </Button>
                    </Link>
                    <Link href="/favorites">
                      <Button variant="ghost" className="w-full justify-start">
                        Meus Favoritos
                      </Button>
                    </Link>
                    <Link href="/shop">
                      <Button variant="ghost" className="w-full justify-start">
                        Shop
                      </Button>
                    </Link>
                  </nav>
                  <Separator />
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50"
                    onClick={handleLogOut}
                  >
                    Sair
                  </Button>
                </>
              ) : (
                <>
                  <Link href="/shop">
                    <Button
                      variant="secondary"
                      className="w-full justify-center"
                    >
                      Ir para a loja
                    </Button>
                  </Link>
                  <Link href="/login">
                    <Button variant="outline" className="w-full">
                      Fazer Login
                    </Button>
                  </Link>
                  <Link href="/signup">
                    <Button variant="default" className="w-full">
                      Cadastre-se
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </SheetContent>
        </Sheet>
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
