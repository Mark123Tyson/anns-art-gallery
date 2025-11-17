import React from 'react';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './Header';
import Footer from './Footer';
import categories from '../variables/categories';

const Layout = ({ children, setSearchQuery, favoritedProducts }) => {
  return (
    <section className="layout-section">
      {/* Large screen header */}
      <div className="large-screen-header">
        <Header 
          setSearchQuery={setSearchQuery} 
          categories={categories} 
          favoritedProducts={favoritedProducts} 
        />
      </div>

      <div className="layout-container">
        <div className="main-content">
          <main>{children}</main>
          <Outlet />
        </div>
      </div>

      <Footer />

      <style>
        {`
          /* General styles */
          .layout-section {
            display: flex;
            flex-direction: column;
            min-height: 100vh; /* Ensure the layout takes up the full height of the viewport */
            background-color: rgb(190, 150, 150);
          }
          .layout-container {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            margin: 0;
            padding: 0;
          }

          /* Remove unnecessary space between footer and the bottom */
          footer {
            margin: 0;
            padding: 0;
          }

          /* 481px to 768px (Tablets and larger mobile devices) */
          @media (min-width: 481px) and (max-width: 768px) {
            .layout-section {
              padding-top: 60px; /* Adjust padding to match the header's height */
            }
            
              
          }

          /* 769px to 1024px (Tablets and smaller desktops) */
          @media (min-width: 769px) and (max-width: 1024px) {
            .layout-container {
              padding-top: 70px; /* Adjust padding to match the header's height */
            }
            .large-screen-header {
              padding: 15px;
            }
            
          }

          /* 1025px to 1200px (Desktops and larger tablets) */
          @media (min-width: 1025px) and (max-width: 1200px) {
            .layout-container {
              padding-top: 50px; /* Adjust padding to match the header's height */
            }
            .large-screen-header {
              padding: 20px;
            }
            
          }

          /* 1201px and up (Large desktops) */
          @media (min-width: 1201px) {
            .layout-container {
              padding-top: 50px; /* Adjust padding to match the header's height */
            }
            .large-screen-header {
              padding: 30px;
            }
            
          }
        `}
      </style>
    </section>
  );
};

export default Layout;
