import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-links">
          <Link to="/about">About Us</Link>
          <Link to="/faqs">FAQs</Link>
          <Link to="/returns-refunds">Returns &amp; Refunds</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-conditions">Terms &amp; Conditions</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} Luxe Label</p>
      </div>
    </footer>
  );
}
