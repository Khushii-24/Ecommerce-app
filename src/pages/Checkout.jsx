import { useState } from "react";
import { useCart } from "../context/CartContext";
import { formatINR } from "../utils/currency";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { items, total } = useCart();
  const [payment, setPayment] = useState("upi");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // call backend payment in real app
    navigate("/order-confirmation", { replace: true });
  };

  return (
    <section className="section">
      <div className="container checkout-grid">
        <div>
          <h1>Checkout</h1>
          <form className="form" onSubmit={handleSubmit}>
            <h3>Shipping Details</h3>
            <label>
              Full Name
              <input required />
            </label>
            <label>
              Address
              <input required />
            </label>
            <label>
              City
              <input required />
            </label>
            <label>
              PIN Code
              <input required />
            </label>
            <label>
              Phone
              <input required />
            </label>

            <h3>Payment</h3>
            <label>
              <input
                type="radio"
                value="upi"
                checked={payment === "upi"}
                onChange={(e) => setPayment(e.target.value)}
              />
              UPI
            </label>
            <label>
              <input
                type="radio"
                value="card"
                checked={payment === "card"}
                onChange={(e) => setPayment(e.target.value)}
              />
              Credit/Debit Card
            </label>
            <label>
              <input
                type="radio"
                value="netbanking"
                checked={payment === "netbanking"}
                onChange={(e) => setPayment(e.target.value)}
              />
              Net Banking
            </label>

            <button className="btn btn-primary" type="submit">
              Pay &amp; Place Order
            </button>
          </form>
        </div>

        <aside className="order-summary">
          <h3>Order Summary</h3>
          <ul>
            {items.map((i) => (
              <li key={i.id}>
                {i.name} × {i.qty} <span>{formatINR(i.price * i.qty)}</span>
              </li>
            ))}
          </ul>
          <p className="order-total">
            Total <span>{formatINR(total)}</span>
          </p>
        </aside>
      </div>
    </section>
  );
}
