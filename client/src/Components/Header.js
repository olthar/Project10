import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <div className="bounds">
      <h1 className="header--logo">Courses</h1>
        <nav>
            <NavLink className="signup" to={`sign-up.html`}>Sign Up</NavLink>
            <NavLink className="signin" to={`sign-in.html`}>Sign In</NavLink>
        </nav>
    </div>
  </div>
);

export default Header;