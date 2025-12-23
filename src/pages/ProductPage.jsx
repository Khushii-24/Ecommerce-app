import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import { formatINR } from "../utils/currency";
import { useState } from "react";

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();
  const [size, setSize] = useState("S");

  if (!product) {
    return (
      <section className="section">
        <div className="container">
          <p>Product not found.</p>
        </div>
      </section>
    );
  }

  const inWishlist = isInWishlist(product.id);
  const d = product.details || {};

  const handleAddToCart = () => {
    addToCart({ ...product, selectedSize: size });
  };

  return (
    <section className="section">
      <div className="container product-page">
        <div className="product-page-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-page-content">
          <h1>{product.name}</h1>
          <p className="product-page-price">{formatINR(product.price)}</p>

          {/* size selector */}
          <div className="product-page-sizes">
            <p className="label">Select size</p>
            <div className="size-options">
              {["XS", "S", "M", "L", "XL"].map((s) => (
                <button
                  key={s}
                  type="button"
                  className={`size-pill ${size === s ? "size-pill--active" : ""}`}
                  onClick={() => setSize(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="product-page-actions">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            <button
              type="button"
              className={`btn btn-outline ${inWishlist ? "btn-wish-active" : ""}`}
              onClick={() => toggleWishlist(product)}
            >
              {inWishlist ? "Wishlisted" : "Add to Wishlist"}
            </button>
          </div>

          {/* details using the same structure as modal */}
          <div className="product-page-details">
            <h3>Product Details</h3>
            {(d.productDetails || []).map((line, i) => (
              <p key={`pd-${i}`}>{line}</p>
            ))}

            <h3>Size &amp; Fit</h3>
            {(d.sizeFit || []).map((line, i) => (
              <p key={`sf-${i}`}>{line}</p>
            ))}

            <h3>Material &amp; Care</h3>
            {(d.materialCare || []).map((line, i) => (
              <p key={`mc-${i}`}>{line}</p>
            ))}

            <h3>Specifications</h3>
            {(d.specifications || []).map((line, i) => (
              <p key={`sp-${i}`}>{line}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
