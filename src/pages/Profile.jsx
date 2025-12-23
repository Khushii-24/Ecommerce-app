import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user } = useAuth();

  return (
    <section className="section">
      <div className="container content-page">
        <h1>My Profile</h1>
        {user ? (
          <>
            <p>Name: {user.name || "—"}</p>
            <p>Email: {user.email}</p>
          </>
        ) : (
          <p>You are not logged in.</p>
        )}
      </div>
    </section>
  );
}
