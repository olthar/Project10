import React, { useContext } from 'react';
import { NewContext } from './ContextIndex';

import { Route, Redirect } from 'react-router-dom';
import { Consumer } from './Context';

export default ({ component: Component, ...rest }) => {
  const { authenticatedUser } = useContext(NewContext);

  return (
    <Route
      {...rest}
      render={props => authenticatedUser ? (
          <Component {...props} />
        ) : (
          <Redirect to={{
            pathname: '/signin',
            state: { from: props.location }
          }} />
        )
      }
    />
  );
};