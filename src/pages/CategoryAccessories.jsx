import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";

function CategoryTemplate({ category, title }) {
  const [visibleCount, setVisibleCount] = useState(6);
  const [selected, setSelected] = useState(null);

  const items = products.filter((p) => p.category === category);

  return (
    <section className="section">
      <div className="container">
        <h1>{title}</h1>
        <div className="grid">
          {items.slice(0, visibleCount).map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onOpenModal={setSelected}
            />
          ))}
        </div>
        {visibleCount < items.length && (
          <div className="section-actions">
            <button
              className="btn btn-outline"
              onClick={() => setVisibleCount((c) => c + 6)}
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

// export function CategoryMen() {
//   return <CategoryTemplate category="men" title="Men" />;
// }

// export function CategoryWomen() {
//   return <CategoryTemplate category="women" title="Women" />;


const CategoryAccessories=()=> {
  return <CategoryTemplate category="accessories" title="Accessories" />;
}
export default CategoryAccessories;
