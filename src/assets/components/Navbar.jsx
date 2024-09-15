// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const Navbar = () => {
  const { token, logout } = useUser();

  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li>
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li>
          <Link className="nav-link" to="/cart">Cart</Link>
        </li>
        {token ? (
          <>
            <li>
              <Link className="nav-link" to="/profile">Profile</Link>
            </li>
            <li>
              <button className="nav-link" onClick={logout}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li>
              <Link className="nav-link" to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
