import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <section className='socials'>
        <h2 className='find'>Find Us On:</h2>
        <div className="social-icons">
          <a href="https://wa.me/256775469680" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="https://www.instagram.com/annesther31/?igsh=YjM5aW8wMTNkbWd0" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100009295961399" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <i className="fab fa-tiktok"></i>
          </a>
          <a href="https://www.snapchat.com" target="_blank" rel="noopener noreferrer" aria-label="Snapchat">
            <i className="fab fa-snapchat-ghost"></i>
          </a>
        </div>
      </section>

      <style>
        {`
          

          .footer {
            font-size: 20px;
            background-color: #4f5258;
            color: white;
            text-align: center;
            
            width: 100%;
            position: relative;
            bottom: 0;
            left: 0;
            padding-top:20px;
          }

          .footer a {
            color: #61dafb;
           
            text-decoration: none;
          }

          .footer a:hover {
            color: #ffffff;
          }

          /* CONTACT INFO */
          h2.find {
            font-size: 35px;
          }

          .socials {
            display: flex;            
            flex-direction: column;  /* Change to column layout for small devices */
            justify-content: center;  
            align-items: center;     
            
            flex-wrap: nowrap; /* Prevents wrapping */
          }

          .social-icons {
            display: flex; /* Keeps icons in a row */
            justify-content: center;
            align-items: center;
            
          }

          .social-icons a {
            
            font-size: 40px; /* Default icon size */
            padding: 10px; /* Reduced padding */
            transition: transform 0.3s;
          }

          .social-icons a:hover {
            border-radius: 40%;
            transform: scale(1.1);
            background-color: whitesmoke;
          }

          .fab.fa-whatsapp { color: #25D366; }
          .fab.fa-instagram { color: #C13584; }
          .fab.fa-facebook { color: #1877F2; }
          .fab.fa-twitter { color: #1DA1F2; }
          .fab.fa-tiktok { color: #69C9D0; }
          .fab.fa-snapchat-ghost { color: #FFFC00; }

          .socials {
            border-radius: 10px;
           
           
          }

          /* Medium devices (tablets, 768px and up) */
          @media (max-width: 768px) {
            .footer {
              padding: 15px 0;
            }

            .footer-content p {
              font-size: 0.9rem;
            }

            .footer a {
              margin: 0 8px;
            }

            .social-icons a {
              font-size: 30px; /* Reduced icon size for medium devices */
            }
          }

          /* Small devices (phones, 480px and up) */
          @media (max-width: 480px) {
            .footer {
             
            }

            .footer-content p {
              font-size: 0.8rem;
            }

            .footer a {
              display: block;
              margin: 5px 0;
            }

            .socials {
              flex-direction: column; /* Stack the heading and icons vertically */
            }

            .social-icons a {
              font-size: 25px; /* Further reduced icon size for small devices */
            }
          }
        `}
      </style>
      <div className="footer-content">
        <p>&copy; 2024 Artisan Fusion. All Rights Reserved.</p>
        <p>
          <a href="/privacy-policy">Privacy Policy</a> |{" "}
          <a href="/terms-of-service">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
