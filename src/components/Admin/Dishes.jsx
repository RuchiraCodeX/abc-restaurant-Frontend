import React, { useState, useEffect } from "react";
import axios from "axios";

const Dishes = () => {
  const [dishes, setDishes] = useState([]);
  const [newDish, setNewDish] = useState({
    name: "",
    description: "",
    price: "",
    restaurantName: "",
    imageUrl: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [editingDish, setEditingDish] = useState(null);

  useEffect(() => {
    fetchDishes();
  }, []);

  const fetchDishes = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/dishes/all");
      setDishes(response.data);
    } catch (error) {
      console.error("Error fetching dishes:", error);
    }
  };

  const handleAddDish = async () => {
    try {
      await axios.post("http://localhost:8080/api/dishes/add", newDish, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      fetchDishes();
      setNewDish({ name: "", description: "", price: "", restaurantName: "", imageUrl: "" });
      setShowModal(false);
    } catch (error) {
      console.error("Error adding dish:", error);
    }
  };

  const handleDeleteDish = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/dishes/delete/${id}`);
      fetchDishes();
    } catch (error) {
      console.error("Error deleting dish:", error);
    }
  };

  const handleEditDish = (dish) => {
    setEditingDish(dish);
    setNewDish(dish);
    setShowModal(true);
  };

  const handleUpdateDish = async () => {
    try {
      await axios.put(`http://localhost:8080/api/dishes/update/${editingDish.id}`, newDish, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      fetchDishes();
      setEditingDish(null);
      setNewDish({ name: "", description: "", price: "", restaurantName: "", imageUrl: "" });
      setShowModal(false);
    } catch (error) {
      console.error("Error updating dish:", error);
    }
  };

  const handleChange = (e) => {
    setNewDish({ ...newDish, [e.target.name]: e.target.value });
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingDish(null);
    setNewDish({ name: "", description: "", price: "", restaurantName: "", imageUrl: "" });
  };

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-3xl font-bold mb-5">Dishes</h2>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={() => setShowModal(true)}
      >
        Add New Dish
      </button>

      <table className="min-w-full mt-5 border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Description</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">Restaurant</th>
            <th className="border px-4 py-2">Image</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {dishes.map((dish) => (
            <tr key={dish.id}>
              <td className="border px-4 py-2">{dish.name}</td>
              <td className="border px-4 py-2">{dish.description}</td>
              <td className="border px-4 py-2">Rs.{dish.price}</td>
              <td className="border px-4 py-2">{dish.restaurantName}</td>
              <td className="border px-4 py-2">
                <img
                  src={dish.imageUrl}
                  alt={dish.name}
                  className="w-24 h-16 object-cover"
                />
              </td>
              <td className="border px-4 py-2 flex space-x-2">
                <button
                  className="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  onClick={() => handleEditDish(dish)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                  onClick={() => handleDeleteDish(dish.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

     
      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-96">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-semibold">{editingDish ? "Edit Dish" : "Add New Dish"}</h3>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={handleCloseModal}
              >
                &times;
              </button>
            </div>
            <div className="p-4">
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={newDish.name}
                    onChange={handleChange}
                    className="border border-gray-300 rounded w-full px-3 py-2"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                    Description
                  </label>
                  <textarea
                    rows="3"
                    name="description"
                    value={newDish.description}
                    onChange={handleChange}
                    className="border border-gray-300 rounded w-full px-3 py-2"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                    Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={newDish.price}
                    onChange={handleChange}
                    className="border border-gray-300 rounded w-full px-3 py-2"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="restaurantName">
                    Restaurant Name
                  </label>
                  <input
                    type="text"
                    name="restaurantName"
                    value={newDish.restaurantName}
                    onChange={handleChange}
                    className="border border-gray-300 rounded w-full px-3 py-2"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imageUrl">
                    Image URL
                  </label>
                  <input
                    type="text"
                    name="imageUrl"
                    value={newDish.imageUrl}
                    onChange={handleChange}
                    className="border border-gray-300 rounded w-full px-3 py-2"
                  />
                </div>
              </form>
            </div>
            <div className="p-4 border-t border-gray-200 flex justify-end">
              <button
                className="bg-gray-300 text-gray-800 py-2 px-4 rounded mr-2 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
                onClick={handleCloseModal}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={editingDish ? handleUpdateDish : handleAddDish}
              >
                {editingDish ? "Update Dish" : "Add Dish"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dishes;
