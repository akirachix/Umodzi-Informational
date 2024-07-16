import React from "react";
import "./index.css";

const About = () => {
  return (
  <div className="info">
      <h3 className="about">ABOUT US</h3>

      <div className="line">
        <hr></hr>
      </div>

      <div className="container">
        <div className="teamtext">
          <h1 className="aboutus">Who are we?</h1>
          <p>
            As a team of developers, we strive to provide innovative solutions
            to everyday problems. At GanzaPay, we are dedicated to redefining
            the way money transactions are done. Our focus is on creating a more
            valuable experience that takes into consideration the unique needs
            of every user. Our user-friendly website is designed to enhance
            navigation and ensure seamless interaction with the app. We are
            committed to simplifying the user experience of our mobile apps
            through the use of visual cues.
          </p>
        </div>

        <div className="missions">
          <h1 className="aboutus">Mission</h1>
          <p        >
            Our Mission is to become the most reliable partner for promoting
            access to mobile money for all
          </p>
        </div>
      </div>
      </div>
  );
};

export default About;
