import GoogleProvider from "next-auth/providers/google"
import { NextAuthOptions } from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter"

import { prisma } from "@/lib/prisma"

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log("Sign in callback", { user, account, profile, email, credentials });
      return true;
    },
    async redirect({ url, baseUrl }) {
      console.log("Redirect callback", { url, baseUrl });
      return baseUrl;
    },
    async session({ session, user, token }) {
      console.log("Session callback", { session, user, token });
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      console.log("JWT callback", { token, user, account, profile, isNewUser });
      return token;
    }
  },
  debug: true,
}

export { authOptions as GET, authOptions as POST }
