import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faServer, faDatabase, faCode } from '@fortawesome/free-solid-svg-icons'; // Import specific icons
import "./Technology.css";

const techStack = [
  {
    name: "Frontend",
    description: "Built with React Native and Expo for cross-platform mobile development.",
    icon: faMobileAlt, // Use imported icon object
  },
  {
    name: "Backend",
    description: "Powered by FastAPI for efficient API development and Uvicorn for ASGI server.",
    icon: faServer, // Use imported icon object
  },
  {
    name: "Database",
    description: "MongoDB for flexible and scalable data storage, hosted on MongoDB Atlas.",
    icon: faDatabase, // Use imported icon object
  },
  {
    name: "APIs & Services",
    description: "Integrates Google Maps API, Climatiq API, and Expo SecureStore for enhanced functionality.",
    icon: faCode, // Use imported icon object
  },
];

function Technology() {
  return (
    <section id="technology" className="technology">
      <div className="container">
        <h2>Cutting-Edge Technology</h2>
        <p className="section-description">EcoTrack is built using modern, efficient, and scalable technologies.</p>
        <div className="tech-grid">
          {techStack.map((tech, index) => (
            <div key={index} className="tech-card">
              <FontAwesomeIcon icon={tech.icon} size="2x" /> {/* Use FontAwesomeIcon */}
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Technology;