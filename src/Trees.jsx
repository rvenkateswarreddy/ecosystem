import React, { useState } from "react";

function Percapita() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleSearch = async () => {
    try {
      setLoading(true);
      setSearched(true);
      const response = await fetch(
        `https://ecobackend-kas3.onrender.com/api/trees/${searchTerm}`
      );
      if (response.ok) {
        const data = await response.json();
        setSearchResult(data);
      } else {
        setSearchResult(null);
      }
    } catch (error) {
      console.error("Error fetching data:", error.message);
      setSearchResult(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container flex justify-center flex-col items-center mx-auto my-8">
      <h1 className="text-3xl mt-10 font-semibold mb-4">
        SEARCH FOR CARBON EMMISSION FROM TREES
      </h1>
      <div className="flex mb-4">
        <input
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter tree name"
          className="px-9 py-4 border border-gray-300 rounded-l"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 rounded-r hover:bg-blue-600"
        >
          Search
        </button>
      </div>
      {loading && <p className="text-gray-500">Loading...</p>}
      {searchResult && (
        <div className="bg-gray-100 p-4 rounded">
          <h2 className="text-xl font-semibold mb-2">Search Results</h2>
          <ul>
            {Object.entries(searchResult).map(([key, value]) => (
              <li key={key}>
                {key}: {value}
              </li>
            ))}
          </ul>
        </div>
      )}
      {!searchResult && searched && (
        <div className="text-red-500">No results found</div>
      )}
    </div>
  );
}

export default Percapita;
