import React from 'react';
import { Redirect } from 'react-router-dom';

export default ({context}) => {
  context.actions.signOut();
  console.log("OUT")

  return (
    <Redirect to="/" />
  );
}
