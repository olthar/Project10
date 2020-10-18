import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => (
  <div className="bounds">
    <h1>Error</h1>
    <p>Sorry! An unexpected error has occurred</p>
    <NavLink to={'/'} className="button button-secondary">Return to List</NavLink>
  </div>
);
