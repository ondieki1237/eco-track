import "./CTA.css";

function CTA() {
  return (
    <section className="cta">
      <div className="container">
        <h2 className="cta-title">Track Your Impact <br /> Save The Planet</h2>
        <p className="cta-text">
          EcoTrack empowers you to measure your carbon footprint, find recycling centers, and join eco-challenges. 
          Take control of your environmental impact today.
        </p>
        <div className="cta-buttons">
          <button className="btn btn-primary">Download Now →</button>
          <button className="btn btn-secondary">Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default CTA;
