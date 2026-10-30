import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero-section">
      
      <div className="hero-content">
        
        <p className="hero-label">NEW COLLECTION</p>
        <h1>
          
          Discover Products <br /> You’ll Love
        </h1>
        <p className="hero-description">
          
          Explore our latest collection of quality products, carefully selected
          for you at great prices.
        </p>
        <Link to="/AllProducts">
          
          <button className="hero-btn"> Shop Now </button>
        </Link>
      </div>
      <div className="hero-image">
        
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
          alt="Shopping collection"
        />
      </div>
    </section>
  );
}
