import { useWishlist } from "../context/WishlistContext";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";
import { useState } from "react";

export default function WishlistPage() {
  const { items } = useWishlist();
  const [selected, setSelected] = useState(null);

  return (
    <section className="section">
      <div className="container">
        <h1>Wishlist</h1>
        {items.length === 0 ? (
          <p>Your wishlist is empty.</p>
        ) : (
          <div className="grid">
            {items.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onOpenModal={setSelected}
              />
            ))}
          </div>
        )}
      </div>
      <ProductModal
        open={!!selected}
        onClose={() => setSelected(null)}
        product={selected}
      />
    </section>
  );
}
