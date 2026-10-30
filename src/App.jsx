import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import data from "./data";
import Header from "./components/layout/Header";
import SectionNavigation from "./components/layout/SectionNavigation";
import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import ProductDetails from "./pages/ProductDetails";
import CartItems from "./pages/CartItems";
import WishlistItems from "./pages/WishlistItems";
import CategoryPage from "./pages/CategoryPage";
import CategoriesPage from "./pages/CategoriesPage";

export default function App() {
  const [products, setProducts] = useState(data.products);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const [searchQuery, setSearchQuery] = useState("")

  const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(searchQuery.toLowerCase()))

  function handleCartClick(product) {
    const alreadyInCart = cart.some((item) => item.id === product.id);
    if (alreadyInCart) {
      setCart(cart.filter((item) => item.id !== product.id));
    } else {
      setCart([...cart, product]);
    }
  }

  function handleWishlistClick(product) {
    const alreadyInWishlist = wishlist.some((item) => item.id === product.id);
    if (alreadyInWishlist) {
      setWishlist(wishlist.filter((item) => item.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  }

  const featuredProducts = products.slice(0, 10);

  return (
    <BrowserRouter>
      <SectionNavigation />
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filteredProducts={filteredProducts}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              featuredProducts={featuredProducts}
              handleCartClick={handleCartClick}
              handleWishlistClick={handleWishlistClick}
              products={products}
              cart={cart}
              wishlist={wishlist}
            />
          }
        />
        <Route
          path="/AllProducts"
          element={
            <AllProducts
              products={products}
              handleCartClick={handleCartClick}
              handleWishlistClick={handleWishlistClick}
              cart={cart}
              wishlist={wishlist}
            />
          }
        />
        <Route
          path="/product/:id"
          element={
            <ProductDetails
              products={products}
              handleCartClick={handleCartClick}
              handleWishlistClick={handleWishlistClick}
              cart={cart}
              wishlist={wishlist}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <CartItems
              cartItems={cart}
              handleCartClick={handleCartClick}
              handleWishlistClick={handleWishlistClick}
              cart={cart}
              wishlist={wishlist}
            />
          }
        />
        <Route
          path="/wishlist"
          element={
            <WishlistItems
              wishlistItems={wishlist}
              handleCartClick={handleCartClick}
              handleWishlistClick={handleWishlistClick}
              cart={cart}
              wishlist={wishlist}
            />
          }
        />
        <Route
          path="/category/:categoryName"
          element={
            <CategoryPage
              products={products}
              handleCartClick={handleCartClick}
              handleWishlistClick={handleWishlistClick}
              cart={cart}
              wishlist={wishlist}
            />
          }
        />
        <Route
          path="/categories"
          element={
            <CategoriesPage
              products={products}
              handleCartClick={handleCartClick}
              handleWishlistClick={handleWishlistClick}
              cart={cart}
              wishlist={wishlist}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
