// Categories.jsx
import { Link } from "react-router-dom";

export default function Categories() {
  const cards = [
    {
      id: "men",
      title: "Men",
      image: "/images/category-men.png",
      path: "/categories/men",
    },
    {
      id: "women",
      title: "Women",
      image: "/images/category-women.png",
      path: "/categories/women",
    },
    {
      id: "accessories",
      title: "Accessories",
      image: "/images/category-accessories.png",
      path: "/categories/accessories",
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <h1>Categories</h1>
        <div className="grid grid--categories">
          {cards.map((c) => (
            <Link key={c.id} to={c.path} className="category-card">
              <div className="category-card-image">
                <img src={c.image} alt={c.title} />
              </div>
              <h3>{c.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
