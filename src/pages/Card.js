import React from 'react';

const Card = ({ id, image, title, description, price, toggleFavorite, isFavorited, isAvailable }) => {
  const handleFavoriteClick = (event) => {
    event.stopPropagation();
    toggleFavorite({ id, image, title, description, price });
  };

  return (
    <div className='singleProduct' onClick={() => window.location.href = `/product/${id}`}>
      <style>
        {`
          .singleProduct {
          padding: 5px;
            display: flex;
            flex-direction: column;
            border: 1px solid grey;
            border-radius:15px;
            text-align: center;
            position: relative;
            background-color: rgb(200, 220, 210);;

            overflow: hidden;
            transition: transform 0.2s, box-shadow 0.2s;
            width: 100%;
            
          }

          .singleProduct:hover {
            border: white 2px solid;
            transform: scale(1.03);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
            cursor:pointer;
          }

          .general-image {
            width: 100%;
            min-height: 75%;
            object-fit: cover;
           border-radius: 15px;
            margin-bottom: 0;
          }

          .heart {
            position: absolute;
            top: 10px;
            right: 10px;
            font-size: 24px;
            cursor: pointer;
            color: white;
            transition: background-color 0.3s ease, color 0.3s ease, opacity 0.3s ease, transform 0.2s ease;
            z-index: 1;
            opacity: 0;
            visibility: hidden;
            width: 35px;
            height: 35px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: white;
          }

          .heart:hover {
            background-color: white;
            color: lightcoral;
            border: 1px solid lightcoral;
          }

          .price {
            position: absolute;
            top: 10px;
            left: 10px;
            font-size: 18px;
            color: green;
            background-color: white;
            padding: 5px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
          }

          .description {
            flex-grow: 1;
            padding: 5px;
            margin-top: 5px;
            text-align: left;
          }

          .title {
            text-align:center;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-size:15px;
            font-weight:bold;
            margin: 10px 0; 
            background-color: #f0f8ff; 
            border-radius: 5px; 
          }
            .availability{
            margin-top:-15px;
            text-align:center;}

          /* Media Queries */
          @media (max-width: 480px) {
            .singleProduct {
               height:250px;
              margin: 5px;
            }
           .heart {
              opacity: 1;
            visibility: visible;
            }
          }

          @media (min-width: 481px) and (max-width: 768px) {
            .singleProduct {
               height:280px;
              
            }
            .heart {
              opacity: 1;
            visibility: visible;
            }
          }

          @media (min-width: 769px) and (max-width: 1024px) {
            .singleProduct {
               height:280px;
            }
                .heart {
              opacity: 1;
            visibility: visible;
            }

          }

          @media (min-width: 1025px) and (max-width: 1200px) {
            .singleProduct {
             height:300px;
           
            }
          }

          @media (min-width: 1201px) {
            .singleProduct {
              height:300px;
            }
              .heart{
              top: 30px;}
              .singleProduct:hover .heart {
            opacity: 1;
            visibility: visible;
            transform: translateY(-20px);
          }
          }
        `}
      </style>

      <img src={image} alt={title} className='general-image' />
      <div className="description">
        <p className="title">{title}</p>
        <p>{description}</p>
        <p className="availability">{isAvailable ? 'Available' : 'Made On Order'}</p>
      </div>
      <span className="heart" onClick={handleFavoriteClick}>
        {isFavorited ? '❤️' : '🤍'}
      </span>
      <span className="price">${price}</span>
    </div>
  );
};

export default Card;
