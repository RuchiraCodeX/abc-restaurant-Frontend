import React, { useState, useEffect } from "react";
import axios from "axios";

const Facilities = () => {
  const [facilities, setFacilities] = useState([]);
  const [newFacility, setNewFacility] = useState({
    name: "",
    description: "",
    location: "",
    imageUrl: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [editingFacility, setEditingFacility] = useState(null);

  useEffect(() => {
    fetchFacilities();
  }, []);

  const fetchFacilities = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/facilities/all");
      setFacilities(response.data);
    } catch (error) {
      console.error("Error fetching facilities:", error);
    }
  };

  const handleAddFacility = async () => {
    try {
      await axios.post("http://localhost:8080/api/facilities/add", newFacility, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      fetchFacilities();
      setNewFacility({ name: "", description: "", location: "", imageUrl: "" });
      setShowModal(false);
    } catch (error) {
      console.error("Error adding facility:", error);
    }
  };

  const handleDeleteFacility = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/facilities/delete/${id}`);
      fetchFacilities();
    } catch (error) {
      console.error("Error deleting facility:", error);
    }
  };

  const handleEditFacility = (facility) => {
    setEditingFacility(facility);
    setNewFacility(facility);
    setShowModal(true);
  };

  const handleUpdateFacility = async () => {
    try {
      await axios.put(`http://localhost:8080/api/facilities/update/${editingFacility.id}`, newFacility, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      fetchFacilities();
      setEditingFacility(null);
      setNewFacility({ name: "", description: "", location: "", imageUrl: "" });
      setShowModal(false);
    } catch (error) {
      console.error("Error updating facility:", error);
    }
  };

  const handleChange = (e) => {
    setNewFacility({ ...newFacility, [e.target.name]: e.target.value });
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingFacility(null);
    setNewFacility({ name: "", description: "", location: "", imageUrl: "" });
  };

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-3xl font-bold mb-5">Facilities</h2>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={() => setShowModal(true)}
      >
        Add New Facility
      </button>

      <table className="min-w-full mt-5 border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Description</th>
            <th className="border px-4 py-2">Location</th>
            <th className="border px-4 py-2">Image</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {facilities.map((facility) => (
            <tr key={facility.id}>
              <td className="border px-4 py-2">{facility.name}</td>
              <td className="border px-4 py-2">{facility.description}</td>
              <td className="border px-4 py-2">{facility.location}</td>
              <td className="border px-4 py-2">
                <img
                  src={facility.imageUrl}
                  alt={facility.name}
                  className="w-24 h-16 object-cover"
                />
              </td>
              <td className="border px-4 py-2">
                <button
                  className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-700 mr-2"
                  onClick={() => handleEditFacility(facility)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                  onClick={() => handleDeleteFacility(facility.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    
      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
            <div className="p-5 border-b">
              <h3 className="text-xl font-semibold">
                {editingFacility ? "Edit Facility" : "Add New Facility"}
              </h3>
            </div>
            <div className="p-5">
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={newFacility.name}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded w-full"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows="3"
                    value={newFacility.description}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded w-full"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={newFacility.location}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded w-full"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imageUrl">
                    Image URL
                  </label>
                  <input
                    type="text"
                    id="imageUrl"
                    name="imageUrl"
                    value={newFacility.imageUrl}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded w-full"
                  />
                </div>
              </form>
            </div>
            <div className="p-5 border-t flex justify-end">
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 mr-2"
                onClick={handleCloseModal}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                onClick={editingFacility ? handleUpdateFacility : handleAddFacility}
              >
                {editingFacility ? "Update Facility" : "Add Facility"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Facilities;
