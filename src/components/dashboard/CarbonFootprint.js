import "./CarbonFootprint.css"

function CarbonFootprint() {
  return (
    <div className="carbon-footprint">
      <h2>Carbon Footprint</h2>
      <div className="carbon-score">
        <span className="score">7.2</span>
        <span className="unit">tons CO2e/year</span>
      </div>
      <div className="carbon-progress">
        <div className="progress-bar">
          <div className="progress" style={{ width: "72%" }}></div>
        </div>
        <p>You've reduced your footprint by 15% this month!</p>
      </div>
      <div className="carbon-chart">
        {/* Placeholder for chart */}
        <img src="/placeholder.svg" alt="Carbon Footprint Chart" />
      </div>
    </div>
  )
}
export default CarbonFootprint
