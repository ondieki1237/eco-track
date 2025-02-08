import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import './FormStyles.css';

function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // Create form-encoded data
      const formData = new URLSearchParams();
      formData.append('email', email);
      formData.append('password', password);

      // Send the request with form-encoded data
      const response = await axios.post('http://127.0.0.1:8001/register/', formData, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, // Set the correct content type
      });

      // Handle successful signup
      if (response.status === 200) {
        alert('Signup successful!');
      }
    } catch (err) {
      // Handle errors
      if (err.response && err.response.data && err.response.data.detail) {
        setError(err.response.data.detail); // Display detailed error message from backend
      } else {
        setError('Error during signup');
      }
    }
  };

  return (
    <div className="form-container">
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
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="form-button">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignupForm;