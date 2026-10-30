import ProductCard from "../components/products/ProductCard";

export default function CategoriesPage({
  products,
  handleCartClick,
  handleWishlistClick,
  cart,
  wishlist,
}) {
  const beautyCategory = products.filter(
    (product) => product.category === "beauty",
  );
  const groceriesCategory = products.filter(
    (product) => product.category === "groceries",
  );
  const fragrancesCategory = products.filter(
    (product) => product.category === "fragrances",
  );
  const furnitureCategory = products.filter(
    (product) => product.category === "furniture",
  );

  const renderCategoryRow = (title, categoryProducts) => (
    <div className="category-section" style={{ marginBottom: "3rem" }}>
      <div className="section-header">
        <h2>{title}</h2>
      </div>

      <div className="horizontal-scroll-container">
        {categoryProducts.map((product) => (
          <div key={product.id} className="horizontal-item">
            <ProductCard
              product={product}
              handleCartClick={handleCartClick}
              handleWishlistClick={handleWishlistClick}
              cart={cart}
              wishlist={wishlist}
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div
      className="all-products"
      style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}
    >
      <h1 style={{ marginBottom: "2rem", textAlign: "center" }}>
        Browse by Category
      </h1>

      {renderCategoryRow("Beauty", beautyCategory)}
      {renderCategoryRow("Fragrances", fragrancesCategory)}
      {renderCategoryRow("Furniture", furnitureCategory)}
      {renderCategoryRow("Groceries", groceriesCategory)}
    </div>
  );
}
