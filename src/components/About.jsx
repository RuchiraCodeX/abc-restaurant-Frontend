import React from "react";
import img from "../assets/img/about.png";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
      <img src={img} alt="img" />

      <div className=" space-y-4 lg:pt-14">
        <h1 className=" font-semibold text-4xl text-center md:text-start">
          Why Choose Us?
        </h1>
        <p>
        At ABC Restaurant, we are dedicated to providing an exceptional dining experience that goes beyond the ordinary. Our commitment to quality is reflected in every aspect of our service, from our meticulously crafted menu featuring fresh, locally sourced ingredients to our warm, inviting ambiance that makes every meal memorable. Our skilled chefs bring years of culinary expertise to each dish, ensuring that every bite is a celebration of flavor and creativity. We prioritize our guests' comfort and satisfaction, offering attentive service and a welcoming atmosphere where you can relax and enjoy your time. 
        </p>
        <p>
        Whether you're here for a casual lunch, a special celebration, or a cozy dinner with friends, ABC Restaurant is the perfect destination for unparalleled dining and hospitality. Choose us for an experience that will delight your taste buds and create lasting memories.
        </p>
        <div className=" flex justify-center lg:justify-start">
          
        </div>
      </div>
    </div>
  );
};

export default About;
