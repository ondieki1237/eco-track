import "./Navbar.css";

function Navbar({ onLoginClick, onSignupClick }) { // Add props for click handlers
  return (
    <header className="navbar">
      <div className="container">
        <a href="/" className="logo">
          EcoTrack
        </a>
        <nav>
          <a href="#features">Features</a>
          <a href="#technology">Technology</a>
          <a href="#about">About Us</a>
        </nav>
        <div className="nav-buttons">
          <a href="https://github.com/ondieki1237/eco-track.git" target="_blank" rel="noreferrer" className="github-link">
            <i className="fab fa-github"></i>
          </a>
          <button onClick={onLoginClick} className="btn btn-ghost">Log in</button> {/* Call onLoginClick */}
          <button onClick={onSignupClick} className="btn btn-primary">Sign Up</button> {/* Call onSignupClick */}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
