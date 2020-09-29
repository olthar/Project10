import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import logo from './logo.svg';
// import './App.css';
import axios from 'axios';
import './styles/global.css';






import Header from './Components/Header';
import NotFound from './components/NotFound';
import UserSignUp from './components/UserSignUp';
import UserSignIn from './components/UserSignIn';
import UserSignOut from './components/UserSignOut';
import Authenticated from './components/Authenticated';
import Courses from './Components/Courses';
import CourseDetail from './Components/CourseDetail';

import withContext from './Context';
import PrivateRoute from './PrivateRoute';

const HeaderWithContext = withContext(Header);
const AuthWithContext = withContext(Authenticated);
const UserSignUpWithContext = withContext(UserSignUp);
const UserSignInWithContext = withContext(UserSignIn);
const UserSignOutWithContext = withContext(UserSignOut);




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
        <PrivateRoute path="/authenticated" component={AuthWithContext} />
        <Route path="/signin" component={UserSignInWithContext} />
        <Route path="/signup" component={UserSignUpWithContext} />
        <Route path="/signout" component={UserSignOutWithContext} />
        {/* <Route exact path="/" component={Home} /> */}
        {/* <Route path="/about" render={ () => <About title='About' /> } /> */}
        {/* <Route exact path="/teachers" component={Teachers} /> */}
        <Route path="/course/:id" render={ () => <CourseDetail/> }  /> 
        {/* <Route path="/courses"/> */}
        {/* <Route component={NotFound} /> */}
      </Switch>
    {/* </div> */}
  </BrowserRouter>
  )
      }

export default App;
