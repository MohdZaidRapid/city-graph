import React, { useEffect, useState } from "react";
import axios from "axios";
import CityDetails from "./CityDetails";
import SearchCity from "./SearchCity";
import useSearch from "../hooks/useSearch.js";

const TableData = () => {
  const [city, setCities] = useState();
  const [query, setQuery] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await axios.get(
  //           "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=100"
  //         );
  //         console.log(response.data.results);
  //         setCities(response.data.results);
  //       } catch (error) {
  //         console.error("Error fetching data:", error);
  //       }
  //     };

  //     fetchData();
  //   }, []);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    setPageNumber(1);
  };
  return (
    <div>
      <input type="text" onChange={handleSearch}></input>
      {/* <SearchCity /> */}
      {/* <CityDetails cityData={city} /> */}
    </div>
  );
};

export default TableData;
