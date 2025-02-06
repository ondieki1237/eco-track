"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLeaf, faCar, faUtensils, faTrash, faMedal, faChartLine } from "@fortawesome/free-solid-svg-icons"
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts"
import "./CarbonFootprint.css"

const CarbonFootprint = () => {
  const [footprint, setFootprint] = useState({
    energy: 0,
    transport: 0,
    diet: 0,
    waste: 0,
  })

  const [totalEmissions, setTotalEmissions] = useState(0)
  const [offsetAmount, setOffsetAmount] = useState(0)
  const [userPoints, setUserPoints] = useState(0)

  useEffect(() => {
    const total = Object.values(footprint).reduce((sum, value) => sum + value, 0)
    setTotalEmissions(total)
  }, [footprint])

  const handleInputChange = (category, value) => {
    setFootprint((prev) => ({ ...prev, [category]: Number.parseFloat(value) || 0 }))
  }

  const handleOffsetChange = (amount) => {
    setOffsetAmount(amount)
    // Award points for offsetting
    setUserPoints((prev) => prev + amount * 10)
  }

  const data = Object.entries(footprint).map(([key, value]) => ({
    name: key.charAt(0).toUpperCase() + key.slice(1),
    value: value,
  }))

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

  const recommendations = [
    { text: "Switch to LED bulbs", icon: faLeaf },
    { text: "Use public transportation", icon: faCar },
    { text: "Eat more plant-based meals", icon: faUtensils },
    { text: "Start composting", icon: faTrash },
  ]

  return (
    <div className="carbon-footprint-page">
      <h1>Carbon Footprint Calculator</h1>

      <div className="calculator-section">
        <h2>Calculate Your Footprint</h2>
        <div className="input-group">
          <label>
            Energy Consumption (kWh):
            <input
              type="number"
              value={footprint.energy}
              onChange={(e) => handleInputChange("energy", e.target.value)}
            />
          </label>
        </div>
        <div className="input-group">
          <label>
            Transportation (km):
            <input
              type="number"
              value={footprint.transport}
              onChange={(e) => handleInputChange("transport", e.target.value)}
            />
          </label>
        </div>
        <div className="input-group">
          <label>
            Diet (1-10, 10 being most meat-heavy):
            <input
              type="range"
              min="1"
              max="10"
              value={footprint.diet}
              onChange={(e) => handleInputChange("diet", e.target.value)}
            />
          </label>
        </div>
        <div className="input-group">
          <label>
            Waste (kg):
            <input type="number" value={footprint.waste} onChange={(e) => handleInputChange("waste", e.target.value)} />
          </label>
        </div>
      </div>

      <div className="results-section">
        <h2>Your Carbon Footprint</h2>
        <p>Total Emissions: {totalEmissions.toFixed(2)} tons CO2e</p>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={data} cx="50%" cy="50%" labelLine={false} outerRadius={80} fill="#8884d8" dataKey="value">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="offset-section">
        <h2>Offset Your Emissions</h2>
        <p>Current Offset: {offsetAmount} tons CO2e</p>
        <button onClick={() => handleOffsetChange(offsetAmount + 1)}>Offset 1 ton CO2e</button>
      </div>

      <div className="education-section">
        <h2>Understanding Your Carbon Footprint</h2>
        <p>
          Your carbon footprint is the total amount of greenhouse gases produced to directly and indirectly support your
          activities, usually expressed in equivalent tons of carbon dioxide (CO2e).
        </p>
        <h3>How You Can Reduce Your Footprint:</h3>
        <ul className="recommendations">
          {recommendations.map((rec, index) => (
            <li key={index}>
              <FontAwesomeIcon icon={rec.icon} /> {rec.text}
            </li>
          ))}
        </ul>
      </div>

      <div className="progress-section">
        <h2>Your Progress</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={[
              { name: "Jan", emissions: 5 },
              { name: "Feb", emissions: 4.5 },
              { name: "Mar", emissions: 4.8 },
              { name: "Apr", emissions: 4.2 },
              { name: "May", emissions: totalEmissions },
            ]}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="emissions" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="gamification-section">
        <h2>Your Eco-Achievements</h2>
        <p>Points: {userPoints}</p>
        <div className="badges">
          <FontAwesomeIcon icon={faMedal} className={userPoints >= 100 ? "achieved" : ""} title="Eco Warrior" />
          <FontAwesomeIcon icon={faChartLine} className={totalEmissions <= 4 ? "achieved" : ""} title="Carbon Cutter" />
          <FontAwesomeIcon icon={faLeaf} className={offsetAmount >= 5 ? "achieved" : ""} title="Offset Champion" />
        </div>
      </div>

      <Link to="/" className="back-link">
        Back to Dashboard
      </Link>
    </div>
  )
}

export default CarbonFootprint

