import { useCart } from "../context/CartContext";
import { formatINR } from "../utils/currency";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { items, updateQty, removeFromCart, total } = useCart();

  return (
    <section className="section">
      <div className="container">
        <h1>Cart</h1>
        {items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div className="cart-list">
              {items.map((item) => (
                <div className="cart-row" key={item.id}>
                  <div className="cart-info">
                    <img src={item.image} alt={item.name} />
                    <div>
                      <h4>{item.name}</h4>
                      <p>{formatINR(item.price)}</p>
                    </div>
                  </div>
                  <div className="cart-actions">
                    <input
                      type="number"
                      min="1"
                      value={item.qty}
                      onChange={(e) =>
                        updateQty(item.id, Number(e.target.value || 1))
                      }
                    />
                    <button
                      className="btn btn-text"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <p>Subtotal: <strong>{formatINR(total)}</strong></p>
              <Link to="/checkout" className="btn btn-primary">
                Proceed to Checkout
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
