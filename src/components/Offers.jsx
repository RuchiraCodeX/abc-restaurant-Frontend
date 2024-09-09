import React, { useEffect, useState } from "react";
import DishesCard from "../layouts/Offers Card";


const API_URL = "http://localhost:8080/api/offers/all";

const Menu = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setOffers(data);
      } catch (error) {
        console.error("Error fetching offers:", error);
      }
    };

    fetchOffers();
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10">
        Promotions & Offers
      </h1>

      <div className="flex flex-wrap gap-8 justify-center">
        {offers.map(({ id, title, description, discountPercentage, validFrom, validUntil, imageUrl }) => (
          <DishesCard 
            key={id} 
            img={imageUrl} 
            title={title} 
            description={`Discount: ${discountPercentage}%\nValid from: ${new Date(validFrom).toLocaleDateString()} to ${new Date(validUntil).toLocaleDateString()}`} 
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
