import { useParams } from "react-router-dom";
import ProductCard from "../components/products/ProductCard";

export default function CategoryPage({ products, handleCartClick, handleWishlistClick, cart, wishlist }) {
  const { categoryName } = useParams();

  const categoryProducts = products.filter(
    (product) => product.category === categoryName,
  );

  return (
    <div className="all-products">
      <div className="section-header">
        <h2>{categoryName} Products</h2>
      </div>
      {categoryProducts.length > 0 ? (
        <div className="products-grid">
          {categoryProducts.map((product) => (
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
      ) : (
        <h3>No products found in this category</h3>
      )}
    </div>
  );
}
