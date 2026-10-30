import { Link } from "react-router-dom";

export default function Header({ searchQuery, setSearchQuery, filteredProducts }) {
  const searchResults = filteredProducts.slice(0, 5);

  return (
    <div className="header">
      <div className="left-side">
        <Link to="/" className="store-logo">
          Store
        </Link>

        <ul>
          <li>
            <Link to="/" style={{ textDecoration: "none" }}>
              Home
            </Link>
          </li>

          <li>
            <Link to="/AllProducts" style={{ textDecoration: "none" }}>
              Shop
            </Link>
          </li>

          <li>
            <Link to="/categories" style={{ textDecoration: "none" }}>
              Categories
            </Link>
          </li>

          <li>
            <Link to="/#about" style={{ textDecoration: "none" }}>
              About
            </Link>
          </li>

          <li>
            <Link to="/#contact" style={{ textDecoration: "none" }}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="right-side">
        <div className="search-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          {searchQuery.trim() !== "" && (
            <div className="search-dropdown">
              {searchResults.length > 0 ? (
                searchResults.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="search-result"
                    onClick={() => setSearchQuery("")}
                  >
                    <img src={product.thumbnail} alt={product.title} />

                    <div className="search-result-info">
                      <p className="search-result-title">{product.title}</p>

                      <p className="search-result-price">${product.price}</p>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="no-results">No products found</div>
              )}
            </div>
          )}
        </div>

        <Link to="/wishlist">
          <button>Wishlist</button>
        </Link>

        <Link to="/cart">
          <button>Cart</button>
        </Link>
      </div>
    </div>
  );
}
