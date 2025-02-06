import React, { useState } from "react";
import "./RecyclingLocator.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faMapMarkerAlt, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function RecyclingLocator() {
  const [searchTerm, setSearchTerm] = useState(""); // State for search input

  // Dummy data for recycling centers
  const recyclingCenters = [
    {
      name: "Green Earth Recycling",
      address: "123 Eco Street, Greenville",
      distance: "2.5 km",
    },
    {
      name: "City Recycling Facility",
      address: "456 Recycle Avenue, Urbantown",
      distance: "5.0 km",
    },
    {
      name: "Eco Hub Recycling Center",
      address: "789 Green Lane, Forestville",
      distance: "8.3 km",
    },
  ];

  // Filter recycling centers based on search term
  const filteredCenters = recyclingCenters.filter((center) =>
    center.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    center.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="recycling-locator">
      <h2>Recycling Center Locator</h2>

      {/* Map Container */}
      <div className="map-container">
        {/* Placeholder for Google Maps integration */}
        <img
          src="/placeholder.svg"
          alt="Map of Recycling Centers"
          className="placeholder-map"
        />
        <div className="map-overlay">
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" /> Click on
            the map to find nearby recycling centers.
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for recycling centers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn-search">
          <FontAwesomeIcon icon={faSearch} className="icon" /> Search
        </button>
      </div>

      {/* Recycling Centers List */}
      <div className="recycling-centers">
        {filteredCenters.length > 0 ? (
          filteredCenters.map((center, index) => (
            <div key={index} className="center">
              <h3>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />{" "}
                {center.name}
              </h3>
              <p>{center.address}</p>
              <p>
                <strong>Distance:</strong> {center.distance}
              </p>
              <button className="btn-directions">
                Get Directions{" "}
                <FontAwesomeIcon icon={faArrowRight} className="icon" />
              </button>
            </div>
          ))
        ) : (
          <p>No recycling centers found matching your search.</p>
        )}
      </div>
    </div>
  );
}

export default RecyclingLocator;