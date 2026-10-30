import { useParams } from "react-router-dom";
import { ShoppingCart, Heart } from "lucide-react";

export default function ProductDetails({
  products,
  handleCartClick,
  handleWishlistClick,
  cart = [],
  wishlist = [],
}) {
  const { id } = useParams();
  const product = products.find((product) => product.id === Number(id));

  if (!product) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "3rem" }}>
        Product not found
      </h2>
    );
  }

  // التحقق من وجود المنتج في السلة أو المفضلة
  const isAddedToCart = cart.some((item) => item.id === product.id);
  const isAddedToWishlist = wishlist.some((item) => item.id === product.id);

  return (
    <div className="product-details-container">
      <div className="product-details-image">
        <img src={product.thumbnail} alt={product.title} />
      </div>

      <div className="product-details-info">
        <h1>{product.title}</h1>
        <p className="details-price">${product.price}</p>
        <p className="details-description">{product.description}</p>

        <div className="details-actions">
          <button
            className={`add-to-cart-btn ${isAddedToCart ? "added" : ""}`}
            onClick={() => handleCartClick(product)}
          >
            <ShoppingCart fill={isAddedToCart ? "currentColor" : "none"} />
            {isAddedToCart ? "Remove from Cart" : "Add to Cart"}
          </button>

          <button
            className="details-wishlist-btn"
            onClick={() => handleWishlistClick(product)}
          >
            <Heart
              fill={isAddedToWishlist ? "#e63946" : "none"}
              color={isAddedToWishlist ? "#e63946" : "currentColor"}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
