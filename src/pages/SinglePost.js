import React from 'react';
import Card from './Card';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SinglePost = ({ products, toggleFavorite, favoritedProducts, isAvailable }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  if (!products) {
    return <div>Loading products...</div>;
  }

  const product = products.find((item) => item.id === parseInt(id));
  const similarProducts = product
    ? products.filter(item => item.category === product.category && item.id !== product.id)
    : [];

  const handleBackToHome = () => {
    navigate('/'); // Navigate back to home page
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top of the page
  };

  const handleNavClick = (path) => {
    setTimeout(() => {
      window.location.href = path;
    }, 500);
  };

  const handleImageClick = () => {
    window.open(product.image, '_blank'); // Open image in a new tab
  };

  return (
    <section>
      <div className="single-post">
        <style>
          {`
            .single-post {
              max-width: 800px;
              margin: 20px auto;
              padding: 20px;
              border: 1px solid #ddd;
              border-radius: 8px;
              background-color: rgb(220,240,255);
              text-align: center;
    
            }

            .single-post h1 {
              font-size: 2rem;
              margin-bottom: 10px; /* Reduced margin */
              color: black;
            }

            .single-post img {
              max-width: 80%;
              border-radius: 8px;
              max-height: 450px;
              cursor: pointer; /* Change cursor to pointer */
            }

            .single-post p {
              font-size: 1.2rem;
              color: #000;
              margin: 5px 0; /* Reduced margin */
            }

            .description {
              padding: 10px; /* Added padding */
              margin: 10px 0; /* Added margin for spacing */
              background-color: #f0f8ff; /* Light background color */
              border-radius: 5px; /* Rounded corners */
            }

            .similar-products-container {
              width: 90%;
              margin: 40px auto;
              
              border: 1px solid #ddd;
              border-radius: 18px;
              background-color: whitesmoke;
            }

            h2 {
              text-align: center;
              padding: 10px;
              color: black;
            }

            .similar-products {
              display: flex;
              overflow-x: auto;
              cursor: pointer;
              gap: 30px;
              padding: 10px;
              scroll-behavior: smooth;
              transition: transform 0.2s;
              text-align: center;
              flex: 0 0 auto;
            }

            .similar-products > div {
              min-width: 200px;
            }

            .scrollable-container::-webkit-scrollbar {
              height: 8px;
              
            }

            .scrollable-container::-webkit-scrollbar-thumb {
              background-color: #888;
              border-radius: 2px;
            }

            .scrollable-container::-webkit-scrollbar-thumb:hover {
              background-color: #555;
            }

            .button-container {
              display: flex;
              justify-content: center;
              margin: 60px 0;
            }

            .load-more-btn {
              margin: 20px;
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


            @media (max-width: 480px){
              .single-post {margin-top:110px;}
              
              }

            /* Medium devices (tablets, 768px and up) */
            @media (max-width: 768px) {
              .single-post {
                max-width: 600px;
              
                padding: 15px;
              }

              .single-post h1 {
                font-size: 1.8rem;
              }
              /* Add a minimum width for the card elements */
            .similar-products > div {
              min-width: 200px; /* Adjust the value as needed */
            }

              

              .similar-products-container {
                width: 85%;
              }

             .similar-products > div {
              min-width: 185px; /* Adjust the value as needed */
            }
            }

            /* Small devices (phones, 576px and up) */
            @media (max-width: 480px) {
              .single-post {
                max-width: 600px;
                padding: 15px;
              }

              .single-post h1 {
                font-size: 1.5rem;
              }

              .single-post img {
                min-width: 160px;
                max-height: 270px;
              }

              .similar-products-container {
                width: 95%;
              }

               .similar-products > div {
              min-width: 160px; /* Adjust the value as needed */
            }
            }
          `}
        </style>

        {product ? (
          <>
            <div className="singleItem">
              <h1>{product.category}</h1>
              <img src={product.image} alt={product.title} onClick={handleImageClick} /> {/* Added click handler */}
              <p className="description">{product.description}</p>
              <p>${product.price}</p>
              <p className="availability">Availability: {isAvailable ? 'Available' : 'On Order'}</p>
            </div>
          </>
        ) : (
          <p>Product not found.</p>
        )}
      </div>

      {similarProducts.length > 0 && (
        <div className="similar-products-container">
          <h2>Similar Products</h2>
          <div className="similar-products">
            {similarProducts.map(similarProduct => (
              <Card
                key={similarProduct.id}
                id={similarProduct.id}
                image={similarProduct.image}
                title={similarProduct.title}
                price={similarProduct.price}
                toggleFavorite={toggleFavorite}
                isFavorited={favoritedProducts.some(p => p.id === product.id)}
              />

             
            ))}
          </div>
        </div>
      )}
      <div className="button-container">
        <button onClick={handleBackToHome} className="load-more-btn">
          Back to Home
        </button>
        <button onClick={() => handleNavClick("/products")} className="load-more-btn">
          View All Products 
        </button>
      </div>
    </section>
  );
};

export default SinglePost;
