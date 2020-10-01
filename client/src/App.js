import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import logo from './logo.svg';
// import './App.css';
import axios from 'axios';






import Header from './Components/Header';
import NotFound from './Components/NotFound';
import UserSignUp from './Components/UserSignUp';
import UserSignIn from './Components/UserSignIn';
import UserSignOut from './Components/UserSignOut';
import Authenticated from './Components/Authenticated';
import Courses from './Components/Courses';
import CourseDetail from './Components/CourseDetail';

import withContext from './Context';
import PrivateRoute from './PrivateRoute';

// const HeaderWithContext = withContext(Header);
// const AuthWithContext = withContext(Authenticated);
// const UserSignUpWithContext = withContext(UserSignUp);
// const UserSignInWithContext = withContext(UserSignIn);
// const UserSignOutWithContext = withContext(UserSignOut);




// tarst

function App() {
  // const [data, setData] = useState('');
  return (
    <BrowserRouter>
    {/* <div className="container"> */}
    <Header />

      <Switch>
        {/* <Route path="/courses" render={ () => <Courses /> } /> */}
        <Route exact path="/" component={Courses} />
        {/* <PrivateRoute path="/authenticated" component={AuthWithContext} /> */}
        <Route path="/signin" component={UserSignIn} />
        <Route path="/signup" component={UserSignUp} /> 
        <Route path="/signout" component={UserSignOut} /> 
        {/* <Route exact path="/" component={Home} /> */}
        {/* <Route path="/about" render={ () => <About title='About' /> } /> */}
        {/* <Route exact path="/teachers" component={Teachers} /> */}
        <Route path="/course/:id" component={CourseDetail}   /> 
        {/* <Route path="/courses"/> */}
        

        <Route component={NotFound} />
      </Switch>
    {/* </div> */}
  </BrowserRouter>
  )
      }

export default App;
