
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signupUser } from '../auth';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function handleSignup(e) {
    e.preventDefault();

    const success = signupUser(name, email, password);

    if (success) {
      navigate('/dashboard');
    } else {
      setError('Email already exists');
    }
  }

  return (
    <div className="auth-container">
      <h2>Create HomeEase Account</h2>

      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Create Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />

        <button type="submit">Sign Up</button>
      </form>

      <p style={{ color: 'red' }}>{error}</p>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
}

export default Signup;
