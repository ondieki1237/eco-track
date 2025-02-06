import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import carbonfootprint from "./dashboard/CarbonFootprint"
import CarbonFootprint from "./dashboard/CarbonFootprint";
import CommunityChallenges from "./dashboard/CommunityChallenges";
import EducationalContent from "./dashboard/EducationalContent";
import Notifications from "./dashboard/Notifications";
import PickupScheduling from "./dashboard/PickupScheduling";
import ProgressTracking from "./dashboard/ProgressTracking";
import QuickActions from "./dashboard/QuickActions";
import RecyclingLocator from "./dashboard/RecyclingLocator";
import SustainabilityTips from "./dashboard/SustainabilityTips";
import UserProfile from "./dashboard/UserProfile";
import {
  faLeaf,
  faRecycle,
  faTruck,
  faBook,
  faChartLine,
  faTrophy,
  faBell,
  faCog,
  faUsers,
  faLightbulb,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons"
import "./Homepage.css"

function Dashboard() {
  const dashboardItems = [
    { icon: faLeaf, title: "Carbon Footprint", description: "Monitor your daily impact", link: "/carbon-footprint" },
    {
      icon: faRecycle,
      title: "Recycling Locator",
      description: "Find nearby recycling centers",
      link: "/recycling-locator",
      
    },
    { icon: faTruck, title: "Pickup Scheduling", description: "Schedule your next pickup", link: "/pickup-scheduling" },
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
  ]

  const leaderboardData = [
    { rank: 1, name: "EcoWarrior", points: 1250 },
    { rank: 2, name: "GreenThumb", points: 1100 },
    { rank: 3, name: "RecycleKing", points: 950 },
    { rank: 4, name: "SustainableQueen", points: 900 },
    { rank: 5, name: "ZeroWasteHero", points: 850 },
  ]

  const ecoTips = [
    "Use a reusable water bottle to reduce plastic waste.",
    "Switch to LED bulbs to save energy and reduce your carbon footprint.",
    "Start composting your food scraps to reduce landfill waste.",
    "Use public transportation or carpool to reduce emissions.",
    "Plant trees or support local tree-planting initiatives.",
  ]

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>EcoTrack Dashboard</h1>
        <div className="header-icons">
          <FontAwesomeIcon icon={faBell} className="header-icon" />
          <FontAwesomeIcon icon={faCog} className="header-icon" />
        </div>
      </header>
      <main className="dashboard-content">
        <div className="dashboard-grid">
          {dashboardItems.map((item, index) => (
            <Link to={item.link} key={index} className="dashboard-item">
              <FontAwesomeIcon icon={item.icon} className="dashboard-item-icon" />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </Link>
          ))}
        </div>

        <section className="leaderboard-section">
          <h2>
            <FontAwesomeIcon icon={faTrophy} /> Eco Champions Leaderboard
          </h2>
          <div className="leaderboard">
            {leaderboardData.map((user, index) => (
              <div key={index} className="leaderboard-item">
                <span className="rank">{user.rank}</span>
                <span className="name">{user.name}</span>
                <span className="points">{user.points} pts</span>
              </div>
            ))}
          </div>
        </section>

        <section className="eco-tips-section">
          <h2>
            <FontAwesomeIcon icon={faLightbulb} /> Daily Eco Tips
          </h2>
          <div className="eco-tips">
            {ecoTips.map((tip, index) => (
              <div key={index} className="eco-tip">
                <FontAwesomeIcon icon={faLeaf} className="eco-tip-icon" />
                <p>{tip}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="community-section">
          <h2>
            <FontAwesomeIcon icon={faUsers} /> Community Impact
          </h2>
          <div className="community-stats">
            <div className="stat-item">
              <h3>Total Users</h3>
              <p>10,532</p>
            </div>
            <div className="stat-item">
              <h3>Trees Planted</h3>
              <p>25,789</p>
            </div>
            <div className="stat-item">
              <h3>CO2 Reduced</h3>
              <p>1,250 tons</p>
            </div>
          </div>
        </section>

        <section className="upcoming-events-section">
          <h2>
            <FontAwesomeIcon icon={faCalendarAlt} /> Upcoming Eco Events
          </h2>
          <div className="events-list">
            <div className="event-item">
              <h3>Community Cleanup Day</h3>
              <p>Join us this Saturday for a city-wide cleanup initiative!</p>
              <span className="event-date">May 15, 2023</span>
            </div>
            <div className="event-item">
              <h3>Sustainable Living Workshop</h3>
              <p>Learn practical tips for reducing your environmental impact at home.</p>
              <span className="event-date">May 22, 2023</span>
            </div>
            <div className="event-item">
              <h3>Tree Planting Festival</h3>
              <p>Help us green the city! Goal: Plant 1000 trees in one day.</p>
              <span className="event-date">June 5, 2023</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Dashboard

