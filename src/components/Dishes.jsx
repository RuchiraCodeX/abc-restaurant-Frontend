import React, { useEffect, useState } from "react";
import DishesCard from "../layouts/DishesCard";


const API_URL = "http://localhost:8080/api/dishes/all";

const Dishes = () => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setDishes(data); 
      } catch (error) {
        console.error("Error fetching dishes:", error);
      }
    };

    fetchDishes();
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center pt-24 pb-10">Our Dishes</h1>
      
      <div className="flex flex-wrap gap-8 justify-center">
        {dishes.map(({ imageUrl, name, price, description, id }) => (
          <DishesCard 
            key={id} 
            img={imageUrl} 
            title={name} 
            price={`RS.${price}`} 
            description={description} 
          />
        ))}
      </div>
    </div>
  );
};

export default Dishes;
