// src/pages/CategoryTemplate.jsx
import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";

export default function CategoryTemplate({ category, title, heroImage }) {
  const [visibleCount, setVisibleCount] = useState(6);
  const [selected, setSelected] = useState(null);

  const items = products.filter((p) => p.category === category);

  return (
    <>
      {/* optional hero/banner to match layout */}
      <section className="category-hero">
        <div className="container category-hero-inner">
          <div className="category-hero-copy">
            <h1>{title}</h1>
            <p>Curated {title.toLowerCase()} essentials for a clean, modern wardrobe.</p>
          </div>
          {/* <div className="category-hero-image">
            <img src={heroImage} alt={title} />
          </div> */}
        </div>
      </section>

      <section className="section">
        <div className="container">
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
    </>
  );
}
