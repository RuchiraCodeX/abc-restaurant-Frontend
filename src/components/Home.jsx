import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/los.jpg')] bg-cover bg-no-repeat">
     
      <div className="w-full lg:w-2/3 space-y-5 bg-black bg-opacity-30 p-5 rounded-lg">
        <h1 className="font-playfair text-white font-semibold text-4xl lg:text-6xl">
          "Discover Flavors that Inspire Every Moment"
        </h1>
        <p className="font-lora text-white text-lg lg:text-xl">
          "ABC Restaurant" is a renowned restaurant chain operating across various cities in Sri Lanka. The management aims to expand operations and enhance customer interaction by embracing technological advancements.
        </p>
        <div className="lg:pl-44">
        
        </div>
      </div>
    </div>
  );
};

export default Home;
