import React, { useContext } from 'react';
import { NewContext } from '../Context';


export default (props) => {
  const { authenticatedUser } = useContext(NewContext);

  return (
  <div className="bounds">
    <div className="grid-100">
      <h1>{authenticatedUser.firstName} is authenticated!</h1>
      <p>Your username is {authenticatedUser.emailAddress}.</p>
    </div>
  </div>
  );
}