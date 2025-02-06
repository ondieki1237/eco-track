import React, { useState } from 'react';
// import { BrowserRouter } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Technology from "./components/Technology";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import MouseMoveEffect from "./components/MouseMoveEffect";
import Dashboard from "./components/Homepage";
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
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

  return (
    <div className="App">
      <div className="background-gradients">
        <div className="gradient-top"></div>
        <div className="gradient-bottom"></div>
      </div>
      <MouseMoveEffect />
      <Navbar 
        onLoginClick={() => setShowLogin(true)}
        onSignupClick={() => setShowSignup(true)}
      />
      {!isLoggedIn && !showLogin && !showSignup && (
        <>
          <Hero />
          <Features />
          <Technology />
          <CTA />
        </>
      )}
      {showLogin && <LoginForm onLogin={handleLogin} />}
      {showSignup && <SignupForm onSignup={handleSignup} />}
      {isLoggedIn && <Dashboard />}
      <Footer />
    </div>
  );
}

export default App;