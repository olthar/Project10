import React, { useState } from 'react';
import Cookies from 'js-cookie';
import Data from './Data';

export const NewContext = React.createContext(); 

export const Provider = (props) => {
  const [authenticatedUser, setauthenticatedUser] = useState(Cookies.getJSON('authenticatedUser') || "")
  const [credentials, setCredentials] = useState(Cookies.getJSON('credentials') || "")


  const data = new Data()

  const signIn = async (username, password) => {
    const encodedCredentials = btoa(`${username}:${password}`);
    console.log(encodedCredentials)
    const user = await data.getUser(encodedCredentials);
    if (user !== null) {
      setauthenticatedUser(user);
      setCredentials(encodedCredentials)
      const cookieOptions = {
        expires: 1 // 1 day
      };
      // console.log(Cookies.getJSON('authenticatedUser'))
      Cookies.set('authenticatedUser', JSON.stringify(user), { expires: 1 });
      Cookies.set('credentials', JSON.stringify(encodedCredentials), { expires: 1 });
    }
    return user;
  }

  const signOut = () => {
    setauthenticatedUser({ authenticatedUser: "" });
    setCredentials({});
    Cookies.remove('authenticatedUser');
    Cookies.remove('credentials');

  }

    return (
      <NewContext.Provider value={{
      authenticatedUser,
      credentials,
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

  