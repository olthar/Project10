import React, { useState, useContext } from 'react';
import { NewContext } from '../ContextIndex';
import { Link } from 'react-router-dom';
import Form from './Form';

const UserSignUp = (props) => {
    const { data, actions } = useContext(NewContext);

    const [user, setUser] = useState({
      firstName:'',
      lastName:'',
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
      data.createUser(user)
      .then( errors => {
        if (errors.length) {
          setUser({ ...user, ...{errors}});
        } else {
          actions.signIn(user.emailAddress, user.password)
            .then(() => {
              props.history.push('/authenticated');    
            });
        }
      })
      .catch((err) => {
        console.log(err);
        props.history.push('/error');
      });
    }

    const cancel = () => {
        props.history.push('/');
    }

    return(
        <div className="bounds">
        <div className="grid-33 centered signin">
        <h1>Sign Up</h1>
          <Form 
            cancel={cancel}
            errors={user.errors}
            submit={submit}
            submitButtonText="Sign Up"
            elements={() => (
              <React.Fragment>
                <input 
                  id="firstName" 
                  name="firstName" 
                  type="text"
                  value={user.firstName} 
                  onChange={change} 
                  placeholder="First Name" />
                <input 
                  id="lastName" 
                  name="lastName" 
                  type="text"
                  value={user.lastName} 
                  onChange={change} 
                  placeholder="Last Name" />
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
            Already have a user account? <Link to="/signin">Click here</Link> to sign in!
          </p>
        </div>
      </div>
    );
  }

export default UserSignUp;