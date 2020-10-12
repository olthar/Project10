import React, { useContext, useEffect } from 'react';
import { NewContext } from '../ContextIndex';
import { Redirect } from 'react-router-dom';

const UserSignOut = (props) => {
  const { actions } = useContext(NewContext);
  //without a timeout you get a bug warning that you are unable to render provider at the same time. 
  
  useEffect(() =>  {
    actions.signOut()
    // props.history.push('/');
  }, []);

  return (
    <Redirect to="/" />
  );
}

export default UserSignOut;