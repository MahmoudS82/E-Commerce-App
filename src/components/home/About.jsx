import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <p className="about-label">ABOUT US</p>
        <h2>
          Simple Shopping. <br /> Better Choices.
        </h2>
        <p className="about-text">
          
          We believe shopping should be simple, enjoyable, and reliable.
          Discover carefully selected products with great quality and prices,
          all in one place.
        </p>
        <Link to="/AllProducts">
          
          <button className="about-btn"> Explore Products </button>
        </Link>
      </div>
      <div className="about-image">
        
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
          alt="Our store"
        />
      </div>
    </section>
  );
}
