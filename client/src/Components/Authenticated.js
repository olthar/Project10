import React, { useContext } from 'react';
import { NewContext } from '../Context';
import { NavLink } from 'react-router-dom';


export default (props) => {
  const { authenticatedUser } = useContext(NewContext);

  return (
  <div className="bounds">
    <div className="grid-100">
      <h1>{authenticatedUser.firstName} is authenticated!</h1>
      <p>Your username is {authenticatedUser.emailAddress}.</p>
      {/* Button to send users to the list of courses */}
      <NavLink to={'/'} className="button button-secondary">Courses</NavLink>

    </div>
  </div>
  );
}