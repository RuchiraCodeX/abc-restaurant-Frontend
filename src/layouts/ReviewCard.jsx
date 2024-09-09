import React from "react";

const ReviewCard = ({ review }) => {
  return (
    <div className="w-full md:w-1/3 bg-white border-2 border-lightText md:border-none p-5 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
      <div>
        <p className="text-lightText">
          {review.text}
        </p>
      </div>

      <div className="flex flex-row justify-center items-center mt-4 gap-4">
        <img className="rounded-full w-1/4" src={review.img} alt="Reviewer" />
        <h3 className="font-semibold">{review.name}</h3>
      </div>
    </div>
  );
};

export default ReviewCard;
