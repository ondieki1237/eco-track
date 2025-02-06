import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h2>EcoTrack</h2>
            <p>Empowering individuals to make sustainable choices.</p>
          </div>
          <div className="footer-links">
            <div className="footer-section">
              <h3>App</h3>
              <ul>
                <li>
                  <a href="#features">Features</a>
                </li>
                <li>
                  <a href="#technology">Technology</a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Company</h3>
              <ul>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#blog">Blog</a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Connect</h3>
              <div className="social-links">
                <a href="https://github.com/ecotrack" target="_blank" rel="noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://twitter.com/ecotrack" target="_blank" rel="noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://linkedin.com/company/ecotrack" target="_blank" rel="noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} EcoTrack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

