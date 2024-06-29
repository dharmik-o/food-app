import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";
import Beachwalk from "../Assets/beachWalk.jpeg";
import Clocktower from "../Assets/clockTower.jpeg";
import Chapel from "../Assets/milagrisChurch.jpeg";
import Tanirbavi from "../Assets/tanirbavo.jpeg";



const Work = () => {
  const workInfoData = [
    {
      image: Tanirbavi,
      title: "Beach",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      image: Chapel,
      title: "Church",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      image: Beachwalk,
      title: "Beach Walk",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        {/* <p className="primary-subheading">Work</p> */}
        <h1 className="primary-heading">Places to Visit</h1>
        <p className="primary-text">
        "Welcome to Mangalore, a vibrant coastal city where pristine beaches, rich cultural heritage, and warm hospitality come together to offer an unforgettable experience. Explore, enjoy, and make memories!"
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info " key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
