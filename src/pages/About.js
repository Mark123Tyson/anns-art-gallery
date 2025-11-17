import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-heading">About Us</h1>
      <p className="about-description">
        Welcome to our art showcase! We connect creative artists with art enthusiasts worldwide, providing a platform for artistic expression.
      </p>

      {/* Mission Section */}
      <h2 className="about-subheading">Our Mission</h2>
      <p className="about-description">
        Empowering artists by offering a platform that bridges creativity and commerce.
      </p>

      {/* History Section */}
      <h2 className="about-subheading">Our History</h2>
      <p className="about-description">
        Since 2020, we've grown from a local showcase to a global platform, helping artists reach a wider audience.
      </p>

      {/* Values Section */}
      <div className="about-values">
        <h2 className="about-subheading">Our Values</h2>
        <ul className="about-list">
          <li className="about-list-item">Creativity</li>
          <li className="about-list-item">Quality</li>
          <li className="about-list-item">Community</li>
        </ul>
      </div>

      {/* Team Section */}
      <h2 className="about-subheading">Meet the Team</h2>
      <div className="team-container">
        <div className="team-member">
          <img src="anne-picture.jpeg" alt="Mark Tyson" className="team-photo" />
          <h3>Esther Anne W.</h3>
          <p>Founder & CEO</p>
        </div>
        <div className="team-member">
          <img src="mark-tyson.jpeg" alt="Jane Doe" className="team-photo" />
          <h3>Mark Tyson W.</h3>
          <p>Creative Director</p>
        </div>
      </div>

      <style>
        {`
          .about-container {
            padding: 40px;
             background-color: rgb(255, 255, 230);
            color: #343a40;
            text-align: center;
            border-radius: 59px;
            width: 90vw;
            height: auto;
            margin: 50px auto;
          }

          .about-heading {
            font-size: 36px;
            color: #61dafb;
            margin-bottom: 20px;
          }

          .about-description {
            font-size: 18px;
            line-height: 1.6;
            color: #495057;
            margin-bottom: 30px;
            width: 70%;
            margin: 0 auto;
          }

          .about-subheading {
            font-size: 28px;
            color: #495057;
            margin-bottom: 20px;
          }

          .about-values {
            margin-top: 10px;
          }

          .about-list {
            list-style-type: none;
            padding: 0;
          }

          .about-list-item {
            font-size: 20px;
            color: grey;
            padding: 10px 0;
            transition: color 0.3s, background-color 0.3s;
          }

          .team-container {
            display: flex;
            justify-content: center;
            gap: 60px;
            margin-top: 20px;
          }

          .team-member {
            text-align: center;
            color: #343a40;
          }

          .team-photo {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            object-fit: cover;
            margin-bottom: 10px;
          }

          /* Media Queries */
          @media (max-width: 768px) {
            .about-heading {
              font-size: 30px;
            }

            .about-description {
              font-size: 16px;
              width: 90%;
            }

            .about-subheading {
              font-size: 24px;
            }

            .team-container {
              flex-direction: column;
              gap: 40px;
            }

            .team-photo {
              width: 120px;
              height: 120px;
            }
          }

          @media (max-width: 480px) {
            .about-heading {
              font-size: 24px;
            }

            .about-description {
              font-size: 14px;
              width: 100%;
            }

            .about-subheading {
              font-size: 20px;
            }

            .team-photo {
              width: 80px;
              height: 80px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default About;
