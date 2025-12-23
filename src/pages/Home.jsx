import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";

export default function Home() {
  const [visibleCount, setVisibleCount] = useState(4);
  const [selected, setSelected] = useState(null);

  const featured = products.slice(0, 8);

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <h1>Effortless Modern Fashion</h1>
            <p>Curated essentials for a clean, elevated wardrobe.</p>
            <a href="/shop" className="btn btn-primary">
              Shop Now
            </a>
          </div>
          <div className="hero-image" />
        </div>
      </section>

      {/* Featured products */}
      <section className="section">
        <div className="container">
          <h2>Featured</h2>
          <div className="grid">
            {featured.slice(0, visibleCount).map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onOpenModal={setSelected}
              />
            ))}
          </div>
          {visibleCount < featured.length && (
            <div className="section-actions">
              <button
                className="btn btn-outline"
                onClick={() => setVisibleCount((c) => c + 4)}
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="section section--muted">
        <div className="container newsletter">
          <h2>Stay in the know</h2>
          <p>New drops, styling edits, and early access.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button className="btn btn-primary" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <ProductModal
        open={!!selected}
        onClose={() => setSelected(null)}
        product={selected}
      />
    </>
  );
}
