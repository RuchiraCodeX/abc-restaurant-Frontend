import React, { useState, useEffect } from "react";
import axios from "axios";

const Offers = () => {
  const [offers, setOffers] = useState([]);
  const [newOffer, setNewOffer] = useState({
    title: "",
    description: "",
    discountPercentage: "",
    validFrom: "",
    validUntil: "",
    imageUrl: "",
  });

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/offers/all");
        setOffers(response.data);
      } catch (error) {
        console.error("Error fetching offers:", error);
      }
    };

    fetchOffers();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewOffer((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddOffer = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/offers/add", newOffer);
      setOffers((prevOffers) => [...prevOffers, response.data]);
      setNewOffer({
        title: "",
        description: "",
        discountPercentage: "",
        validFrom: "",
        validUntil: "",
        imageUrl: "",
      });
    } catch (error) {
      console.error("Error adding offer:", error);
    }
  };

  const handleDeleteOffer = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/offers/delete/${id}`);
      setOffers((prevOffers) => prevOffers.filter((offer) => offer.id !== id));
    } catch (error) {
      console.error("Error deleting offer:", error);
    }
  };

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-3xl font-bold mb-5">Offers</h2>

      
      <div className="bg-white p-5 rounded-lg shadow-md mb-5">
        <h3 className="text-xl font-semibold mb-3">Add New Offer</h3>
        <div className="mb-4">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={newOffer.title}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-lg w-full mb-2"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={newOffer.description}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-lg w-full mb-2"
          />
          <input
            type="number"
            name="discountPercentage"
            placeholder="Discount Percentage"
            value={newOffer.discountPercentage}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-lg w-full mb-2"
          />
          <input
            type="date"
            name="validFrom"
            placeholder="Valid From"
            value={newOffer.validFrom}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-lg w-full mb-2"
          />
          <input
            type="date"
            name="validUntil"
            placeholder="Valid Until"
            value={newOffer.validUntil}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-lg w-full mb-2"
          />
          <input
            type="text"
            name="imageUrl"
            placeholder="Image URL"
            value={newOffer.imageUrl}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-lg w-full mb-2"
          />
          <button
            type="button"
            onClick={handleAddOffer}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add Offer
          </button>
        </div>
      </div>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {offers.length > 0 ? (
          offers.map((offer) => (
            <div key={offer.id} className="bg-white p-4 rounded-lg shadow-lg relative">
              <h3 className="text-xl font-semibold mb-2">Offer ID: {offer.id}</h3>
              <p className="text-lg font-bold">{offer.title}</p>
              <p>{offer.description}</p>
              <p className="text-green-600 font-bold">Discount: {offer.discountPercentage}%</p>
              <p className="text-red-600">Valid From: {new Date(offer.validFrom).toLocaleDateString()}</p>
              <p className="text-red-600">Valid Until: {new Date(offer.validUntil).toLocaleDateString()}</p>
              {offer.imageUrl && <img src={offer.imageUrl} alt="Offer" className="mt-2 rounded" />}
              <button
                type="button"
                onClick={() => handleDeleteOffer(offer.id)}
                className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No offers available</p>
        )}
      </div>
    </div>
  );
};

export default Offers;
