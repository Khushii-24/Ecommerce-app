import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";

export default function Shop() {
  const [params] = useSearchParams();
  const [visibleCount, setVisibleCount] = useState(9);
  const [selected, setSelected] = useState(null);

  const filter = params.get("filter"); // men / women / accessories

  const filteredProducts = useMemo(() => {
    if (!filter) return products;
    return products.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h1>Shop</h1>
          <div className="filters">
            <span>All</span>
            <span> / Men</span>
            <span> / Women</span>
            <span> / Accessories</span>
          </div>
        </div>

        <div className="grid">
          {filteredProducts.slice(0, visibleCount).map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onOpenModal={setSelected}
            />
          ))}
        </div>

        {visibleCount < filteredProducts.length && (
          <div className="section-actions">
            <button
              className="btn btn-outline"
              onClick={() => setVisibleCount((c) => c + 9)}
            >
              Load More
            </button>
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
