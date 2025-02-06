import "./SustainabilityTips.css"

function SustainabilityTips() {
  const tips = [
    { id: 1, text: "Switch to public transport to save 2.5 kg of CO2 per day", status: "new" },
    { id: 2, text: "Use a reusable water bottle to reduce plastic waste", status: "in-progress" },
    { id: 3, text: "Turn off lights when leaving a room to save energy", status: "completed" },
  ]

  return (
    <div className="sustainability-tips">
      <h2>Personalized Sustainability Tips</h2>
      <ul className="tips-list">
        {tips.map((tip) => (
          <li key={tip.id} className={`tip ${tip.status}`}>
            <p>{tip.text}</p>
            <div className="tip-actions">
              <button className="btn-mark-complete">Mark Complete</button>
              <button className="btn-mark-progress">Mark In Progress</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SustainabilityTips

