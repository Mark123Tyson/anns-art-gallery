import React, { useEffect, useRef } from 'react';
import Card from './Card';
import { useLocation } from 'react-router-dom';
import Contacts from './Contacts';
import About from './About';

const HomePage = ({ products, toggleFavorite, favoritedProducts }) => {
  const location = useLocation();
  const imageContainerRef = useRef(null);
  const scrollSpeed = 1.3; // Adjust this for speed of scrolling

  useEffect(() => {
    const totalImages = products.length; // Original images count
    const totalWidth = totalImages * 300; // Assuming each image has a width of 300px
    let offset = 0;

    const animate = () => {
      offset -= scrollSpeed; // Change the speed by adjusting this value

      // Reset offset to create a looping effect
      if (Math.abs(offset) >= totalWidth) {
        offset = 0; // Reset the offset to start over
      }

      if (imageContainerRef.current) {
        imageContainerRef.current.style.transform = `translateX(${offset}px)`;
      }
      requestAnimationFrame(animate);
    };

    if (products.length > 0) {
      requestAnimationFrame(animate);
    }
  }, [products]);

  return (
    <section className='products-section'>
      <div className='banner'>
        <h2 className='banner-h2'>Discover the latest trends from our collections</h2>
        <div className='image-banner'>
          {products.length > 0 ? (
            <div className='image-container' ref={imageContainerRef}>
              {products.concat(products).map((product, index) => (
                <img
                  key={`${product.id}-${index}`} // Ensure unique keys by combining id with index
                  src={product.image}
                  alt={product.title}
                  className='featured-image'
                />
              ))}
            </div>
          ) : (
            <p>No products available</p>
          )}
        </div>
      </div>

      <h1 className='h1-featured'>Our Featured Products</h1>
      <div className='product-div'>
        {products.slice(0, 12).map(product => ( // Limit to 12 products for display
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

      <div className='button-container'>
        {location.pathname !== '/products' && (
          <button onClick={() => window.location.href = "/products"} className="load-more-btn">
            View All Products
          </button>
        )}
      </div>

      <style>
        {`
          .banner {
            margin:auto;
            background-color: rgba(65, 105, 225, 0.5);
            border-radius: 20px; 
            position: relative;
            padding: 10px;
            overflow: hidden; /* Prevent overflow from showing */
          }
          .banner-h2{text-align:center;
            padding: 5px 10px;}

          .image-banner {
            display: flex;
            justify-content: center;
             margin:30px auto;
            align-items: center;
          }

          .image-container {
            display: flex;
            transition: transform 0.1s linear; /* Smooth transition for movement */
          }

          .featured-image {
            border-radius: 50%;
            object-fit: cover;
            margin-left: -40px; /* Adjust spacing */
          }

          .h1-featured {
            text-align: center;
            padding: 5px 10px;
            background-color: rgb(200, 200, 200);
            margin: 30px auto;
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
            justify-content: center;
            margin: 40px 0;
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
            background-color: #0056b3;
          }

          /* Media Queries */
          @media (max-width: 480px) {
            .product-div {
              grid-template-columns: repeat(2, 1fr); 
              gap: 10px;
            }
              .banner{
              margin-top:110px;
              width:auto;}
              }
              .featured-image {
            width: 150px; 
            height:150px;
            border-radius: 50%;
            object-fit: cover;
            margin-left: -40px; /* Adjust spacing */
          }

          @media (min-width: 481px) and (max-width: 768px) {
            .product-div {
              grid-template-columns: repeat(3, 1fr); 
              gap: 10px;
            }
              .featured-image{
                width: 230px; 
                height:230px;
              }
          }

          @media (min-width: 769px) and (max-width: 1024px) {
            .product-div {
              grid-template-columns: repeat(3, 1fr); 
              gap: 30px;
            }
              .featured-image{
                width: 230px; 
                height:230px;
              }
          }

          @media (min-width: 1025px) and (max-width: 1200px) {
            .product-div {
              grid-template-columns: repeat(4, 1fr); 
              gap: 15px;
            }
              .featured-image{
                width: 230px; 
                height:230px;
              }
          }

          @media (min-width: 1201px) {
            .product-div {
              margin: 0 40px;
              grid-template-columns: repeat(4, 1fr); 
              gap: 30px;
            }
              .featured-image{
                width: 230px; 
                height:230px;
              }
          }
        `}
      </style>

      <Contacts />
      <About />
    </section>
  );
};

export default HomePage;
