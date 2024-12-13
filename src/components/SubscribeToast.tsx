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

export const SubscribeToast = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
    <Dialog>
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 ml-6 bg-secondary p-8 rounded-2xl">
        <DialogHeader className="space-y-4 max-w-sm">
          <DialogTitle className="md:text-2xl text-xl font-medium max-w-[600px] tracking-tighter">
            Assine e ganhe 20% de <br /> desconto em seu pedido.
          </DialogTitle>
          <DialogDescription className="text-gray-500">
            Assine e ganhe um desconto ao fazer sua primeira compra.
          </DialogDescription>
          <div className="flex space-x-2">
            <Input
              className="max-w-lg flex-1"
              placeholder="Insira seu e-mail"
              type="email"
            />
            <Button type="submit">Inscreva-se</Button>
          </div>
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
