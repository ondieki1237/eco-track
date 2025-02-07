import { useEffect, useState } from "react"
import "./Hero.css"

function Hero() {
  const [users, setUsers] = useState(0)
  const [trees, setTrees] = useState(0)
  const [co2, setCo2] = useState(0)

  useEffect(() => {
    const animateValue = (setValue, target, duration) => {
      let start = 0
      const increment = target / (duration / 20)
      const timer = setInterval(() => {
        start += increment
        if (start >= target) {
          setValue(target)
          clearInterval(timer)
        } else {
          setValue(Math.floor(start))
        }
      }, 20)
    }

    animateValue(setUsers, 10532, 2000)
    animateValue(setTrees, 25789, 2500)
    animateValue(setCo2, 1250, 2000)
  }, [])

  return (
    <section className="hero">
      <div className="container">
        <h1>
          Track Your Impact
          <br />
          <span>Save The Planet</span>
        </h1>
        <p>
          EcoTrack empowers you to measure your carbon footprint, find recycling centers, and join eco-challenges.
          Take control of your environmental impact today.
        </p>

        {/* Community Impact with Animated Circles */}
        <div className="community-impact">
          <div className="impact-item">
            <div className="progress-circle">
              <svg>
                <circle cx="50" cy="50" r="45"></circle>
                <circle cx="50" cy="50" r="45" style={{ strokeDashoffset: `calc(280 - (280 * ${users / 12000}))` }}></circle>
              </svg>
              <div className="number">{users.toLocaleString()}+</div>
            </div>
            <h3>Total Users</h3>
          </div>

          <div className="impact-item">
            <div className="progress-circle">
              <svg>
                <circle cx="50" cy="50" r="45"></circle>
                <circle cx="50" cy="50" r="45" style={{ strokeDashoffset: `calc(280 - (280 * ${trees / 30000}))` }}></circle>
              </svg>
              <div className="number">{trees.toLocaleString()}+</div>
            </div>
            <h3>Trees Planted</h3>
          </div>

          <div className="impact-item">
            <div className="progress-circle">
              <svg>
                <circle cx="50" cy="50" r="45"></circle>
                <circle cx="50" cy="50" r="45" style={{ strokeDashoffset: `calc(280 - (280 * ${co2 / 1500}))` }}></circle>
              </svg>
              <div className="number">{co2.toLocaleString()} tons</div>
            </div>
            <h3>CO₂ Reduced</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
