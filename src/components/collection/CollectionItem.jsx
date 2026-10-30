import { Link } from "react-router-dom";
import { ShoppingCart, Heart, Trash2 } from "lucide-react";
import formatPrice from "../../utils/formatPrice";

export default function CollectionItem({ product, isWishlist = false, handleCartClick, handleWishlistClick, cart, wishlist }) {
  const inCart = cart.some((item) => item.id === product.id);
  const isSaved = wishlist.some((item) => item.id === product.id);
  return (
    <article className={`collection-item ${isWishlist ? "saved-item" : ""}`}>
      <Link className="collection-item-image" to={`/product/${product.id}`}>
        <img src={product.thumbnail} alt={product.title} />
      </Link>
      <div className="collection-item-info">
        <p className="collection-item-category">{product.category}</p>
        <h2><Link to={`/product/${product.id}`}>{product.title}</Link></h2>
        <p className="collection-item-price">{formatPrice(product.price)}</p>
        <div className="collection-item-actions">
          {isWishlist ? (
            <button className="collection-cart-button" onClick={() => handleCartClick(product)}>
              <ShoppingCart size={16} />{inCart ? "Remove from cart" : "Add to cart"}
            </button>
          ) : (
            <button className="collection-text-button" aria-pressed={isSaved} onClick={() => handleWishlistClick(product)}>
              <Heart size={16} fill={isSaved ? "currentColor" : "none"} />{isSaved ? "Saved to wishlist" : "Save to wishlist"}
            </button>
          )}
          <button className="collection-remove-button" aria-label={`Remove ${product.title} from ${isWishlist ? "wishlist" : "cart"}`} onClick={() => isWishlist ? handleWishlistClick(product) : handleCartClick(product)}>
            <Trash2 size={16} /><span>Remove</span>
          </button>
        </div>
      </div>
    </article>
  );
}
