import React, { useState } from "react";
import "./RecyclingLocator.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faMapMarkerAlt,
  faArrowRight,
  faPlus,
  faFilter,
  faInfoCircle,
  faLeaf,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";

function RecyclingLocator() {
  const [searchTerm, setSearchTerm] = useState(""); // State for search input
  const [newBinName, setNewBinName] = useState(""); // State for adding new bins
  const [newBinAddress, setNewBinAddress] = useState("");
  const [newBinLatitude, setNewBinLatitude] = useState(""); // Latitude for new bin
  const [newBinLongitude, setNewBinLongitude] = useState(""); // Longitude for new bin
  const [recyclingCenters, setRecyclingCenters] = useState([
    {
      name: "Green Earth Recycling",
      address: "123 Eco Street, Greenville",
      distance: "2.5 km",
      type: "Plastic",
      latitude: 37.7749,
      longitude: -122.4194,
    },
    {
      name: "City Recycling Facility",
      address: "456 Recycle Avenue, Urbantown",
      distance: "5.0 km",
      type: "Paper",
      latitude: 37.7749,
      longitude: -122.4194,
    },
    {
      name: "Eco Hub Recycling Center",
      address: "789 Green Lane, Forestville",
      distance: "8.3 km",
      type: "Glass",
      latitude: 37.7749,
      longitude: -122.4194,
    },
  ]);
  const [selectedType, setSelectedType] = useState("All"); // State for filtering

  // Filter recycling centers based on search term and selected type
  const filteredCenters = recyclingCenters.filter((center) => {
    const matchesSearch =
      center.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      center.address.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "All" || center.type === "Custom" || center.type === selectedType;
    return matchesSearch && matchesType;
  });

  // Handle adding a new recycling bin
  const handleAddBin = () => {
    if (newBinName.trim() && newBinAddress.trim() && newBinLatitude && newBinLongitude) {
      setRecyclingCenters([
        ...recyclingCenters,
        {
          name: newBinName,
          address: newBinAddress,
          distance: "N/A",
          type: "Custom",
          latitude: parseFloat(newBinLatitude),
          longitude: parseFloat(newBinLongitude),
        },
      ]);
      setNewBinName("");
      setNewBinAddress("");
      setNewBinLatitude("");
      setNewBinLongitude("");
    }
  };

  // Get user's current location
  const handleGetCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setNewBinLatitude(position.coords.latitude);
          setNewBinLongitude(position.coords.longitude);
        },
        (error) => {
          console.error("Error getting location:", error.message);
          alert("Unable to access your location. Please enter coordinates manually.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  return (
    <div className="recycling-locator">
      <h2>
        <FontAwesomeIcon icon={faLeaf} className="icon" /> Recycling Center Locator
      </h2>

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

      {/* Filters */}
      <div className="filters">
        <label>
          <FontAwesomeIcon icon={faFilter} className="icon" /> Filter by Type:
        </label>
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="filter-select"
        >
          <option value="All">All</option>
          <option value="Plastic">Plastic</option>
          <option value="Paper">Paper</option>
          <option value="Glass">Glass</option>
          <option value="Custom">Custom</option>
        </select>
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
              <p>
                <strong>Type:</strong> {center.type}
              </p>
              <p>
                <strong>Coordinates:</strong> ({center.latitude}, {center.longitude})
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

      {/* Add Recycling Bin Form */}
      <div className="add-bin-form">
        <h3>
          <FontAwesomeIcon icon={faPlus} className="icon" /> Add a Recycling Bin
        </h3>
        <input
          type="text"
          placeholder="Enter bin name..."
          value={newBinName}
          onChange={(e) => setNewBinName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter bin address..."
          value={newBinAddress}
          onChange={(e) => setNewBinAddress(e.target.value)}
        />
        <div className="location-inputs">
          <input
            type="text"
            placeholder="Latitude (optional)"
            value={newBinLatitude}
            onChange={(e) => setNewBinLatitude(e.target.value)}
          />
          <input
            type="text"
            placeholder="Longitude (optional)"
            value={newBinLongitude}
            onChange={(e) => setNewBinLongitude(e.target.value)}
          />
          <button onClick={handleGetCurrentLocation} className="btn-get-location">
            <FontAwesomeIcon icon={faLocationArrow} className="icon" /> Use My Location
          </button>
        </div>
        <button onClick={handleAddBin} className="btn-add-bin">
          Add Bin <FontAwesomeIcon icon={faArrowRight} className="icon" />
        </button>
      </div>

      {/* Learn More Section */}
      <div className="learn-more">
        <h3>
          <FontAwesomeIcon icon={faInfoCircle} className="icon" /> Learn More
        </h3>
        <p>
          Recycling is essential for reducing waste and protecting the
          environment. Find out how you can contribute to a greener future!
        </p>
        <a href="#" className="btn-learn-more">
          Learn More <FontAwesomeIcon icon={faArrowRight} className="icon" />
        </a>
      </div>
    </div>
  );
}

export default RecyclingLocator;