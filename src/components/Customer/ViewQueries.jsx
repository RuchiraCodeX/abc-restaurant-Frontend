import React, { useState, useEffect } from "react";
import axios from "axios";

const ViewQueries = () => {
  const [queries, setQueries] = useState([]);

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
        {queries.length > 0 ? (
          queries.map(query => (
            <div key={query.id} className="bg-white p-4 rounded-lg shadow-lg">
              <p><strong>Query Text: </strong> {query.queryText}</p>
              <p><strong>ResponseText: </strong>{query.responseText}</p>
            </div>
          ))
        ) : (
          <p>No queries available.</p>
        )}
      </div>
    </div>
  );
};

export default ViewQueries;
