import React, { useState } from "react";

function Fuels() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    setSearched(true);
    try {
      const response = await fetch(
        `https://ecobackend-kas3.onrender.com/api/fuel/${searchTerm}`
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
      <h1 className="text-3xl font-semibold mt-10 mb-4">
        SEARCH FOR CARBON EMMISION FROM FUELS
      </h1>
      <div className="flex mb-4">
        <input
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter Fuel name"
          className="px-9 py-4 border border-gray-300 rounded-l"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 rounded-r hover:bg-blue-600"
        >
          Search
        </button>
      </div>
      {!searched && <p className="text-gray-500">Enter Fuel name</p>}
      {loading && <p className="text-gray-500">Loading...</p>}
      {searchResult && (
        <div className="bg-gray-100 p-4 rounded">
          <h2 className="text-xl font-semibold mb-2">Search Results</h2>
          <p className="font-semibold">{searchTerm}</p>
          <ul>
            {searchResult.Petrol && (
              <>
                <li>Language Key: {searchResult.Petrol.langKey}</li>
                <li>Measured By: {searchResult.Petrol.measuredBy}</li>
                <li>CO2 Emission: {searchResult.Petrol.CO2Emission}</li>
                <li>CH4 Emission: {searchResult.Petrol.CH4Emission}</li>
                <li>N2O Emission: {searchResult.Petrol.N2OEmission}</li>
                <li>GHG Emission: {searchResult.Petrol.GHGEmission}</li>
              </>
            )}
          </ul>
        </div>
      )}
      {!searchResult && searched && !loading && (
        <div className="text-red-500">No results found</div>
      )}
    </div>
  );
}

export default Fuels;
