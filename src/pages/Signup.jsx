import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const { signup } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [accept, setAccept] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!accept) return;
    signup({ name, email });
    navigate("/", { replace: true });
  };

  return (
    <section className="section section--auth">
      <div className="container auth-card">
        <h1>Create Account</h1>
        <form className="form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              required
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
            />
          </label>
          <label className="checkbox-row">
            <input
              type="checkbox"
              checked={accept}
              onChange={(e) => setAccept(e.target.checked)}
              required
            />
            <span>
              I agree to the{" "}
              <Link to="/terms-conditions">Terms &amp; Conditions</Link> and{" "}
              <Link to="/privacy-policy">Privacy Policy</Link>.
            </span>
          </label>
          <button className="btn btn-primary" type="submit">
            Sign up
          </button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </section>
  );
}
