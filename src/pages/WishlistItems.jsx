import CollectionHeading from "../components/collection/CollectionHeading";
import EmptyCollection from "../components/collection/EmptyCollection";
import CollectionItem from "../components/collection/CollectionItem";

export default function WishlistItems({ wishlistItems, handleCartClick, handleWishlistClick, cart, wishlist }) {
  return (
    <main className="collection-page wishlist-items">
      <CollectionHeading title="Your wishlist" count={wishlistItems.length} description="Keep the pieces you love close. Add them to your cart whenever you're ready." />
      {wishlistItems.length === 0 ? <EmptyCollection isWishlist /> : (
        <div className="wishlist-grid">
          {wishlistItems.map((product) => <CollectionItem key={product.id} isWishlist {...{ product, handleCartClick, handleWishlistClick, cart, wishlist }} />)}
        </div>
      )}
    </main>
  );
}
