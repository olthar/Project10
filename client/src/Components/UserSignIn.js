import React, { useState, useContext } from 'react';
import { NewContext } from '../ContextIndex';
import { Link } from 'react-router-dom';
import Form from './Form';

const UserSignIn = (props) => {
    const { actions } = useContext(NewContext);
    const [user, setUser] = useState({
      emailAddress:'',
      password:'',
      errors:[]
    });

    const change = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUser({ ...user, ...{ [name]: value } });
      }

    const submit = () => {
        const { from } = props.location.state || { from: { pathname: '/authenticated' } };
        actions.signIn(user.emailAddress, user.password)
          .then((user) => {
            if (user === null) {
              setUser({ ...user, ...{errors: [ 'Sign-in was unsuccessful' ] }});
              } else {
              console.log(user)
              props.history.push(from);
            }
          })
          .catch((error) => {
            props.history.push('/error');
          });
      }
    

    const cancel = () => {
        props.history.push('/');
    }

    return(
        <div className="bounds">
        <div className="grid-33 centered signin">
          <h1>Sign In</h1>
          <Form 
            cancel={cancel}
            errors={user.errors}
            submit={submit}
            submitButtonText="Sign In"
            elements={() => (
              <React.Fragment>
                <input 
                  id="emailAddress" 
                  name="emailAddress" 
                  type="text"
                  value={user.emailAddress} 
                  onChange={change} 
                  placeholder="Email Address" />
                <input 
                  id="password" 
                  name="password"
                  type="password"
                  value={user.password} 
                  onChange={change} 
                  placeholder="Password" />                
              </React.Fragment>
            )} />
          <p>
            Don't have a user account? <Link to="/signup">Click here</Link> to sign up!
          </p>
        </div>
      </div>
    );
  }

export default UserSignIn;