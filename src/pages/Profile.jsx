import { useAuth } from "../context/AuthContext";
import { useOrders } from "../context/OrderContext";
import { Link } from "react-router-dom";
import { formatINR } from "../utils/currency";

export default function Profile() {
  const { user } = useAuth();
  const { orders } = useOrders();

  if (!user) {
    return (
      <section className="section">
        <div className="container content-page">
          <h1>My Profile</h1>
          <p>You are not logged in.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container profile-page">
        {/* Left: summary card */}
        <aside className="profile-summary">
          <div className="profile-avatar">
            {user.name ? user.name[0].toUpperCase() : "U"}
          </div>
          <h2>{user.name || "Account"}</h2>
          <p className="profile-email">{user.email}</p>

          <div className="profile-links">
            <Link to="/wishlist">Wishlist</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </aside>

        {/* Right: orders + details */}
        <div className="profile-main">
          <section className="profile-section">
            <h3>Orders</h3>
            {orders.length === 0 ? (
              <p>You have not placed any orders yet.</p>
            ) : (
              <ul className="orders-list">
                {orders.map((order) => (
                  <li key={order.id} className="order-card">
                    <div className="order-header">
                      <span className="order-id">
                        Order #{order.id.slice(-6)}
                      </span>
                      <span className="order-total">
                        {formatINR(order.total)}
                      </span>
                    </div>
                    <p className="order-date">
                      {new Date(order.createdAt).toLocaleString()}
                    </p>
                    <ul className="order-items">
                      {order.items.map((item) => (
                        <li key={item.id}>
                          {item.name} × {item.qty}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            )}
          </section>

          <section className="profile-section">
            <h3>Saved Details</h3>
            <p>
              Name: <strong>{user.name || "Not set"}</strong>
            </p>
            <p>
              Email: <strong>{user.email}</strong>
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
