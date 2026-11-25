
import { NavLink, useNavigate } from 'react-router-dom';
import { getSession, logoutUser } from '../auth';

function Navbar() {
  const navigate = useNavigate();
  const user = getSession();

  function handleLogout() {
    logoutUser();
    navigate('/login');
    window.location.reload();
  }

  return (
    <header>
      <div className="brand-container">
        <NavLink to="/" className="brand-logo">
          🏡 HomeEase
        </NavLink>
        <span className="brand-tagline">
          | Trusted Home Services
        </span>
      </div>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/services">Services</NavLink>

        {user ? (
          <>
            {user.role === 'admin' ? (
              <NavLink to="/admin">Admin</NavLink>
            ) : (
              <NavLink to="/dashboard">Dashboard</NavLink>
            )}
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
          </>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
