import React, { useState } from 'react';
import Card from './Card';
import { useNavigate } from 'react-router-dom'; 

const Products = ({ products, toggleFavorite, favoritedProducts }) => {
  const [displayedProductsCount, setDisplayedProductsCount] = useState(32); 
  const navigate = useNavigate(); 

  const loadMoreProducts = () => {
    setDisplayedProductsCount((prevCount) => prevCount + 32); 
  };

  const handleBackToHome = () => {
    navigate('/'); 
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  };

  const allProductsLoaded = displayedProductsCount >= products.length; 

  return (
    <section className='products-section'>
      <h1>Our Collections</h1>
      <div className='product-div'>
        {products.slice(0, displayedProductsCount).map(product => ( 
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

      {/* Load More or Back to Home Button */}
      <div className="button-container">
        {allProductsLoaded ? (
          <button onClick={handleBackToHome} className="load-more-btn">
            Back to Home
          </button>
        ) : (
          <button onClick={loadMoreProducts} className="load-more-btn">
            Load More Products
          </button>
        )}
      </div>

      <style>
        {`
          h1 { 
            text-align: center;
            padding: 5px 10px;
            background-color: rgb(200, 200, 200);
            margin-bottom: 30px;
            border-radius: 25px;
          }

          .products-section {
        
            padding: 20px;
          }
          

          .product-div {
            display: grid; 
          }

          .button-container {
            display: flex;
            justify-content: center; /* Center the button */
            margin: 60px 0;
          }

          .load-more-btn {
            padding: 10px 20px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }

          .load-more-btn:hover {
            background-color: #0056b3; /* Darker shade on hover */
          }
/* Media Queries */
          @media (max-width: 480px) {
            .product-div {
              grid-template-columns: repeat(2, 1fr); /* 2 cards per row for small phones */
              gap: 10px;
            }
              .products-section{ margin-top:110px;}
          }

          @media (min-width: 481px) and (max-width: 768px) {
            .product-div {
              grid-template-columns: repeat(3, 1fr);
              gap: 10px;
            }
          }

          @media (min-width: 769px) and (max-width: 1024px) {
            .product-div {
               display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 30px; 
            }
          }

          @media (min-width: 1025px) and (max-width: 1200px) {
            .product-div {
              grid-template-columns: repeat(4, 1fr); 
              gap: 30px;
            }
          }

          @media (min-width: 1201px) {
            .product-div {
            margin:0 40px;
              grid-template-columns: repeat(4, 1fr); 
              gap: 30px;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Products;
