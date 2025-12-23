// pages/Login.jsx
import { useAuth } from "../context/AuthContext";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: call backend here; for now just fake a user
    login({ email }); // this must be called
    navigate(from, { replace: true });
  };

  return (
    <section className="section section--auth">
      <div className="container auth-card">
        <h1>Login</h1>
        <form className="form" onSubmit={handleSubmit}>
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
          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </form>
        <p>
          New here? <Link to="/signup">Create account</Link>
        </p>
      </div>
    </section>
  );
}
