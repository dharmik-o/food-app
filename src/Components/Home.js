import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/black_tigerdance.png";
import Navbar from "./Navbar";
import { FiArrowDown } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          Explore hidden gems of <b>Mangaluru</b> with us.
          </h1>
          <p className="primary-text">
            Where pristine beaches meet cultural heritage and modern vibrance.
          </p>
          <button className="secondary-button">
            Scroll Down <FiArrowDown />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
