import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import './FormStyles.css';

function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create form-encoded data
      const formData = new URLSearchParams();
      formData.append('email', email);
      formData.append('password', password);

      // Send the request with form-encoded data and include credentials
      const response = await axios.post(
        'http://127.0.0.1:8001/login/',
        formData,
        {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, // Set the correct content type
          withCredentials: true, // Include credentials (cookies) in the request
        }
      );

      // Handle successful login
      if (response.status === 200) {
        onLogin(); // Call the onLogin function passed as a prop
      }
    } catch (err) {
      // Handle errors
      if (err.response && err.response.data && err.response.data.detail) {
        setError(err.response.data.detail); // Display detailed error message from backend
      } else {
        setError('Invalid email or password'); // Default error message
      }
    }
  };

  return (
    <div className="form-container">
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
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="form-button">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;