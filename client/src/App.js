import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Header from './Components/Header';
import NotFound from './Components/NotFound';
import Forbidden from './Components/Forbidden';
import Error from './Components/UnhandledError';
import UserSignUp from './Components/UserSignUp';
import UserSignIn from './Components/UserSignIn';
import UserSignOut from './Components/UserSignOut';
import Authenticated from './Components/Authenticated';
import Courses from './Components/Courses';
import CourseDetail from './Components/CourseDetail';
import CreateCourse from './Components/CreateCourse';
import UpdateCourse from './Components/UpdateCourse';
import DeleteCourse from './Components/DeleteCourse';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Courses} />
        <Route path="/signin" component={UserSignIn} />
        <Route path="/signup" component={UserSignUp} /> 
        <Route path="/signout" component={UserSignOut} /> 
        <PrivateRoute path="/authenticated" component={Authenticated} /> 
        <PrivateRoute path="/create" component={CreateCourse} /> 
        <Route exact path="/courses/:id" component={CourseDetail}   /> 
        <PrivateRoute path="/courses/:id/update" component={UpdateCourse} /> 
        <Route path="/courses/:id/delete" component={DeleteCourse} /> 
        <Route path="/forbidden" component={Forbidden} /> 
        <Route path="/error" component={Error} /> 
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App;
