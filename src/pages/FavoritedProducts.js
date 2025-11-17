import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FavoritedProducts = ({ products, onDelete }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (path) => {
    setTimeout(() => {
      window.location.href = path;
    }, 500);
  };

  return (
    <section className="favorited-products">
      {products.length > 0 ? (
        <>
          <h1>Your Favorites</h1>
          <table className="favorites-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Availability</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr
                  key={product.id}
                  className="favorite-item"
                  onMouseEnter={() => setHoveredIndex(index)} 
                  onMouseLeave={() => setHoveredIndex(null)} 
                >
                  <td>
                    <img src={product.image} alt={product.title} />
                  </td>
                  <td>{product.title}</td>
                  <td>${product.price}</td>
                  <td>{product.isAvailable ? 'Yes' : 'On Order'}</td>
                  <td>
                    {hoveredIndex === index && ( 
                      <button 
                        onClick={() => onDelete(product.id)} 
                        className="delete-btn">
                        Delete
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h5>
            Note: Items marked as "Made to Order" will be manufactured upon request.
          </h5>
        </>
      ) : (
        <h5 className='justified'>No favorites yet!</h5>
      )}
      <div className="button-container">
        <button onClick={handleBackToHome} className="load-more-btn">
          Back to Home
        </button>
        <button onClick={() => handleNavClick("/products")} className="load-more-btn">
          View All Products 
        </button>
      </div>
      <style>
        {`
      
          h1 {
            text-align: center;
            margin:20px auto;
          }
         
          .favorites-table {
            width: 80%;
            border-collapse: collapse;
            margin: auto;
          }

          .favorites-table th,
          .favorites-table td {
            text-align: left;
            padding: 12px;
            border: 1px solid #ddd;
          }

          .favorites-table th {
            font-weight: bold;
          }

          td:hover {
            background-color: #f1f1f1;
          }

          .favorite-item img {
            width: 50px; 
            height: 50px;
            object-fit: cover;
            border-radius: 8px; 
          }

          .favorite-item td {
            vertical-align: middle; 
          }

          h5 {
            padding-top: 30px;
            text-align: center; 
            font-size:15px;
          }
            h5.justified{
            margin-top:100px;
              align-text:center;
            }

          .button-container {
              display: flex;
              justify-content: center;
              onMouseEnter={() => setHoveredIndex(index)} // Set the hovered index
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
              background-color: #0056b3; 
            }

            .delete-btn {
            background-color: #dc3545; 
            color: white;
            border: none;
            padding: 5px 10px;
            border-radius: 5px;
            cursor: pointer;
          }

          .delete-btn:hover {
            background-color: #c82333;
          }

          /* MEDIA QUERIES */
          @media (max-width: 480px) {
            
            .favorited-products {
              padding-top: 110px;
            }
          }

          @media (min-width: 481px) and (max-width: 768px) {
          
          }

          @media (min-width: 769px) and (max-width: 1024px) {
          
          }

          @media (min-width: 1025px) and (max-width: 1200px) {
            
          }

          @media (min-width: 1201px) {
           
          }

          @media (max-width: 768px) {
            .favorites-table {
              width: 100%; 
            }

            .favorites-table th,
            .favorites-table td {
              padding: 8px; 
            }

            .favorite-item img {
              width: 40px; 
              height: 40px; 
            }

            h1 {
              font-size: 1.5em; 
            }

            p {
              font-size: 0.9em; 
            }
          }

          @media (max-width: 480px) {

            .favorites-table {
              width: 100%; 
            }

            .favorites-table tr {
              margin-bottom: 15px; 
            }

            h1 {
              font-size: 1.2em; 
            }

            p {
              font-size: 0.8em; 
            }
          }
        `}
      </style>
    </section>
  );
};

export default FavoritedProducts;