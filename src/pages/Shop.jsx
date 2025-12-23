import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Shop() {
  const [params, setParams] = useSearchParams();
  const [visibleCount, setVisibleCount] = useState(9);

  const categoryFilter = params.get("category") || "all";
  const sortBy = params.get("sort") || "featured";

  const handleCategoryChange = (value) => {
    const next = new URLSearchParams(params);
    if (value === "all") next.delete("category");
    else next.set("category", value);
    setParams(next, { replace: true });
  };

  const handleSortChange = (value) => {
    const next = new URLSearchParams(params);
    next.set("sort", value);
    setParams(next, { replace: true });
  };

  const filteredAndSorted = useMemo(() => {
    let list = [...products];

    // filter by category
    if (categoryFilter !== "all") {
      list = list.filter((p) => p.category === categoryFilter);
    }

    // sort
    if (sortBy === "price-asc") {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === "alpha-asc") {
      list.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "alpha-desc") {
      list.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortBy === "best-selling") {
      // needs a field like popularity or soldCount on each product
      list.sort((a, b) => (b.soldCount || 0) - (a.soldCount || 0));
    }

    return list;
  }, [categoryFilter, sortBy]);

  return (
    <section className="section">
      <div className="container shop-layout">
        {/* LEFT FILTER SIDEBAR */}
        <aside className="shop-filters">
          <h3>Filter</h3>
          <div className="filter-group">
            <p className="filter-label">Category</p>
            <label>
              <input
                type="radio"
                name="category"
                value="all"
                checked={categoryFilter === "all"}
                onChange={() => handleCategoryChange("all")}
              />
              All
            </label>
            <label>
              <input
                type="radio"
                name="category"
                value="men"
                checked={categoryFilter === "men"}
                onChange={() => handleCategoryChange("men")}
              />
              Men
            </label>
            <label>
              <input
                type="radio"
                name="category"
                value="women"
                checked={categoryFilter === "women"}
                onChange={() => handleCategoryChange("women")}
              />
              Women
            </label>
            <label>
              <input
                type="radio"
                name="category"
                value="accessories"
                checked={categoryFilter === "accessories"}
                onChange={() => handleCategoryChange("accessories")}
              />
              Accessories
            </label>
          </div>
        </aside>

        {/* RIGHT LIST + SORT */}
        <div className="shop-main">
          <div className="shop-toolbar">
            <h1>Shop</h1>
            <div className="shop-sort">
              <span>Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value)}
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
              <ProductCard
                key={p.id}
                product={p}
                // product click will redirect to product page now (see below)
                mode="link"
              />
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
