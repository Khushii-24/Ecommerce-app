import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import { formatINR } from "../utils/currency";

export default function ProductCard({ product, onOpenModal }) {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();

  const inWishlist = isInWishlist(product.id);

  return (
    <div className="product-card">
      <button
        className={`wishlist-icon ${inWishlist ? "wishlist-icon--active" : ""}`}
        onClick={() => toggleWishlist(product)}
        aria-label="Toggle wishlist"
      >
        ♥
      </button>

      <div
        className="product-image-wrapper"
        onClick={() => onOpenModal(product)}
      >
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-info">
        <h4>{product.name}</h4>
        <p className="price">{formatINR(product.price)}</p>
        <button
          className="btn btn-sm"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
