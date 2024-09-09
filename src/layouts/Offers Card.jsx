import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import Button from "../layouts/Button";

const DishesCard = ({ img, title, description, price, showButton }) => {
  return (
    <div 
      className="w-full lg:w-1/4 p-5 shadow-lg rounded-lg bg-white" 
      style={{ width: '30%' }} 
    >
      <img 
        className="rounded-t-lg w-full h-48 object-cover" 
        src={img} 
        alt={title} 
      />
      
      <div className="p-4 space-y-4">
        <h3 className="font-semibold text-center text-xl">{title}</h3>
        
        {description && (
          <p className="text-center text-gray-600">{description}</p>
        )}
        
        <div className="flex justify-center text-yellow-500">
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarHalf />
        </div>

        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg">{price}</h3>
         
        </div>
      </div>
    </div>
  );
};

export default DishesCard;
