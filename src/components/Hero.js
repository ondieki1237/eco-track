import "./Hero.css"

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <h1>
          Track Your Impact
          <br />
          <span>Save The Planet</span>
        </h1>
        <p>
          EcoTrack empowers you to measure your carbon footprint, find recycling centers, and join eco-challenges. Take
          control of your environmental impact today.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary">
            Download Now
            <i className="fas fa-arrow-right"></i>
          </button>
          <button className="btn btn-outline">Learn More</button>
        </div>
      </div>
    </section>
  )
}

export default Hero

