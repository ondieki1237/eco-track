import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator, faMapMarkerAlt, faRecycle, faUsers, faChartBar, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import "./Features.css";

const features = [
  {
    name: "Carbon Footprint Calculator",
    description: "Track your daily activities and calculate your carbon footprint with precision.",
    icon: faCalculator, // Now directly use the imported icon object
  },
  {
    name: "Recycling Center Locator",
    description: "Find the nearest recycling centers, e-waste drop-off locations, and composting facilities.",
    icon: faMapMarkerAlt, // Now directly use the imported icon object
  },
  {
    name: "Pickup Scheduling",
    description: "Schedule pickups for recyclables, electronics, and more with local waste management services.",
    icon: faRecycle, // Now directly use the imported icon object
  },
  {
    name: "Community Challenges",
    description: "Join eco-challenges, earn badges, and compete with friends to reduce your environmental impact.",
    icon: faUsers, // Now directly use the imported icon object
  },
];

function Features() {
  return (
    <section id="features" className="features">
      <div className="container">
        <h2>Powerful Features</h2>
        <p className="section-description">
          Discover how EcoTrack helps you make a positive impact on the environment.
        </p>
        <div className="feature-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <FontAwesomeIcon icon={feature.icon} size="2x" /> {/* Pass the icon object directly */}
              <h3>{feature.name}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;