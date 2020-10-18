import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => (
  <div className="bounds">
    <h1>Forbidden</h1>
    <p>Sorry! You cannot access the requested page.</p>
    <NavLink to={'/'} className="button button-secondary">Return to List</NavLink>
  </div>
);
