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
        `http://localhost:4000/api/per-capita-emissions/${searchTerm}`
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
    <div className="container flex justify-center flex-col items-center  mx-auto my-8">
      <h1 className="text-3xl mt-10 font-semibold mb-4">
        SEARCH FOR CARBON EMMISION FROM PERCAPITA
      </h1>
      <div className="flex mb-4">
        <input
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter country"
          className="px-9 py-4 border border-gray-300 rounded-8 "
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 ml-2 text-white px-4 rounded-r hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </div>
      {!searched && <p className="text-gray-500">Enter country name</p>}
      {loading && <p className="text-gray-500">Loading...</p>}
      {searchResult && (
        <div className="bg-gray-100 w-[600px] grid-cols-2 p-4 rounded">
          <h2 className="text-xl font-semibold mb-2">Search Results</h2>
          <p className="font-semibold">{searchResult.Country}</p>
          <ul>
            {Object.entries(searchResult)
              .filter(([key, value]) => key !== "Country")
              .map(([key, value]) => (
                <li key={key}>
                  {key}: {value}
                </li>
              ))}
          </ul>
        </div>
      )}
      {!searchResult && searched && !loading && (
        <div className="text-red-500">No results found</div>
      )}
    </div>
  );
}

export default Percapita;
