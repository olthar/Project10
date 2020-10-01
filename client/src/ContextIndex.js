import React, { useState } from 'react';
import Cookies from 'js-cookie';
import Data from './Data';

export const NewContext = React.createContext(); 

export const Provider = (props) => {
  const [authenticatedUser, setauthenticatedUser] = useState(Cookies.getJSON('authenticatedUser') || "")
  
  const data = new Data()

  const signIn = async (username, password) => {
    const user = await data.getUser(username, password);
    if (user !== null) {
      setauthenticatedUser(user);
      const cookieOptions = {
        expires: 1 // 1 day
      };
      // console.log(Cookies.getJSON('authenticatedUser'))
      Cookies.set('authenticatedUser', JSON.stringify(user), { expires: 1 });
    }
    return user;
  }

  const signOut = () => {
    setauthenticatedUser({ authenticatedUser: "" });
    Cookies.remove('authenticatedUser');
  }

    return (
      <NewContext.Provider value={{
      authenticatedUser,
      data,
      actions: {
        signIn: signIn,
        signOut: signOut
      }
    }}>
    { props.children }
      </NewContext.Provider>  
    );
  }

  