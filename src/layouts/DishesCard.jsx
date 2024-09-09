import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import Button from "../layouts/Button";

const DishesCard = (props) => {
  return (
    <div className="w-full lg:w-1/4 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg">
      <img className="rounded-xl w-full h-48 object-cover" src={props.img} alt={props.title} />
      
      <div className="space-y-4 mt-4">
        <h3 className="font-semibold text-center text-xl">{props.title}</h3>
        
       
        {props.description && (
          <p className="text-center text-gray-600 px-2">{props.description}</p>
        )}
        
        <div className="flex flex-row justify-center">
          <BsStarFill className="text-brightColor" />
          <BsStarFill className="text-brightColor" />
          <BsStarFill className="text-brightColor" />
          <BsStarFill className="text-brightColor" />
          <BsStarHalf className="text-brightColor" />
        </div>

        <div className="flex flex-row items-center justify-center gap-4">
          <h3 className="font-semibold text-lg">{props.price}</h3>
         
        </div>
      </div>
    </div>
  );
};

export default DishesCard;
