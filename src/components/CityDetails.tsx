import React, { useState } from "react";

const CityDetails = ({ cityData }) => {
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);

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
        const valueA = a[sortBy];
        const valueB = b[sortBy];

        if (typeof valueA === "string" && typeof valueB === "string") {
          return valueA.localeCompare(valueB) * (sortOrder === "asc" ? 1 : -1);
        } else {
          return (valueA - valueB) * (sortOrder === "asc" ? 1 : -1);
        }
      })
    : cityData;

  return (
    <div>
      <h2 className="text-center font-bold text-3xl border border-gray-300 px-4 py-2">
        City Details
      </h2>
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
