const faqs = [
  {
    q: "What is your shipping time within India?",
    a: "Orders are typically dispatched within 2–3 business days and delivered within 5–7 business days.",
  },
  {
    q: "Can I change or cancel my order?",
    a: "Orders can be modified or cancelled within 2 hours of placing them, as long as they have not been packed.",
  },
  {
    q: "Do you offer Cash on Delivery (COD)?",
    a: "At the moment, we accept prepaid orders via UPI, cards, and net banking only.",
  },
  {
    q: "How do I track my order?",
    a: "Once shipped, you receive a tracking link on your registered email and phone number.",
  },
];

export default function Faqs() {
  return (
    <section className="section">
      <div className="container content-page">
        <h1>FAQs</h1>
        <div className="faq-list">
          {faqs.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
