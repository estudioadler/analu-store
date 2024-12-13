"use client";

import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import { LoginForm } from "./LoginForm";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SignUpForm } from "./SignUpForm";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function LoginSheet() {
  const { data: session } = useSession();

  const [showSignup, setShowSignup] = useState(false);

  const handleSignInWithGoogle = () => {
    signIn("google", { callbackUrl: "/" });
  };

  const handleSignOut = () => {
    signOut();
  };

  const toggleSignup = () => {
    setShowSignup(!showSignup);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        {session ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">{session.user?.name}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
              <DropdownMenuLabel>{session.user?.email}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  Profile
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Billing
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Settings
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Keyboard shortcuts
                  <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuItem onClick={handleSignOut}>
                Log out
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button variant="ghost" onClick={toggleSignup}>
            Login
          </Button>
        )}
      </SheetTrigger>
      <SheetContent>
        {session ? null : (
          <>
            {showSignup ? (
              <SignUpForm signUpWithGoogle={handleSignInWithGoogle} />
            ) : (
              <LoginForm
                onclick={toggleSignup}
                loginWithGoogle={handleSignInWithGoogle}
              />
            )}
            <p className="mt-4 text-center text-sm text-muted-foreground">
              {showSignup ? "Já tem uma conta?" : "Ainda não tem uma conta?"}
              <Button variant="link" onClick={toggleSignup}>
                {showSignup ? "Faça Login" : "Cadastre-se"}
              </Button>
            </p>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
