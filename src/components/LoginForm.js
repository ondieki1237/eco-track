// LoginForm.js
import React, { useState } from 'react';
import './FormStyles.css'; // Import shared form styles

function LoginForm({ onLogin }) { // Receive onLogin prop
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === 'bellarinseth@gmail.com' && password === 'seth123qP1') { // Replace with your default credentials
      onLogin(); // Call the onLog
      setError('Invalid email or password');
    }
  };

  return (
    <div className="form-container"> {/* Use shared styles */}
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>} {/* Display error message */}
        <button type="submit" className="form-button">Login</button> {/* Use shared styles */}
      </form>
    </div>
  );
}

export default LoginForm;