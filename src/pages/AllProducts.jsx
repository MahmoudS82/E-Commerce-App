import ProductCard from "../components/products/ProductCard";

export default function AllProducts({ products, handleCartClick, handleWishlistClick, cart, wishlist }) {
  return (
    <div className="all-products">
      <h2>All Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            handleCartClick={handleCartClick}
            handleWishlistClick={handleWishlistClick}
            cart={cart}
            wishlist={wishlist}
          />
        ))}
      </div>
    </div>
  );
}
