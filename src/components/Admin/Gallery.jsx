import React, { useState, useEffect } from "react";
import axios from "axios";

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [newGalleryItem, setNewGalleryItem] = useState({
    title: "",
    description: "",
    imageUrl: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [editingGalleryItem, setEditingGalleryItem] = useState(null);

  useEffect(() => {
    fetchGalleryItems();
  }, []);

  const fetchGalleryItems = async () => {
    try {
      const response = await axios.get("http://localhost:8080/gallery/all");
      
      if (Array.isArray(response.data)) {
        setGalleryItems(response.data);
      } else {
        setGalleryItems([]); 
      }
    } catch (error) {
      console.error("Error fetching gallery items:", error);
      setGalleryItems([]); 
    }
  };

  const handleAddGalleryItem = async () => {
    try {
      await axios.post("http://localhost:8080/gallery/add", newGalleryItem, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      fetchGalleryItems();
      setNewGalleryItem({ title: "", description: "", imageUrl: "" });
      setShowModal(false);
    } catch (error) {
      console.error("Error adding gallery item:", error);
    }
  };

  const handleDeleteGalleryItem = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/gallery/delete/${id}`);
      fetchGalleryItems();
    } catch (error) {
      console.error("Error deleting gallery item:", error);
    }
  };

  const handleEditGalleryItem = (item) => {
    setEditingGalleryItem(item);
    setNewGalleryItem(item);
    setShowModal(true);
  };

  const handleUpdateGalleryItem = async () => {
    try {
      await axios.put(
        `http://localhost:8080/gallery/update/${editingGalleryItem.id}`,
        newGalleryItem,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      fetchGalleryItems();
      setEditingGalleryItem(null);
      setNewGalleryItem({ title: "", description: "", imageUrl: "" });
      setShowModal(false);
    } catch (error) {
      console.error("Error updating gallery item:", error);
    }
  };

  const handleChange = (e) => {
    setNewGalleryItem({ ...newGalleryItem, [e.target.name]: e.target.value });
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingGalleryItem(null);
    setNewGalleryItem({ title: "", description: "", imageUrl: "" });
  };

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-3xl font-bold mb-5">Gallery</h2>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
        onClick={() => setShowModal(true)}
      >
        Add New Gallery Item
      </button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {Array.isArray(galleryItems) && galleryItems.length > 0 ? (
          galleryItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md p-4">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-48 object-cover rounded"
              />
              <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
              <div className="flex mt-4 space-x-2">
                <button
                  className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition duration-300"
                  onClick={() => handleEditGalleryItem(item)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
                  onClick={() => handleDeleteGalleryItem(item.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No gallery items available.</p>
        )}
      </div>

    
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
            <div className="p-5 border-b">
              <h3 className="text-xl font-semibold">
                {editingGalleryItem ? "Edit Gallery Item" : "Add New Gallery Item"}
              </h3>
            </div>
            <div className="p-5">
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={newGalleryItem.title}
                    onChange={handleChange}
                    className="border border-gray-300 p-3 rounded-lg w-full"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="description"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows="3"
                    value={newGalleryItem.description}
                    onChange={handleChange}
                    className="border border-gray-300 p-3 rounded-lg w-full"
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
                    value={newGalleryItem.imageUrl}
                    onChange={handleChange}
                    className="border border-gray-300 p-3 rounded-lg w-full"
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
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                onClick={editingGalleryItem ? handleUpdateGalleryItem : handleAddGalleryItem}
              >
                {editingGalleryItem ? "Update Item" : "Add Item"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
