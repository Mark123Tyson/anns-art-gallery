import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Products from './pages/Products';
import SinglePost from './pages/SinglePost';
import SearchResults from './pages/SearchResults';
import Contacts from './pages/Contacts';
import About from './pages/About';
import FavoritedProducts from './pages/FavoritedProducts';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import Layout from './layoutComponents /Layout'; 
import initialProducts from './variables/products';
import categories from './variables/categories';

function App() {
  const [favoritedProducts, setFavoritedProducts] = useState(() => {
    return JSON.parse(localStorage.getItem('favoritedProducts')) || [];
  });

  const [favoriteCounts, setFavoriteCounts] = useState(() => {
    return JSON.parse(localStorage.getItem('favoriteCounts')) || {};
  });

  const [searchQuery, setSearchQuery] = useState('');

  // Save to localStorage whenever favoritedProducts or favoriteCounts changes
  useEffect(() => {
    localStorage.setItem('favoritedProducts', JSON.stringify(favoritedProducts));
    localStorage.setItem('favoriteCounts', JSON.stringify(favoriteCounts));
  }, [favoritedProducts, favoriteCounts]);

  // Toggle favorite status and update count
  const toggleFavorite = (product) => {
    setFavoritedProducts((prevFavorites) => {
      if (prevFavorites.find((p) => p.id === product.id)) {
        const updatedFavorites = prevFavorites.filter((p) => p.id !== product.id);
        setFavoriteCounts((prevCounts) => ({
          ...prevCounts,
          [product.id]: (prevCounts[product.id] || 1) - 1,
        }));
        return updatedFavorites;
      } else {
        const updatedFavorites = [...prevFavorites, product];
        setFavoriteCounts((prevCounts) => ({
          ...prevCounts,
          [product.id]: (prevCounts[product.id] || 0) + 1,
        }));
        return updatedFavorites;
      }
    });
  };

  // Get most favorited products based on count
  const getMostFavoritedProducts = (array, count) => {
    const sortedProducts = [...array].sort((a, b) => {
      const aCount = favoriteCounts[a.id] || 0;
      const bCount = favoriteCounts[b.id] || 0;
      return bCount - aCount;
    });
    return sortedProducts.slice(0, count);
  };

  const [products] = useState(initialProducts); // Removed setProducts

  // Handle deletion from favoritedProducts
  const handleDelete = (productId) => {
    // Remove from favorited products
    setFavoritedProducts((prevFavorites) => 
      prevFavorites.filter(product => product.id !== productId)
    );

    // Update favoriteCounts to remove count
    setFavoriteCounts((prevCounts) => {
      const newCounts = { ...prevCounts };
      delete newCounts[productId]; // Remove the count for the deleted product
      return newCounts;
    });
  };

  return (
    <div className="app-container">
      <Router>
        <Layout
          products={products}
          toggleFavorite={toggleFavorite}
          favoritedProducts={favoritedProducts}
          favoriteCounts={favoriteCounts}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        >
          <Routes>
            <Route 
              path="/" 
              element={
                <HomePage 
                  products={products}
                  featuredProducts={getMostFavoritedProducts(products, 12)}
                  categories={categories}
                  toggleFavorite={toggleFavorite}
                  favoritedProducts={favoritedProducts}
                />
              } 
            />
            <Route 
              path="/products" 
              element={<Products products={products} toggleFavorite={toggleFavorite} favoritedProducts={favoritedProducts} />} 
            />
            <Route 
              path="/search" 
              element={<SearchResults products={products} searchQuery={searchQuery} toggleFavorite={toggleFavorite} favoritedProducts={favoritedProducts} categories={categories} />} 
            />
            <Route 
              path="/product/:id" 
              element={<SinglePost products={products} toggleFavorite={toggleFavorite} favoritedProducts={favoritedProducts} categories={categories} />}
            />
            <Route 
              path="/favorites" 
              element={<FavoritedProducts products={favoritedProducts} onDelete={handleDelete} />} 
            />
            <Route 
              path="/contacts" 
              element={<Contacts />} 
            />
            <Route 
              path="/about" 
              element={<About />} 
            />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
