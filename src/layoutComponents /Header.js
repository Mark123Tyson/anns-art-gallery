import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header = ({ setSearchQuery, categories, favoritedProducts }) => {
  const [query, setQuery] = useState('');
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  
  // Ensure favoritedProducts is an array before calculating its length
  const totalFavorites = Array.isArray(favoritedProducts) ? favoritedProducts.length : 0; 

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const currentScroll = window.scrollY; 
      setIsHeaderVisible(currentScroll <= lastScrollTop || currentScroll < 60);
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSearchChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    setSearchQuery(newQuery);
    navigate(newQuery ? '/search' : '/');
  };

  useEffect(() => {
    if (location.pathname !== '/search') {
      setQuery('');
      setSearchQuery('');
    }
  }, [location.pathname, setSearchQuery]);

  const handleCategorySelect = (category) => {
    setQuery(category.title);
    setSearchQuery(category.title);
    navigate('/search');
  };

  return (
    <section>
      <div className={`navbar navbar-expand-lg navbar-dark fixed-top header ${isHeaderVisible ? 'visible' : 'hidden'}`}>
        <div className="container-fluid d-flex justify-content-between align-items-center">
          {/* Logo Section */}
          <div className="logo-section">
            <Link className="nav-link text-light ms-3 cat" to="/">
              <img src="/images/Anne-logo.png" alt="logo" className="logo-img" />
            </Link>
            <span className="logo-tooltip">Go to Home</span>
          </div>

          {/* Search Bar */}
          <div className="search-section">
            <form className="search-form" onSubmit={(e) => e.preventDefault()}>
              <input
                className="form-control rounded-pill ps-4"
                type="search"
                placeholder="Search any item"
                value={query}
                onChange={handleSearchChange}
                aria-label="Search"
              />
            </form>
          </div>

          {/* Favorite Icon */}
          <div className="favorite-section hover">
            <Link className="nav-link text-light fav" to="/favorites" title="Your Favorites">
              <i className="fas fa-heart"></i>
              <span>{totalFavorites}</span>
            </Link>
          </div>

          {/* Dropdown Menu */}
          <div className="dropdown-menu-right hover">
            <button
              className="btn btn-outline-light dropdown-toggle"
              type="button"
              id="menuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false" title='Browse Categories'
            >
              <i className="fas fa-bars"></i>
            </button>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="menuButton">
              {categories.map((category) => (
                <li key={category.id}>
                  <button
                    className="dropdown-item"
                    onClick={() => handleCategorySelect(category)}
                  >
                    {category.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* CSS for Header styling */}
      <style>{`
        .header {
          background-color: rgb(0, 150, 200);
          color: white;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 90px;
          z-index: 1000;
          transition: transform 0.3s ease;
        }

        .header.hidden {
          transform: translateY(-100%);
        }

        .header.visible {
          transform: translateY(0);
        }

        .logo-tooltip {
          display: none;
          position: absolute;
          top: 100%;
          left: 8%;
          transform: translateX(-50%);
          background-color: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 5px 10px;
          border-radius: 5px;
          font-size: 12px;
          white-space: nowrap;
          margin-top: 5px;
        }

        .logo-section:hover .logo-tooltip {
          display: block;
        }

        .logo-img {
          width: 160px;
          height: 70px;
          border-radius: 50%;
        }

        .search-section {
          flex-grow: 1;
          margin-left: 15px;
          max-width: 500px;
        }

        .search-form {
          position: relative;
        }

        .form-control {
          width: 100%;
          padding: 10px;
          border-radius: 25px;
          background-color: whitesmoke;
          border: none;
        }

        .form-control:hover {
          border: 2px rgb(255, 180, 0) solid;
        }

        .favorite-section {
          padding-right: 10px;
        }

        .favorite-count {
          background-color: rgb(255, 0, 0);
          color: white;
          border-radius: 50%;
          padding: 0 5px;
          margin-left: 5px;
          font-size: 0.8rem;
          position: relative;
          top: -5px;
        }

        .dropdown-item {
          background-color: rgb(255, 255, 255);
        }

        .dropdown-menu-right {
          margin-right: 30px;
        }

        .dropdown-item:hover {
          background-color: rgb(200, 200, 190);
        }

        .hover:hover {
          font-weight: bold;
        }

        .favorite-section {
          font-size: 40px;
          padding: 30px auto;
        }

        @media (max-width: 1024px) {
          .logo-section,
          .search-section,
          .favorite-section,
          .dropdown-menu-right {
            display: block;
          }
          .logo-tooltip {display:none;}
          .header {
            height: auto;
          }

          .logo-img {
            width: 130px;
            height: 50px;
            border-radius: 50%;
          }

          .search-section {
            padding: 0px;
          }

          .favorite-section {
            font-size: 30px;
            padding: 30px auto;
          }
        }

        @media (max-width: 768px) {
          .logo-section,
          .search-section,
          .favorite-section,
          .dropdown-menu-right {
            display: block;
            text-align: center;
            margin: 5px 0;
          }
            .logo-tooltip {display:none;}

          .header {
            font-size: 35px;
          }

          .logo-img {
            width: 140px;
            height: 70px;
            border-radius: 50%;
          }

          .search-section {
            max-width: 300px;
          }

          .dropdown-menu-right {
            margin-right: 20px;
          }
        }

        @media (max-width: 480px) {
          .header {
            padding-top: 5px;
            font-size: 30px;
          }
          .logo-section {
            margin-left: -10px;
          }
          .logo-img {
            width: 90px;
            height: 50px;
            border-radius: 50%;
          }
            .logo-tooltip {display:none;}
          .search-section {
            display: flex;
            justify-content: center;
            flex-grow: 1;
            order: 1;
            max-width: 60%;
            margin: 0 auto;
          }
          .form-control {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default Header;
