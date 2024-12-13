import { Button } from "./ui/button";
import { Cancel01Icon, Search01Icon } from "hugeicons-react";

interface SearchBarProps {
  on: () => void;
}

export const SearchBar = ({ on }: SearchBarProps & { on: () => void }) => {
  return (
    <>
      <div className="z-10 absolute top-0 left-0 right-0 bg-white flex items-center justify-between gap-5 h-24 px-16">
        <Search01Icon className="size-5" strokeWidth={1.5} />
        <input
          type="search"
          placeholder="Procurar produtos..."
          autoFocus
          className="w-full p-1 focus:outline-none focus:ring-0 border-slate-200 pointer-events-auto"
        />
        <Button variant="ghost" size="icon" className="rounded-full" onClick={on}>
          <Cancel01Icon className="size-5" strokeWidth={1.5} />
        </Button>
      </div>
    </>
  );
};
