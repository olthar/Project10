import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => (
  <div className="bounds">
    <h1>Not Found</h1>
    <p>Sorry! We couldn't find the page you're looking for.</p>
    <NavLink to={'/'} className="button button-secondary">Return to List</NavLink>
  </div>
);
