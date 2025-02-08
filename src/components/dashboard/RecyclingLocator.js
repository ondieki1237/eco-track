import React, { useState, useEffect } from "react";
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
  const [searchTerm, setSearchTerm] = useState("");
  const [newBinName, setNewBinName] = useState("");
  const [newBinAddress, setNewBinAddress] = useState("");
  const [newBinLatitude, setNewBinLatitude] = useState("");
  const [newBinLongitude, setNewBinLongitude] = useState("");
  const [recyclingCenters, setRecyclingCenters] = useState([]);
  const [selectedType, setSelectedType] = useState("All");

  // Fetch recycling bins from the backend
  useEffect(() => {
    fetch("http://localhost:8001/recycle-bins/")
      .then((response) => response.json())
      .then((data) => setRecyclingCenters(data))
      .catch((error) => console.error("Error fetching bins:", error));
  }, []);

  // Handle adding a new bin
  const handleAddBin = async () => {
    if (!newBinName || !newBinAddress || !newBinLatitude || !newBinLongitude) {
      alert("Please fill in all fields.");
      return;
    }

    const formData = new URLSearchParams();
    formData.append("name", newBinName);
    formData.append("location", newBinAddress);
    formData.append("description", `Lat: ${newBinLatitude}, Long: ${newBinLongitude}`);

    try {
      const response = await fetch("http://localhost:8001/recycle-bin/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to add recycling bin.");
      }

      const result = await response.json();
      const addedBin = {
        id: result.bin.id,
        name: result.bin.name,
        address: result.bin.location,
        latitude: newBinLatitude,
        longitude: newBinLongitude,
      };

      setRecyclingCenters([...recyclingCenters, addedBin]);
      setNewBinName("");
      setNewBinAddress("");
      setNewBinLatitude("");
      setNewBinLongitude("");
    } catch (error) {
      console.error("Error adding bin:", error);
      alert("Failed to add bin. Please try again.");
    }
  };

  // Get current location
  const handleGetCurrentLocation = () => {
    if (navigator.geolocation) {
      // Show a pop-up message to the user
      alert("Please allow access to your location to use this feature.");

      // Request the user's location
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Success: Set latitude and longitude in the state
          setNewBinLatitude(position.coords.latitude);
          setNewBinLongitude(position.coords.longitude);
          alert("Location retrieved successfully!");
        },
        (error) => {
          // Error: Handle location access denial or failure
          console.error("Error getting location:", error);
          alert("Unable to access your location. Please enter coordinates manually.");
        }
      );
    } else {
      // Geolocation is not supported by the browser
      alert("Geolocation is not supported by your browser.");
    }
  };

  return (
    <div className="recycling-locator">
      <h2>
        <FontAwesomeIcon icon={faLeaf} className="icon" /> Recycling Center Locator
      </h2>

      <div className="search-bar">
        <input type="text" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </div>

      <div className="filters">
        <label>
          <FontAwesomeIcon icon={faFilter} className="icon" /> Filter by Type:
        </label>
        <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
          <option value="All">All</option>
          <option value="Plastic">Plastic</option>
          <option value="Paper">Paper</option>
          <option value="Glass">Glass</option>
        </select>
      </div>

      <div className="recycling-centers">
        {recyclingCenters.map((center, index) => (
          <div key={index} className="center">
            <h3><FontAwesomeIcon icon={faMapMarkerAlt} className="icon" /> {center.name}</h3>
            <p>{center.address}</p>
            <p><strong>Coordinates:</strong> ({center.latitude}, {center.longitude})</p>
          </div>
        ))}
      </div>

      <div className="add-bin-form">
        <h3><FontAwesomeIcon icon={faPlus} className="icon" /> Add a Recycling Bin</h3>
        <input type="text" placeholder="Bin name" value={newBinName} onChange={(e) => setNewBinName(e.target.value)} />
        <input type="text" placeholder="Address" value={newBinAddress} onChange={(e) => setNewBinAddress(e.target.value)} />
        <div>
          <input type="text" placeholder="Latitude" value={newBinLatitude} onChange={(e) => setNewBinLatitude(e.target.value)} />
          <input type="text" placeholder="Longitude" value={newBinLongitude} onChange={(e) => setNewBinLongitude(e.target.value)} />
          <button onClick={handleGetCurrentLocation}><FontAwesomeIcon icon={faLocationArrow} className="icon" /> Use My Location</button>
        </div>
        <button onClick={handleAddBin}><FontAwesomeIcon icon={faArrowRight} className="icon" /> Add Bin</button>
      </div>
    </div>
  );
}

export default RecyclingLocator;