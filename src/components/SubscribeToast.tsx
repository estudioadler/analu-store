"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Cancel01Icon } from "hugeicons-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export const SubscribeToast = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  interface SubscribeToastProps {}

  interface ValidateEmail {
    (email: string): string;
  }

  interface HandleSubmit {
    (e: React.FormEvent<HTMLFormElement>): Promise<void>;
  }

  interface HandleClose {
    (): void;
  }

  const validateEmail: ValidateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      return "Email é obrigatório";
    }
    if (!emailRegex.test(email)) {
      return "Email inválido";
    }
    return "";
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate email
    const validationError = validateEmail(email);
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Success - close the dialog
      setIsVisible(false);
    } catch (err) {
      setError("Erro ao processar sua inscrição. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
    <Dialog>
      <div className="fixed bottom-6 left-6 right-6 md:bottom-8 md:right-8 md:left-auto bg-secondary p-8 rounded-2xl md:rounded-2xl">
        <DialogHeader className="space-y-4 max-w-sm">
          <DialogTitle className="md:text-2xl text-xl font-medium max-w-[600px] tracking-tighter">
            Assine e ganhe 20% de <br /> desconto em seu pedido.
          </DialogTitle>
          <DialogDescription className="text-gray-500">
            Assine e ganhe um desconto ao fazer sua primeira compra.
          </DialogDescription>
          <form onSubmit={handleSubmit} className="space-y-2">
            <div className="flex space-x-2">
              <Input
                className={`max-w-lg flex-1 ${error ? 'border-red-500' : ''}`}
                placeholder="Insira seu e-mail"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError("");
                }}
                disabled={isSubmitting}
              />
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Inscreva-se"}
              </Button>
            </div>
            {error && (
              <Alert variant="destructive" className="mt-2">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
          </form>
        </DialogHeader>
        <DialogClose asChild>
          <Button
            type="button"
            size="icon"
            variant="ghost"
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
            onClick={handleClose}
          >
            <Cancel01Icon className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </DialogClose>
      </div>
    </Dialog>
    )
  );
};

export default SubscribeToast;