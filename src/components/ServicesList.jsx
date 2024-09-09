import React, { useState, useEffect } from "react";
import axios from "axios";

const ServicesList = () => {
  const [services, setServices] = useState([]);

  
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

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-3xl font-bold mb-5">All Services</h2>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {services.map((service) => (
          <div key={service.id} className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-xl font-semibold">{service.name}</h3>
            <p className="text-gray-600">{service.category}</p>
            <p className="text-gray-800 mt-2">{service.description}</p>
    
            {service.imageUrl && (
              <img
                src={service.imageUrl}
                alt={service.name}
                className="w-full h-40 object-cover mt-2"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesList;
