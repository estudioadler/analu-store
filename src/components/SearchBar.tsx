import { Button } from "./ui/button";
import { Cancel01Icon, Search01Icon } from "hugeicons-react";

interface SearchBarProps {
  on: () => void;
}

export const SearchBar = ({ on }: SearchBarProps & { on: () => void }) => {
  return (
    <>
      <div className="z-10 absolute top-0 left-0 right-0 bg-white flex items-center justify-between gap-5 py-6 px-16 container mx-auto">
        <Search01Icon className="size-5" strokeWidth={1.5} onClick={on} />
        <input
          type="search"
          placeholder="Procurar produtos..."
          className="w-full p-1 focus:outline-none focus:ring-0 border-slate-200 pointer-events-auto"
        />
        <Button variant="ghost" size="icon" className="rounded-full">
          <Cancel01Icon className="size-5" strokeWidth={1.5} onClick={on} />
        </Button>
      </div>
    </>
  );
};
