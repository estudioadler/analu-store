"use client";

import Image from "next/image";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import * as z from "zod";
import { signIn } from "next-auth/react";

const formSchema = z.object({
  email: z.string().email({
    message: "Por favor, insira um email válido.",
  }),
});

export type LoginFormValues = z.infer<typeof formSchema>;

export default function LoginPage() {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: LoginFormValues) {
    // Here you would typically send the data to your server
    console.log(data);
  }

   const handleGoogleLogin = () => {
      signIn("google", { callbackUrl: "/" });
    };
  return (
    <div className="min-h-screen flex">
      {/* Left Section */}
      <div className="flex-1 relative p-8 hidden md:block">
        <div className="absolute inset-0  m-2 rounded-xl">
          <Image
            src="/image3.png"
            alt="Background"
            fill
            className="object-cover rounded-xl"
            priority
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex flex-col p-8">
        <div className="flex-1 flex items-center justify-center">
          <Card className="w-full max-w-md">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-8">Cadastre-se e comece
                a comprar
              </h2>

              <Button
                type="button"
                variant="outline"
                size={"lg"}
                className="w-full mb-6"
                onClick={handleGoogleLogin}
              >
                <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                  <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                </svg>
                Cadastre-se com o Google
              </Button>

              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Ou use seu email
                  </span>
                </div>
              </div>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm">Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Insira seu email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" size={"lg"} className="w-full">
                    Criar Conta
                  </Button>
                  <div className="text-center text-sm">
                    <span className="text-muted-foreground">
                      Já possui uma conta?{" "}
                    </span>{" "}
                    <Link href="/login" className="font-medium">
                      Faça Login
                    </Link>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
