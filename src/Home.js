import React from "react";
import "./Home.css";
import PhoneImage from "./omwphone.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faAndroid } from '@fortawesome/free-brands-svg-icons';


function Home() {
  return (
    <div className="home-container">
      <div className="home-text">
        <h1 className="home-title">Welcome to On My Way</h1>
        <p className="home-content">
          On My Way is a convenient app that connects individuals who are
          traveling with those in need of package delivery services. Whether
          you're heading to work, running errands, or going on a trip, you can
          earn extra money by picking up and dropping off packages along your
          route. Simply sign up, browse available delivery requests, choose the
          ones that suit your journey, and earn on-the-go. Senders can post
          their package details, and drivers can communicate with them for
          smooth coordination. Make package delivery a part of your daily
          routine with On My Way.
        </p>
        <div className="download-buttons">
          <button className="download-button">
            <FontAwesomeIcon icon={faApple} className="icon" /> Download for iOS
          </button>
          <button className="download-button">
            <FontAwesomeIcon icon={faAndroid} className="icon" /> Download for Android
          </button>
        </div>
      </div>
      <div className="home-image">
        <img src={PhoneImage} alt="Phone" />
      </div>
    </div>
  );
}

export default Home;
