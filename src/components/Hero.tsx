import React from "react";
import { Button } from "./ui/button";
import { ArrowDown01Icon } from "hugeicons-react";

export const Hero = () => {
  return (
    <div className="container mx-auto px-6 py-24 flex flex-col gap-6 items-center justify-center">
      <h1 className="text-7xl font-mollie max-w-2xl text-center">
        Looks incríveis para todas as ocasiões
      </h1>
      <Button variant="outline" size="lg" className="rounded-full">
        <ArrowDown01Icon className="h-4 w-4" />
      </Button>
    </div>
  );
};
