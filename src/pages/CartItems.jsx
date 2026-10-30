import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import CollectionHeading from "../components/collection/CollectionHeading";
import EmptyCollection from "../components/collection/EmptyCollection";
import CollectionItem from "../components/collection/CollectionItem";
import formatPrice from "../utils/formatPrice";

export default function CartItems({ cartItems, handleCartClick, handleWishlistClick, cart, wishlist }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);
  return (
    <main className="collection-page cart-items">
      <CollectionHeading title="Shopping cart" count={cartItems.length} description="Your favorite finds, all in one place." />
      {cartItems.length === 0 ? <EmptyCollection /> : (
        <div className="cart-layout">
          <div className="cart-list">
            {cartItems.map((product) => <CollectionItem key={product.id} {...{ product, handleCartClick, handleWishlistClick, cart, wishlist }} />)}
          </div>
          <aside className="cart-summary" aria-labelledby="cart-summary-title">
            <h2 id="cart-summary-title">Order summary</h2>
            <dl>
              <div><dt>Items</dt><dd>{cartItems.length}</dd></div>
              <div><dt>Subtotal</dt><dd>{formatPrice(total)}</dd></div>
              <div className="cart-summary-total"><dt>Total</dt><dd>{formatPrice(total)}</dd></div>
            </dl>
            <p className="cart-summary-note">Product total only. Shipping and taxes are not included.</p>
            <Link className="collection-primary-link" to="/AllProducts">Continue shopping <ArrowRight size={17} /></Link>
          </aside>
        </div>
      )}
    </main>
  );
}
