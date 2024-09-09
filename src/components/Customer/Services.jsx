import React, { useState, useEffect } from "react";
import axios from "axios";

const Services = () => {
  const [services, setServices] = useState([]);
  const [category, setCategory] = useState("");
  const [newService, setNewService] = useState({ name: "", category: "", description: "" });

  useEffect(() => {
    fetchAllServices();
  }, []);

  const fetchAllServices = async () => {
    try {
      const response = await axios.get("/api/services/all");
      setServices(response.data);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  const fetchServicesByCategory = async (category) => {
    try {
      const response = await axios.get(`/api/services/category/${category}`);
      setServices(response.data);
    } catch (error) {
      console.error("Error fetching services by category:", error);
    }
  };

  const handleAddService = async () => {
    try {
      await axios.post("/api/services/add", newService, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      fetchAllServices();
      setNewService({ name: "", category: "", description: "" });
    } catch (error) {
      console.error("Error adding service:", error);
    }
  };

  
  return (
    <div className="container mx-auto p-5">
      <h2 className="text-3xl font-bold mb-5">Find Services</h2>

      <div className="mb-5">
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Enter category"
          className="border border-gray-300 p-2 rounded-lg mr-2"
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
          onClick={() => fetchServicesByCategory(category)}
        >
          Filter by Category
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {services.map((service) => (
          <div key={service.id} className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-xl font-semibold">{service.name}</h3>
            <p className="text-gray-600">{service.category}</p>
            <p className="text-gray-800 mt-2">{service.description}</p>
            <img src={service.imageUrl} alt={service.name} className="w-full h-40 object-cover mt-2" />
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
