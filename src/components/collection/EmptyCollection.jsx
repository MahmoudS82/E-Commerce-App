import { Link } from "react-router-dom";
import { ShoppingCart, Heart, ArrowRight } from "lucide-react";

export default function EmptyCollection({ isWishlist = false }) {
  const Icon = isWishlist ? Heart : ShoppingCart;
  return (
    <div className="collection-empty">
      <span className="collection-empty-icon"><Icon size={32} strokeWidth={1.5} /></span>
      <h2>{isWishlist ? "Save something you love" : "Your cart is waiting"}</h2>
      <p>{isWishlist ? "Tap the heart on any product to keep your favorites here." : "Explore the collection and add your favorite finds to your cart."}</p>
      <Link className="collection-primary-link" to="/AllProducts">Explore products <ArrowRight size={17} /></Link>
    </div>
  );
}
