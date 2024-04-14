import axios from "axios";
import React, { useEffect, useState } from "react";

const useSearch = (query, pageNumber) => {
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=100",
      params: { limit: q, offset: pageNumber },
    }).then((res) => {
      console.log(res.data);
    });
  }, [query, pageNumber]);
  return <div>useSearch</div>;
};

export default useSearch;
