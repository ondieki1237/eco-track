import "./UserProfile.css"

function UserProfile() {
  return (
    <div className="user-profile">
      <div className="user-profile-header">
        <img src="/placeholder.svg" alt="User Avatar" className="user-avatar" />
        <div className="user-info">
          <h2>John Doe</h2>
          <p>Eco Warrior</p>
        </div>
      </div>
      <div className="user-achievements">
        <h3>Achievements</h3>
        <div className="badge-list">
          <span className="badge">🌱 Green Thumb</span>
          <span className="badge">♻️ Recycling Pro</span>
          <span className="badge">🚲 Bike Commuter</span>
        </div>
      </div>
      <button className="btn-edit-profile">Edit Profile</button>
    </div>
  )
}

export default UserProfile

