import React from 'react';

const Contacts = () => {

  return (
    <div className="contacts-container">
      <style>
        {`
        .contacts-container {
          max-width: 1000px;
          margin: 50px auto;
          text-align: center;
        }

        .contact-form {
          background-color: rgb(150, 190, 200);
          padding: 20px;
          border-radius: 15px;
          margin: 20px auto;
          width: 70%;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .form-group {
          margin-bottom: 15px;
        }

        .send {
          width: 30%;
          margin: 0 auto;
          text-align: center;
        }


        .contact-area {
          margin-top: 60px;
          background-color: rgb(255, 255, 250);
          display: flex;
          justify-content: center;
          position: relative;
          font-size: 25px;
          border-radius: 15px;
        }

        .question {
          font-weight: bold;
          padding:10px;
        }

        /* Media Queries */
        @media (max-width: 1200px) {
          .contact-form {
            width: 80%; /* Adjust for medium-sized devices */
          }
        }

        @media (max-width: 992px) {
          .contact-form {
            width: 90%; /* Further adjustment for smaller screens */
          }
        }

        @media (max-width: 768px) {
          .contact-form {
            width: 100%; /* Full width for tablets */
            padding: 15px;
          }

          .send {
            width: 50%; /* Adjust button size for tablets */
          }
        }

        @media (max-width: 576px) {
          .contact-form {
            width: 100%;
            padding: 10px; /* Less padding for mobile */
          }

          .send {
            width: 70%; /* Larger button on smaller screens */
          }

          .form-group {
            margin-bottom: 10px; /* Reduce margin between form groups on mobile */
          }
        }
        `}
      </style>
      
      <div className='contact-area'>
        <h2 className='question'>
          Have a question? Well, you can text us in the form below:
        </h2>
      </div>
      <div className="contact-form">
        <h2>Get in Touch</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" className="form-control" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" className="form-control" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" className="form-control" rows="5" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary send">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
