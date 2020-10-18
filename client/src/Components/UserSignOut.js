import React, { useContext, useEffect } from 'react';
import { NewContext } from '../Context';
import { Redirect } from 'react-router-dom';

const UserSignOut = (props) => {
  const { actions } = useContext(NewContext);
  
  useEffect(() =>  {
    actions.signOut()
  }, [actions]);

  return (
    <Redirect to="/" />
  );
}

export default UserSignOut;