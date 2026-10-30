import { Link } from "react-router-dom";

export default function Categories({ products }) {
  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <div className="categories-container">
      <ul style={{ display: "flex", justifyContent: "center" }}>
        {categories.map((category) => (
          <Link
            key={category}
            to={`/category/${category}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li>{category}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
