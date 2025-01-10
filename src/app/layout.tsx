import type { Metadata } from "next";
import "./globals.css";
import { Manrope as FontSans } from "next/font/google";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import SessionWrapper from "@/components/SessionWrapper";
import { Toaster } from "@/components/ui/sonner"
import AuthProvider from "@/providers/auth";
import { CartProvider } from "./_context/cart";
import { FavoritesProvider } from "./_context/favorites";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const mollie = localFont({
  src: "../../public/fonts/Mollie.woff2",
  variable: "--font-mollie",
});

export const metadata: Metadata = {
  title: "Analu® - Moda Feminina",
  description: "Looks incríveis para todas as ocasiões",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <html lang="pt-br" suppressHydrationWarning >
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            `${mollie.variable} ${fontSans.variable}`
          )}
        >
          <AuthProvider>
            <CartProvider>
              <FavoritesProvider>
              {children}
              </FavoritesProvider>
            </CartProvider>
          </AuthProvider>
          <Toaster position="bottom-left" />
        </body>
      </html>
    </SessionWrapper>
  );
}
