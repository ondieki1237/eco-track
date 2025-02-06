import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import {
  faLeaf,
  faRecycle,
  faTruck,
  faBook,
  faChartLine,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Technology from "./components/Technology";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import MouseMoveEffect from "./components/MouseMoveEffect";
import Dashboard from "./components/Homepage";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import CarbonFootprint from "./components/dashboard/CarbonFootprint";
import RecyclingLocator from "./components/dashboard/RecyclingLocator";
import PickupScheduling from "./components/dashboard/PickupScheduling";
import EducationalContent from "./components/dashboard/EducationalContent";
import ProgressTracking from "./components/dashboard/ProgressTracking";
import CommunityChallenges from "./components/dashboard/CommunityChallenges";

import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLogin(false);
  };

  const handleSignup = () => {
    setShowSignup(false);
  };

  const features = [
    {
      icon: faLeaf,
      title: "Carbon Footprint",
      description: "Monitor your daily impact",
      link: "/carbon-footprint",
    },
    {
      icon: faRecycle,
      title: "Recycling Locator",
      description: "Find nearby recycling centers",
      link: "/recycling-locator",
    },
    {
      icon: faTruck,
      title: "Pickup Scheduling",
      description: "Schedule your next pickup",
      link: "/pickup-scheduling",
    },
    {
      icon: faBook,
      title: "Educational Content",
      description: "Learn about sustainability",
      link: "/educational-content",
    },
    {
      icon: faChartLine,
      title: "Progress Tracking",
      description: "View your eco-friendly progress",
      link: "/progress-tracking",
    },
    {
      icon: faTrophy,
      title: "Community Challenges",
      description: "Join eco-challenges",
      link: "/community-challenges",
    },
  ];

  return (
    <div className="App">
      <div className="background-gradients">
        <div className="gradient-top"></div>
        <div className="gradient-bottom"></div>
      </div>
      <MouseMoveEffect />

      <Navbar 
        onLoginClick={() => { setShowLogin(true); setShowSignup(false); }}
        onSignupClick={() => { setShowSignup(true); setShowLogin(false); }}
      />

      {showLogin && <LoginForm onLogin={handleLogin} />}
      {showSignup && <SignupForm onSignup={handleSignup} />}

      <Routes>
        <Route
          path="/"
          element={
            !isLoggedIn && !showLogin && !showSignup ? (
              <>
                <Hero />
                <Features />
                <Technology />
                <CTA />
                <div className="feature-list">
                  {features.map((feature, index) => (
                    <div key={index} className="feature-card">
                      <div className="icon">
                        <i className={feature.icon}></i>
                      </div>
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                      <Link to={feature.link} target="_blank" rel="noopener noreferrer">
                        Learn More
                      </Link>
                    </div>
                  ))}
                </div>
              </>
            ) : isLoggedIn ? (
              <Dashboard />
            ) : null
          }
        />

        {isLoggedIn && (
          <>
            <Route path="/carbon-footprint" element={<CarbonFootprint />} />
            <Route path="/recycling-locator" element={<RecyclingLocator />} />
            <Route path="/pickup-scheduling" element={<PickupScheduling />} />
            <Route path="/educational-content" element={<EducationalContent />} />
            <Route path="/progress-tracking" element={<ProgressTracking />} />
            <Route path="/community-challenges" element={<CommunityChallenges />} />
          </>
        )}
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
