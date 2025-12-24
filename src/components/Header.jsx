import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const [shopOpen, setShopOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="logo">
          LUXE LABEL
        </Link>

        <nav className="nav">
          <NavLink to="/" end>
            Home
          </NavLink>

          <div
            className="nav-item nav-item--dropdown"
            onMouseEnter={() => setShopOpen(true)}
            onMouseLeave={() => setShopOpen(false)}
          >
            <NavLink to="/shop">Shop</NavLink>
            {shopOpen && (
              <div className="dropdown">
                <Link to="/shop?filter=men">Men</Link>
                <Link to="/shop?filter=women">Women</Link>
                <Link to="/shop?filter=accessories">Accessories</Link>
              </div>
            )}
          </div>

          <NavLink to="/categories">Categories</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <div className="header-actions">
          <NavLink to="/wishlist" className="icon-btn" aria-label="Wishlist">
            ♥
          </NavLink>
          <NavLink to="/cart" className="icon-btn" aria-label="Cart">
            🛒
          </NavLink>

          {user ? (
            <>
              {/* name is clickable link to profile */}
              <NavLink to="/profile" className="header-user">
                {user.name || user.email}
              </NavLink>
              <button
                className="btn btn-outline"
                type="button"
                onClick={logout}
              >
                Logout
              </button>
            </>
          ) : (
            <NavLink to="/login" className="btn btn-outline">
              Login
            </NavLink>
          )}
        </div>
      </div>
    </header>
  );
}
