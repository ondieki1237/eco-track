import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
} from "@fortawesome/free-solid-svg-icons";
import "./Homepage.css";

function Dashboard() {
  const dashboardItems = [
    { icon: faLeaf, title: "Carbon Footprint", description: "Monitor your daily impact" },
    { icon: faRecycle, title: "Recycling Locator", description: "Find nearby recycling centers" },
    { icon: faTruck, title: "Pickup Scheduling", description: "Schedule your next pickup" },
    { icon: faBook, title: "Educational Content", description: "Learn about sustainability" },
    { icon: faChartLine, title: "Progress Tracking", description: "View your eco-friendly progress" },
    { icon: faTrophy, title: "Community Challenges", description: "Join eco-challenges" },
    { icon: faUsers, title: "Eco Community", description: "Connect with like-minded individuals" },
  ];

  const leaderboardData = [
    { rank: 1, name: "EcoWarrior", points: 1250 },
    { rank: 2, name: "GreenThumb", points: 1100 },
    { rank: 3, name: "RecycleKing", points: 950 },
    { rank: 4, name: "SustainableQueen", points: 900 },
    { rank: 5, name: "ZeroWasteHero", points: 850 },
  ];

  const ecoTips = [
    "Use a reusable water bottle to reduce plastic waste.",
    "Switch to LED bulbs to save energy and reduce your carbon footprint.",
    "Start composting your food scraps to reduce landfill waste.",
    "Use public transportation or carpool to reduce emissions.",
    "Plant trees or support local tree-planting initiatives.",
    "Opt for eco-friendly products and reduce single-use plastics.",
  ];

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
            <div key={index} className="dashboard-item">
              <FontAwesomeIcon icon={item.icon} className="dashboard-item-icon" />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
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
      </main>
      <footer className="dashboard-footer">
        <span className="footer-text">Settings</span>
        <span className="footer-text">Help</span>
        <span className="footer-text">Contact</span>
      </footer>
    </div>
  );
}

export default Dashboard;
