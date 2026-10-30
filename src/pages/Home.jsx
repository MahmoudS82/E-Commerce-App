import { Link } from "react-router-dom";
import Hero from "../components/home/Hero";
import Categories from "../components/home/Categories";
import About from "../components/home/About";
import Contact from "../components/home/Contact";
import ProductCard from "../components/products/ProductCard";

export default function Home({
  featuredProducts,
  handleCartClick,
  handleWishlistClick,
  products,
  cart,
  wishlist
}) {
  return (
    <div className="featured-products">
      <Hero />
      <Categories products={products} />
      <div className="section-header">
        <h3>Featured Products</h3>
        <Link to="/AllProducts">
          <button className="view-all-btn">View All</button>
        </Link>
      </div>

      <div className="products-grid">
        {featuredProducts.map((featuredProduct) => (
          <ProductCard
            key={featuredProduct.id}
            product={featuredProduct}
            handleCartClick={handleCartClick}
            handleWishlistClick={handleWishlistClick}
            cart={cart}
            wishlist={wishlist}
          />
        ))}
      </div>
      <About />
      <Contact />
    </div>
  );
}
