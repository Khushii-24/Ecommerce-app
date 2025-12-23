// Shop.jsx
import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Shop() {
  const [params, setParams] = useSearchParams();
  const [visibleCount, setVisibleCount] = useState(9);

  const priceFilter = params.get("price") || "all";
  const colorFilter = params.get("color") || "all";
  const sizeFilter = params.get("size") || "all";
  const sortBy = params.get("sort") || "featured";

  const setParam = (key, value) => {
    const next = new URLSearchParams(params);
    if (value === "all" || !value) next.delete(key);
    else next.set(key, value);
    setParams(next, { replace: true });
  };

  const filteredAndSorted = useMemo(() => {
    let list = [...products];

    // PRICE FILTER
    if (priceFilter !== "all") {
      list = list.filter((p) => {
        if (priceFilter === "0-1999") return p.price <= 1999;
        if (priceFilter === "2000-3999") return p.price >= 2000 && p.price <= 3999;
        if (priceFilter === "4000+") return p.price >= 4000;
        return true;
      });
    }

    // COLOR FILTER
    if (colorFilter !== "all") {
      list = list.filter(
        (p) => p.color && p.color.toLowerCase() === colorFilter
      );
    }

    // SIZE FILTER
    if (sizeFilter !== "all") {
      list = list.filter(
        (p) => Array.isArray(p.sizes) && p.sizes.includes(sizeFilter)
      );
    }

    // SORT
    if (sortBy === "price-asc") {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === "alpha-asc") {
      list.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "alpha-desc") {
      list.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortBy === "best-selling") {
      list.sort((a, b) => (b.soldCount || 0) - (a.soldCount || 0));
    }

    return list;
  }, [priceFilter, colorFilter, sizeFilter, sortBy]);

  return (
    <section className="section">
      <div className="container shop-layout">
        {/* LEFT FILTERS */}
        <aside className="shop-filters">
          <h3>Filter</h3>

          {/* PRICE */}
          <div className="filter-group">
            <p className="filter-label">Price</p>
            <label>
              <input
                type="radio"
                name="price"
                value="all"
                checked={priceFilter === "all"}
                onChange={() => setParam("price", "all")}
              />
              All
            </label>
            <label>
              <input
                type="radio"
                name="price"
                value="0-1999"
                checked={priceFilter === "0-1999"}
                onChange={() => setParam("price", "0-1999")}
              />
              Up to ₹1,999
            </label>
            <label>
              <input
                type="radio"
                name="price"
                value="2000-3999"
                checked={priceFilter === "2000-3999"}
                onChange={() => setParam("price", "2000-3999")}
              />
              ₹2,000 – ₹3,999
            </label>
            <label>
              <input
                type="radio"
                name="price"
                value="4000+"
                checked={priceFilter === "4000+"}
                onChange={() => setParam("price", "4000+")}
              />
              ₹4,000 and above
            </label>
          </div>

          {/* COLOR */}
          <div className="filter-group">
            <p className="filter-label">Color</p>
            <label>
              <input
                type="radio"
                name="color"
                value="all"
                checked={colorFilter === "all"}
                onChange={() => setParam("color", "all")}
              />
              All
            </label>
            <label>
              <input
                type="radio"
                name="color"
                value="black"
                checked={colorFilter === "black"}
                onChange={() => setParam("color", "black")}
              />
              Black
            </label>
            <label>
              <input
                type="radio"
                name="color"
                value="white"
                checked={colorFilter === "white"}
                onChange={() => setParam("color", "white")}
              />
              White
            </label>
            <label>
              <input
                type="radio"
                name="color"
                value="beige"
                checked={colorFilter === "beige"}
                onChange={() => setParam("color", "beige")}
              />
              Beige
            </label>
            <label>
              <input
                type="radio"
                name="color"
                value="maroon"
                checked={colorFilter === "maroon"}
                onChange={() => setParam("color", "maroon")}
              />
              Maroon
            </label>
            {/* add more colors as needed */}
          </div>

          {/* SIZE */}
          <div className="filter-group">
            <p className="filter-label">Size</p>
            <label>
              <input
                type="radio"
                name="size"
                value="all"
                checked={sizeFilter === "all"}
                onChange={() => setParam("size", "all")}
              />
              All
            </label>
            {["XS", "S", "M", "L", "XL"].map((s) => (
              <label key={s}>
                <input
                  type="radio"
                  name="size"
                  value={s}
                  checked={sizeFilter === s}
                  onChange={() => setParam("size", s)}
                />
                {s}
              </label>
            ))}
          </div>
        </aside>

        {/* RIGHT SIDE: same as previous answer */}
        <div className="shop-main">
          <div className="shop-toolbar">
            <h1>Shop</h1>
            <div className="shop-sort">
              <span>Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setParam("sort", e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="alpha-asc">Name: A–Z</option>
                <option value="alpha-desc">Name: Z–A</option>
                <option value="best-selling">Best Selling</option>
              </select>
            </div>
          </div>

          <div className="grid">
            {filteredAndSorted.slice(0, visibleCount).map((p) => (
              <ProductCard key={p.id} product={p} mode="link" />
            ))}
          </div>

          {visibleCount < filteredAndSorted.length && (
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
      </div>
    </section>
  );
}
