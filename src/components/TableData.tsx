import React, { useEffect, useState } from "react";
import axios from "axios";
import CityDetails from "./CityDetails";
import SearchCity from "./SearchCity";

const TableData = () => {
  const [city, setCities] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=100"
        );
        console.log(response.data.results);
        setCities(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      {/* <SearchCity /> */}
      <CityDetails cityData={city} />
    </div>
  );
};

export default TableData;
