import { favoritesContext } from "@/app/_context/favorites";
import { FavouriteIcon } from "hugeicons-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export default function FavouriteButton() {
  const { data: session } = useSession();
  const router = useRouter();
  const { favorites } = useContext(favoritesContext);
  const handleFavoritosClick = () => {
    if (!session) {
      router.push("/login");
      return;
    }

    router.push("/favorites");
  };

  return (
      <button className="relative" onClick={handleFavoritosClick}>
        <FavouriteIcon
          strokeWidth={1.5}
          className="size-5 text-muted-foreground hover:text-primary transition-colors"
        />
        {favorites.length > 0 && (
          <span className="absolute -top-2 -right-2 size-4 rounded-full bg-primary text-primary-foreground text-[0.625rem] flex items-center justify-center">
            {favorites.length}
          </span>
        )}
      </button>
  );
}
