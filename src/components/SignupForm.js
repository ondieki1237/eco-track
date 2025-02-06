// SignupForm.js
import React, { useState } from 'react';
import './FormStyles.css'; // Import shared form styles

function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (email === 'test@example.com' && password === 'password123') {  // Replace with your default credentials
      alert('Signup Successful (Demo)'); // Replace with actual signup logic
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="form-container"> {/* Use shared styles */}
      <h2>Sign Up</h2>
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
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>} {/* Display error message */}
        <button type="submit" className="form-button">Sign Up</button> {/* Use shared styles */}
      </form>
    </div>
  );
}

export default SignupForm;