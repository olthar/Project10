import React, { useContext } from 'react';
import { NewContext } from '../ContextIndex';
import { Redirect } from 'react-router-dom';

const UserSignOut = () => {
  const { actions } = useContext(NewContext);
  //without a timeout you get a bug warning that you are unable to render provider at the same time. 
  setTimeout(() => {
    actions.signOut();;
   }, 0);
  return (
    <Redirect to="/" />
  );
}

export default UserSignOut;