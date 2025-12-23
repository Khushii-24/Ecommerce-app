export default function Contact() {
  return (
    <section className="section">
      <div className="container contact-grid">
        <div>
          <h1>Contact Us</h1>
          <form className="form">
            <label>
              Name
              <input required />
            </label>
            <label>
              Email
              <input type="email" required />
            </label>
            <label>
              Message
              <textarea rows={4} required />
            </label>
            <button className="btn btn-primary" type="submit">
              Send
            </button>
          </form>
        </div>
        <div>
          <h3>Studio</h3>
          <p>New Delhi, India</p>
          <p>support@luxelabel.in</p>
        </div>
      </div>
    </section>
  );
}
