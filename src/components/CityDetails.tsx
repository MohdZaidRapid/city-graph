import React from "react";

const CityDetails = ({ cityData }) => {
  console.log("cityData", cityData);
  return (
    <div>
      <h2>City Details</h2>
      <table>
        <thead>
          <tr>
            <th>geoname_id</th>
            <th>Name</th>
            <th>ASCII Name</th>
            <th>Feature Class</th>
            {/* Add more headers for other properties */}
          </tr>
        </thead>
        <tbody>
          {cityData?.map((city: any) => (
            <tr key={city.geoname_id}>
              <td>{city.geoname_id}</td>
              <td>{city.name}</td>
              <td>{city.ascii_name}</td>
              <td>{city.feature_class}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CityDetails;
