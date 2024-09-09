import React, { useState, useEffect } from "react";
import axios from "axios";
import RespondToQuery from "./RespondToQuery"; 

const Queries = () => {
  const [queries, setQueries] = useState([]);
  const [selectedQueryId, setSelectedQueryId] = useState(null);

  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const response = await axios.get("http://localhost:8080/queries/all");
        setQueries(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error("Error fetching queries:", error);
        setQueries([]); 
      }
    };

    fetchQueries();
  }, []);

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-3xl font-bold mb-5">Queries</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.isArray(queries) && queries.length > 0 ? (
          queries.map(query => (
            <div key={query.id} className="bg-white p-4 rounded-lg shadow-lg">
              <h4 className="text-lg font-semibold mb-2">Query ID: {query.id}</h4>
              <p><strong>Username:</strong> {query.userId}</p>
              <p><strong>Query Text:</strong> {query.queryText}</p>
              <p><strong>Status:</strong> {query.status}</p>
              <p><strong>Created At:</strong> {new Date(query.createdAt).toLocaleString()}</p>
              <p><strong>Updated At:</strong> {new Date(query.updatedAt).toLocaleString()}</p>
              <button
                onClick={() => setSelectedQueryId(query.id)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mt-2"
              >
                Respond to Query
              </button>
            </div>
          ))
        ) : (
          <p>No queries available</p>
        )}
      </div>
      {selectedQueryId && <RespondToQuery queryId={selectedQueryId} />}
    </div>
  );
};

export default Queries;
