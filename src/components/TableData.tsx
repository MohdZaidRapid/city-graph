// import { useEffect, useState } from "react";
// import axios from "axios";
// import CityDetails from "./CityDetails";
// import SearchCity from "./SearchCity";
// import { useSearch } from "../hooks/useSearch.js";

// const TableData = () => {
//   const [city, setCities] = useState([]);
//   const [page, setPage] = useState(25);
//   const [limit, setLimit] = useState(25);
//   // const [allDataLoaded, setAllDataLoaded] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [allDataLoaded, setAllDataLoaded] = useState(false);

//   useEffect(() => {
//     // const fetchData = async () => {
//     //   try {
//     //     const response = await axios.get(
//     //       `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=${limit}&offset=${
//     //         page * limit
//     //       }`
//     //     );
//     //     console.log(response.data.results);
//     //     setCities((prev) => [...prev, ...response.data.results]);
//     //   } catch (error) {
//     //     console.error("Error fetching data:", error);
//     //   }
//     // };
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=${limit}&offset=${page}`
//         );
//         console.log(response.data.results);
//         setCities((prevCities) => [...prevCities, ...response.data.results]);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
//     if (!allDataLoaded) {
//       fetchData();
//     }
//   }, [page]);

//   const handleInfiniteScroll = async () => {
//     try {
//       if (
//         !loading &&
//         !allDataLoaded &&
//         window.innerHeight + document.documentElement.scrollTop + 1 >=
//           document.documentElement.scrollHeight
//       ) {
//         setPage((prev) => prev + 1);
//       }
//     } catch (error) {
//       console.error("Error handling infinite scroll:", error);
//     }
//   };

//   // const handleInfiniteScroll = async () => {
//   //   console.log("scrollHeight" + document.documentElement.scrollHeight);
//   //   console.log("innerHeight" + document.documentElement.scrollHeight);
//   //   console.log("scrollTop" + document.documentElement.scrollTop);

//   //   try {
//   //     if (
//   //       window.innerHeight + document.documentElement.scrollTop + 1 >=
//   //       document.documentElement.scrollHeight
//   //     ) {
//   //       setPage((prev) => prev + 1);
//   //     }
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };

//   // const fetchData = async () => {
//   //   try {
//   //     setLoading(true); // Set loading state to true when fetching data
//   //     const response = await axios.get(
//   //       `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=${limit}&offset=${page}`
//   //     );
//   //     console.log(response.data.results);

//   //     if (response.data.results.length === 0) {
//   //       setAllDataLoaded(true);
//   //     } else {
//   //       setCities((prevCities) => [...prevCities, ...response.data.results]);
//   //     }
//   //   } catch (error) {
//   //     console.error("Error fetching data:", error);
//   //   } finally {
//   //     setLoading(false); // Set loading state to false when data fetching is complete
//   //   }
//   // };

//   useEffect(() => {
//     window.addEventListener("scroll", handleInfiniteScroll);
//     return () => window.removeEventListener("scroll", handleInfiniteScroll);
//   }, [loading, allDataLoaded]);

//   // useEffect(() => {
//   //   window.addEventListener("scroll", handleInfiniteScroll);
//   //   return () => window.removeEventListener("scroll", handleInfiniteScroll);
//   // }, []);
//   // useSearch();
//   // const handleSearch = (e) => {
//   //   // setQuery(e.target.value);
//   //   // setPageNumber(1);
//   // };
//   return (
//     <div>
//       {/* <SearchCity /> */}
//       <CityDetails cityData={city} />
//     </div>
//   );
// };

// export default TableData;

// import { useEffect, useState } from "react";
// import axios from "axios";
// import CityDetails from "./CityDetails";
// import SearchCity from "./SearchCity";
// import { useSearch } from "../hooks/useSearch.js";

// const TableData = () => {
//   const [city, setCities] = useState([]);
//   const [page, setPage] = useState(1); // Start from page 1
//   const [limit, setLimit] = useState(25);
//   const [loading, setLoading] = useState(false);
//   const [allDataLoaded, setAllDataLoaded] = useState(false);

//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get(
//         `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=${limit}&offset=${
//           page * limit
//         }`
//       );
//       console.log(response.data.results);
//       if (response.data.results.length === 0) {
//         setAllDataLoaded(true);
//       } else {
//         setCities((prevCities) => [...prevCities, ...response.data.results]);
//         setPage((prevPage) => prevPage + 1); // Increment page for next fetch
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleInfiniteScroll = () => {
//     if (
//       !loading &&
//       !allDataLoaded &&
//       window.innerHeight + document.documentElement.scrollTop + 1 >=
//         document.documentElement.scrollHeight
//     ) {
//       fetchData();
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleInfiniteScroll);
//     return () => window.removeEventListener("scroll", handleInfiniteScroll);
//   }, [loading, allDataLoaded]); // Add loading and allDataLoaded as dependencies

//   useEffect(() => {
//     fetchData(); // Initial data fetch
//   }, []); // Empty dependency array to trigger only once on component mount

//   return (
//     <div>
//       <CityDetails cityData={city} />
//     </div>
//   );
// };

// export default TableData;

// import { useEffect, useState } from "react";
// import axios from "axios";
// import CityDetails from "./CityDetails";

// const TableData = () => {
//   const [city, setCities] = useState([]);
//   const [page, setPage] = useState(1);
//   const [limit, setLimit] = useState(25);
//   const [loading, setLoading] = useState(false);
//   const [allDataLoaded, setAllDataLoaded] = useState(false);

//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get(
//         `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=${limit}&offset=${
//           (page - 1) * limit
//         }`
//       );
//       console.log(response.data.results);
//       if (response.data.results.length === 0) {
//         setAllDataLoaded(true);
//       } else {
//         setCities((prevCities) => [...prevCities, ...response.data.results]);
//         setPage((prevPage) => prevPage + 1);
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleInfiniteScroll = () => {
//     if (
//       !loading &&
//       !allDataLoaded &&
//       window.innerHeight + document.documentElement.scrollTop + 1 >=
//         document.documentElement.scrollHeight
//     ) {
//       fetchData();
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleInfiniteScroll);
//     return () => window.removeEventListener("scroll", handleInfiniteScroll);
//   }, [loading, allDataLoaded]);

//   useEffect(() => {
//     if (!allDataLoaded) {
//       fetchData();
//     }
//   }, [allDataLoaded]);

//   return (
//     <div>
//       <CityDetails cityData={city} />
//     </div>
//   );
// };

// export default TableData;

// import { useEffect, useState } from "react";
// import axios from "axios";
// import CityDetails from "./CityDetails";

// const TableData = () => {
//   const [city, setCities] = useState([]);
//   const [page, setPage] = useState(1);
//   const [limit, setLimit] = useState(25);
//   const [loading, setLoading] = useState(false);
//   const [allDataLoaded, setAllDataLoaded] = useState(false);

//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get(
//         `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=${limit}&offset=${
//           (page - 1) * limit
//         }`
//       );
//       console.log(response.data.results);
//       if (response.data.results.length === 0) {
//         setAllDataLoaded(true);
//       } else {
//         setCities((prevCities) => [...prevCities, ...response.data.results]);
//         setPage((prevPage) => prevPage + 1);
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleInfiniteScroll = () => {
//     if (
//       !loading &&
//       !allDataLoaded &&
//       window.innerHeight + document.documentElement.scrollTop + 1 >=
//         document.documentElement.scrollHeight
//     ) {
//       fetchData();
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleInfiniteScroll);
//     return () => window.removeEventListener("scroll", handleInfiniteScroll);
//   }, [loading, allDataLoaded]);

//   return (
//     <div>
//       <CityDetails cityData={city} />
//     </div>
//   );
// };

// export default TableData;

// import { useEffect, useState } from "react";
// import axios from "axios";
// import CityDetails from "./CityDetails";

// const TableData = () => {
//   const [city, setCities] = useState([]);
//   const [page, setPage] = useState(1);
//   const [limit, setLimit] = useState(25);
//   const [loading, setLoading] = useState(false);
//   const [allDataLoaded, setAllDataLoaded] = useState(false);
//   const [isFetching, setIsFetching] = useState(false); // New state variable

//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get(
//         `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=${limit}&offset=${
//           (page - 1) * limit
//         }`
//       );
//       console.log(response.data.results);
//       if (response.data.results.length === 0) {
//         setAllDataLoaded(true);
//       } else {
//         setCities((prevCities) => [...prevCities, ...response.data.results]);
//         setPage((prevPage) => prevPage + 1);
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     } finally {
//       setLoading(false);
//       setIsFetching(false); // Set isFetching to false after data is fetched
//     }
//   };

//   const handleInfiniteScroll = () => {
//     if (
//       !loading &&
//       !allDataLoaded &&
//       !isFetching &&
//       window.innerHeight + document.documentElement.scrollTop + 1 >=
//         document.documentElement.scrollHeight
//     ) {
//       setIsFetching(true); // Set isFetching to true before fetching data
//       fetchData();
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleInfiniteScroll);
//     return () => window.removeEventListener("scroll", handleInfiniteScroll);
//   }, [loading, allDataLoaded, isFetching]);

//   return (
//     <div>
//       <CityDetails cityData={city} />
//     </div>
//   );
// };

// export default TableData;
