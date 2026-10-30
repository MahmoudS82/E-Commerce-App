import { Link } from "react-router-dom";
import { ShoppingCart, Heart } from "lucide-react";

export default function ProductCard({
  product,
  handleCartClick,
  handleWishlistClick,
  cart = [],
  wishlist = [],
}) {
  const isAddedToCart = cart.some((item) => item.id === product.id)
  const isAddedToWishlist = wishlist.some((item) => item.id === product.id)

  return (
    <div className="product-card">
      <Link style={{ textDecoration: "none" }} to={`/product/${product.id}`}>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="product-image" /* Replaced inline styles with this class */
        />
        <p className="product-title">{product.title}</p>
      </Link>

      <p className="product-price">${product.price}</p>
      <p>Discount {product.discountPercentage}%</p>
      <div className="icons">
        <ShoppingCart
          className="cart-icon"
          fill={isAddedToCart ? "currentColor" : "none"}
          style={{ cursor: "pointer" }}
          onClick={() => {
            handleCartClick(product);
          }}
        />
        <Heart
          className="wishlist-icon"
          fill={isAddedToWishlist ? "red" : "none"}
          style={{ cursor: "pointer" }}
          onClick={() => {
            handleWishlistClick(product);
          }}
        />
      </div>
    </div>
  );
}
