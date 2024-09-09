import React, { useState } from "react";
import axios from "axios";

const RespondToQuery = ({ queryId }) => {
  const [responseText, setResponseText] = useState("");

  const handleResponseSubmit = async () => {
    if (!queryId || !responseText) {
      alert("Please enter a response.");
      return;
    }

    try {
      await axios.put(
        `http://localhost:8080/queries/respond/${queryId}`,
        responseText,
        {
          headers: {
            'Content-Type': 'text/plain', 
          },
        }
      );
      alert("Response submitted successfully!");
    } catch (error) {
      console.error("Error responding to query:", error);
      alert("Error responding to query. Check console for details.");
    }
  };

  return (
    <div className="mt-5 p-5 border border-gray-300 rounded-md bg-white">
      <h3 className="text-xl font-semibold mb-4">Respond to Query ID: {queryId}</h3>
      <div className="mb-4">
        <label htmlFor="responseText" className="block text-lg font-medium mb-2">Response</label>
        <textarea
          id="responseText"
          value={responseText}
          onChange={(e) => setResponseText(e.target.value)}
          rows="4"
          className="border border-gray-300 rounded-md p-2 w-full"
        />
      </div>
      <button
        onClick={handleResponseSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Submit Response
      </button>
    </div>
  );
};

export default RespondToQuery;
