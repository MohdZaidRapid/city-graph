import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchCity = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [countryName, setCountryName] = useState("");

  useEffect(() => {
    fetchData();
  }, [countryName]);

  // Function to fetch data from the API
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=100&refine=cou_name_en%3A${countryName}`
      );
      setSearchResults(response.data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Debounce function to delay search execution
  let debounceTimer;
  const debounceSearch = (value) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      setSearchTerm(value);
    }, 300); // Adjust debounce delay as needed
  };

  // Event handler for search input change
  const handleSearchChange = (event) => {
    const value = event.target.value;
    debounceSearch(value);
  };

  return (
    <div>
      <h2>City Search</h2>
      <input
        type="text"
        placeholder="Search city first Letter should be capital"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchCity;
