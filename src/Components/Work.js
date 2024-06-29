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
      link : <a href="https://www.google.com/maps/place/Tannirbhavi+Beach,+Kasba+Bengre,+Mangaluru,+575010/data=!4m2!3m1!1s0x3ba35a91911885a9:0x6a42103fb75e4e93?sa=X&ved=1t:242&ictx=111">Tannirbhavi Beach, Mangalore-575010</a>,
      text: "This sizable sandy beach accessed by bridge or ferry offers a tranquil environment & lifeguards.",
    },
    {
      image: Chapel,
      title: "Church",
      link : <a href="https://www.google.com/maps/place/Milagres+Church/@12.8674406,74.84189,17z/data=!3m2!4b1!5s0x3ba35a4c85211515:0x2689a02778618cfb!4m6!3m5!1s0x3ba35a4b7d2c5673:0x112b0a5f996fa04d!8m2!3d12.8674354!4d74.8444649!16s%2Fg%2F12qfkd6l5?entry=ttu">Milagris Church, Mangalore-575001</a>,
      text: "Come become holy with us",
    },
    {
      image: Beachwalk,
      title: "Beach Walk",
      link : <a href="https://www.google.com/maps?s=web&sca_esv=3db7ca3a4cd8d2e9&lqi=ChBtYWxwZSBiZWFjaCB3YWxrSLmWmJqFuoCACFoYEAIYABgCIhBtYWxwZSBiZWFjaCB3YWxrkgESdG91cmlzdF9hdHRyYWN0aW9umgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU5hTjBzdFJFNVJFQUWqAUIQASoIIgR3YWxrKAAyHhABIhpLjN5hAGmYA7Fn4aLVz3WRdI_XardXeajRWzIUEAIiEG1hbHBlIGJlYWNoIHdhbGs&phdesc=wd_-WyhTT2k&vet=12ahUKEwiy_smVr4CHAxVtzDgGHeU2DhkQ1YkKegQIHhAB..i&cs=0&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KXuD9dLEu7w7MSYmQpL3QczU&daddr=8MXW%2B53J,+Malpe,+Karnataka">MalpeBeach, Mangalore-575001</a>,
      text: "enjoy the sea shore with your friends and family",
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
            <p>{data.link}</p>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
