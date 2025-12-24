import { useState } from "react";
import { useCart } from "../context/CartContext";
import { formatINR } from "../utils/currency";
import { useNavigate } from "react-router-dom";
import { useOrders } from "../context/OrderContext";

export default function Checkout() {
  const { items, total } = useCart(); // call once
  const { addOrder } = useOrders();
  const [payment, setPayment] = useState("upi");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const shipping = Object.fromEntries(formData.entries());
    const order = {
      id: Date.now().toString(),
      items,
      total,
      shipping,
      createdAt: new Date().toISOString(),
      paymentMethod: payment,
    };

    addOrder(order);
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
              <input name="fullName" required />
            </label>
            <label>
              Address
              <input name="address" required />
            </label>
            <label>
              City
              <input name="city" required />
            </label>
            <label>
              PIN Code
              <input name="pinCode" required />
            </label>
            <label>
              Phone
              <input name="phone" required />
            </label>

            <h3>Payment</h3>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="upi"
                checked={payment === "upi"}
                onChange={(e) => setPayment(e.target.value)}
              />
              UPI
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="card"
                checked={payment === "card"}
                onChange={(e) => setPayment(e.target.value)}
              />
              Credit/Debit Card
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
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
