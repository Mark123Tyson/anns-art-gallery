import React, { useState, useEffect } from 'react';
import Card from './Card';

const SearchResults = ({ searchQuery, products, categories }) => {
  const [favoritedProducts, setFavoritedProducts] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavoritedProducts(savedFavorites);
  }, []);

  const toggleFavorite = (product) => {
    let updatedFavorites;
    if (favoritedProducts.some(fav => fav.id === product.id)) {
      updatedFavorites = favoritedProducts.filter(fav => fav.id !== product.id);
    } else {
      updatedFavorites = [...favoritedProducts, product];
    }

    setFavoritedProducts(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const isPriceQuery = !isNaN(parseFloat(searchQuery)) && isFinite(searchQuery);

  const filteredProducts = products.filter((product) => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    return (
      product.title.toLowerCase().includes(lowerCaseQuery) ||
      product.category.toLowerCase().includes(lowerCaseQuery) ||
      (isPriceQuery && product.price === parseFloat(searchQuery))
    );
  });

  const isCategorySearch = categories.some(category => category.title.toLowerCase() === searchQuery.toLowerCase());

  return (
    <section className="search-results-section">
      <h2 className="search-results">
        {isCategorySearch ? `Products in Category: ${searchQuery}` : `Search Results for: ${searchQuery}`}
      </h2>

      {filteredProducts.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <div className="product-div">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              toggleFavorite={toggleFavorite}
              isFavorited={favoritedProducts.some(p => p.id === product.id)}
            />
          ))}
        </div>
      )}

      <style>{`
        .search-results {
          text-align: center;
          padding: 5px 10px;
          background-color: rgb(200, 200, 200);
          margin:20px 30px 40px 30px;
          border-radius: 25px;
          font-size: 30px;
        }

       

        .product-div {
          display: grid;
        }

        /* Responsive Design */
        @media (max-width: 480px) {
          .product-div {
            grid-template-columns: repeat(2, 1fr); /* 2 products per row */
            gap: 10px;
          }
          .search-results-section {
            padding-top:100px;
          }
        }

        @media (min-width: 481px) and (max-width: 768px) {
          .product-div {
            grid-template-columns: repeat(3, 1fr); /* 3 products per row */
            gap: 10px;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .product-div {
            grid-template-columns: repeat(3, 1fr); /* 3 products per row */
            gap: 30px;
          }
        }

        @media (min-width: 1025px) and (max-width: 1200px) {
          .product-div {
            grid-template-columns: repeat(4, 1fr); /* 4 products per row */
            gap: 15px;
          }
        }

        @media (min-width: 1201px) {
          .product-div {
            margin: 0 40px;
            grid-template-columns: repeat(4, 1fr); /* 4 products per row */
            gap: 30px;
          }
        }
      `}</style>
    </section>
  );
};

export default SearchResults;
