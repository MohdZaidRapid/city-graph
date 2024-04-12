import React, { useState, useEffect } from "react";
import SearchCity from "./SearchCity";
import axios from "axios";

const CityDetails = ({ cityData }) => {
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);
  const [searchCity, setSearchCity] = useState("");
  const [countryName, setCountryName] = useState("");

  let debounceTimer: any;

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("asc");
    }
  };

  const sortedCityData = sortBy
    ? [...cityData].sort((a, b) => {
        console.log("sortBY", sortBy);
        console.log("sort by a", a[sortBy]);
        console.log("sort by b", b[sortBy]);
        const valueA = a[sortBy];
        const valueB = b[sortBy];

        if (typeof valueA === "string" && typeof valueB === "string") {
          return valueA.localeCompare(valueB) * (sortOrder === "asc" ? 1 : -1);
        } else {
          return (valueA - valueB) * (sortOrder === "asc" ? 1 : -1);
        }
      })
    : cityData;

  useEffect(() => {
    let debounceTimer;
    // Clear the previous timer
    clearTimeout(debounceTimer);
    // Set a new timer
    debounceTimer = setTimeout(() => {
      fetchData();
    }, 3000); // Adjust the debounce delay here (3000ms in this example)

    // Cleanup function to clear timer on component unmount
    return () => clearTimeout(debounceTimer);
  }, [countryName]);

  const handleSearchCity = (e: any) => {
    const value = e.target.value;
    console.log(value);
    setCountryName(value);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=20&refine=cou_name_en%3A${countryName}`
      );
      console.log(response.data.results);
      setSearchCity(response.data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Debounce function to delay search execution
  // let debounceTimer: any;
  // const debounceSearch = (value) => {
  //   clearTimeout(debounceTimer);
  //   debounceTimer = setTimeout(() => {
  //     setSearchTerm(value);
  //   }, 300); // Adjust debounce delay as needed
  // };

  // Event handler for search input change
  // const handleSearchChange = (event) => {
  //   const value = event.target.value;
  //   debounceSearch(value);
  // };

  return (
    <div>
      <div>
        <h2 className="text-center font-bold text-3xl border border-gray-300 px-4 py-2">
          City Details
        </h2>
        <input
          type="text"
          placeholder="Search city"
          value={countryName}
          onChange={(e) => handleSearchCity(e)}
          className=" w-full"
        />
      </div>

      <table>
        <thead>
          <tr>
            <th
              className="border border-gray-300 px-4 py-2 cursor-pointer"
              onClick={() => handleSort("geoname_id")}
            >
              geoname_id
            </th>
            <th
              className="border border-gray-300 px-4 py-2 cursor-pointer"
              onClick={() => handleSort("name")}
            >
              Name
            </th>
            <th
              className="border border-gray-300 px-4 py-2 cursor-pointer"
              onClick={() => handleSort("ascii_name")}
            >
              ASCII Name
            </th>
            <th
              className="border border-gray-300 px-4 py-2 cursor-pointer"
              onClick={() => handleSort("feature_class")}
            >
              Feature Class
            </th>
            <th
              className="border border-gray-300 px-4 py-2 cursor-pointer"
              onClick={() => handleSort("timezone")}
            >
              Timezone
            </th>
            <th
              className="border border-gray-300 px-4 py-2 cursor-pointer"
              onClick={() => handleSort("label_en")}
            >
              Label
            </th>
            <th
              className="border border-gray-300 px-4 py-2 cursor-pointer"
              onClick={() => handleSort("alternate_names")}
            >
              Alternate Names
            </th>
            <th
              className="border border-gray-300 px-4 py-2 cursor-pointer"
              onClick={() => handleSort("population")}
            >
              Population
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedCityData?.map((city, index) => (
            <tr
              key={city.geoname_id}
              className={index % 2 === 0 ? "bg-gray-100" : ""}
            >
              <td className="border border-gray-300 px-4 py-2">
                {city.geoname_id}
              </td>
              <td className="border border-gray-300 px-4 py-2">{city.name}</td>
              <td className="border border-gray-300 px-4 py-2">
                {city.ascii_name}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {city.feature_class}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {city.timezone}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {city.label_en}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {city.alternate_names
                  ? city.alternate_names.slice(0, 3).join(", ")
                  : ""}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {city.population}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CityDetails;
