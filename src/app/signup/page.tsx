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
