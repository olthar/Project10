import React, { Component } from 'react';
import Cookies from 'js-cookie';
import Data from './Data';

export const NewContext = React.createContext(); 
export class Provider extends Component {

  state = {
    authenticatedUser: Cookies.getJSON('authenticatedUser') || null,
    credentials: Cookies.getJSON('credentials') || null 
  };

  constructor() {
    super();
    this.data = new Data();
  }

  render() {
    const { authenticatedUser, credentials } = this.state;
    const value = {
      authenticatedUser,
      credentials,
      data: this.data,
      actions: {
        signIn: this.signIn,
        signOut: this.signOut
      },
    };
    return (
      <NewContext.Provider value={value}>
        {this.props.children}
      </NewContext.Provider>  
    );
  }
  
  signIn = async (username, password) => {
    const encodedCredentials = btoa(`${username}:${password}`);
    const user = await this.data.getUser(encodedCredentials);
    if (user !== null) {
      this.setState(() => {
        return {
          authenticatedUser: user,
          credentials: encodedCredentials
        };
      });
      Cookies.set('authenticatedUser', JSON.stringify(user), { expires: 1 });
      Cookies.set('credentials', JSON.stringify(encodedCredentials), { expires: 1 });

    }
    return user;
  }

  signOut = () => {
    this.setState({ authenticatedUser: null });
    this.setState({ credentials: null });
    Cookies.remove('authenticatedUser');
    Cookies.remove('credentials');
  }
}
