import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import logo from './logo.svg';
// import './App.css';


import Header from './Components/Header';
import NotFound from './Components/NotFound';
import UserSignUp from './Components/UserSignUp';
import UserSignIn from './Components/UserSignIn';
import UserSignOut from './Components/UserSignOut';
import Authenticated from './Components/Authenticated';
import Courses from './Components/Courses';
import CourseDetail from './Components/CourseDetail';
import CreateCourse from './Components/CreateCourse';
import UpdateCourse from './Components/UpdateCourse';
import DeleteCourse from './Components/DeleteCourse';



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
        <PrivateRoute path="/authenticated" component={Authenticated} /> 

        <PrivateRoute path="/create-course" component={CreateCourse} /> 
        
        {/* <Route exact path="/" component={Home} /> */}
        {/* <Route path="/about" render={ () => <About title='About' /> } /> */}
        {/* <Route exact path="/teachers" component={Teachers} /> */}
        <Route exact path="/courses/:id" component={CourseDetail}   /> 
        <PrivateRoute path="/courses/:id/update" component={UpdateCourse} /> 
        <Route path="/courses/:id/delete" component={DeleteCourse} /> 
        {/* <Route path="/courses"/> */}
        

        <Route component={NotFound} />
      </Switch>
    {/* </div> */}
  </BrowserRouter>
  )
      }

export default App;
