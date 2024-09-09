import React from "react";
import ReviewCard from "../layouts/ReviewCard";


const reviews = [
  {
    text: "I had an amazing experience at ABC Restaurant. The ambiance was cozy and inviting, making it perfect for a casual dinner. The service was impeccable—our waiter was attentive without being overbearing. The food was the highlight, especially the grilled salmon, which was cooked to perfection. I also loved the dessert menu; the chocolate lava cake was divine. Highly recommend for anyone looking for a great meal and a relaxing atmosphere!",
    img: "pic1",
    name: "Emily Johnson"
  },
  {
    text: "The food at ABC Restaurant was excellent, with a variety of options that cater to different tastes. I particularly enjoyed the pasta primavera and the fresh breadsticks that came with the meal. The only downside was the wait time, as it took a bit longer than expected to get a table, but it was worth it. The staff were friendly and knowledgeable about the menu. I’ll definitely be coming back to try more dishes!",
    img: "pic2",
    name: "Michael Smith"
  },
  {
    text: "I recently dined at ABC Restaurant and was thoroughly impressed. The atmosphere was elegant yet comfortable, and the service was top-notch. I had the steak and it was cooked exactly how I like it—juicy and flavorful. The side dishes were equally impressive, especially the garlic mashed potatoes. The staff went out of their way to accommodate my dietary restrictions, which I greatly appreciated. A fantastic dining experience overall!",
    img: "pic3",
    name: "Sophia Brown"
  }
];

const ReviewsList = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {reviews.map((review, index) => (
        <ReviewCard key={index} review={review} />
      ))}
    </div>
  );
};

export default ReviewsList;
