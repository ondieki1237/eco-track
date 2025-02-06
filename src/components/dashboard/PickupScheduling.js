import React, { useState, useEffect } from 'react';
import "./PickupScheduling.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faClock, faTrash, faMapMarker, faLocationCrosshairs, faTimes } from '@fortawesome/free-solid-svg-icons';

function PickupScheduling() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [address, setAddress] = useState('');
  const [scheduledPickups, setScheduledPickups] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCurrentLocation = () => {
    setLoading(true);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const response = await fetch(
              `https://api.opencagedata.com/geocode/v1/json?q=${position.coords.latitude}+${position.coords.longitude}&key=YOUR_OPENCAGE_API_KEY`
            );
            const data = await response.json();
            if (data.results && data.results[0]) {
              setAddress(data.results[0].formatted);
            }
          } catch (error) {
            console.error("Error getting address:", error);
            alert("Could not fetch address from coordinates");
          } finally {
            setLoading(false);
          }
        },
        (error) => {
          console.error("Error getting location:", error);
          alert("Could not get current location");
          setLoading(false);
        }
      );
    } else {
      alert("Geolocation is not supported by your browser");
      setLoading(false);
    }
  };

  const handleSchedulePickup = () => {
    if (!selectedDate || !selectedTime || !selectedType || !address) {
      alert("Please fill in all fields");
      return;
    }

    const newPickup = {
      id: Date.now(),
      date: selectedDate,
      time: selectedTime,
      type: selectedType,
      address: address,
      status: "Scheduled"
    };

    setScheduledPickups([newPickup, ...scheduledPickups]);

    // Reset form
    setSelectedDate('');
    setSelectedTime('');
    setSelectedType('');
    setAddress('');
  };

  const cancelPickup = (id) => {
    if (window.confirm("Are you sure you want to cancel this pickup?")) {
      setScheduledPickups(scheduledPickups.filter(pickup => pickup.id !== id));
    }
  };

  const formatDate = (dateString) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const getTimeLabel = (timeValue) => {
    const timeMap = {
      'morning': 'Morning (8AM - 12PM)',
      'afternoon': 'Afternoon (12PM - 4PM)',
      'evening': 'Evening (4PM - 8PM)'
    };
    return timeMap[timeValue] || timeValue;
  };

  return (
    <div className="pickup-scheduling">
      <h2>Schedule a Pickup</h2>
      
      <div className="scheduling-container">
        <div className="scheduling-form">
          <div className="form-group-pick">
            <FontAwesomeIcon icon={faCalendar} className="form-icon" />
            <input 
              type="date" 
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="form-input"
              min={new Date().toISOString().split('T')[0]}
            />
          </div>

          <div className="form-group">
            <FontAwesomeIcon icon={faClock} className="form-icon" />
            <select 
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="form-input"
            >
              <option value="">Select Time</option>
              <option value="morning">Morning (8AM - 12PM)</option>
              <option value="afternoon">Afternoon (12PM - 4PM)</option>
              <option value="evening">Evening (4PM - 8PM)</option>
            </select>
          </div>

          <div className="form-group">
            <FontAwesomeIcon icon={faTrash} className="form-icon" />
            <select 
              className="form-input"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="">Waste Type</option>
              <option value="recyclables">Recyclables</option>
              <option value="electronics">Electronics</option>
              <option value="hazardous">Hazardous Waste</option>
            </select>
          </div>

          <div className="form-group address-group">
            <FontAwesomeIcon icon={faMapMarker} className="form-icon" />
            <input 
              type="text" 
              placeholder="Pickup Address"
              className="form-input"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <button 
              className="location-btn"
              onClick={getCurrentLocation}
              disabled={loading}
            >
              <FontAwesomeIcon icon={faLocationCrosshairs} />
            </button>
          </div>

          <button 
            className="btn btn-primary schedule-btn"
            onClick={handleSchedulePickup}
          >
            Schedule Pickup
          </button>
        </div>

        <div className="upcoming-pickups">
          <h3>Upcoming Pickups</h3>
          <div className="pickup-list">
            {scheduledPickups.length === 0 ? (
              <div className="no-pickups">No scheduled pickups</div>
            ) : (
              scheduledPickups.map(pickup => (
                <div key={pickup.id} className="pickup-item">
                  <button 
                    className="cancel-pickup"
                    onClick={() => cancelPickup(pickup.id)}
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                  <span className="pickup-date">{formatDate(pickup.date)}</span>
                  <span className="pickup-time">{getTimeLabel(pickup.time)}</span>
                  <span className="pickup-type">{pickup.type}</span>
                  <span className="pickup-address">{pickup.address}</span>
                  <span className="pickup-status">{pickup.status}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PickupScheduling;