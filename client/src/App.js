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
import Courses from './Components/Courses';
import CourseDetail from './Components/CourseDetail';




// tarst

function App() {
  // const [data, setData] = useState('');
  return (
    <BrowserRouter>
    {/* <div className="container"> */}
      <Header />

      <Switch>
        <Route path="/courses" render={ () => <Courses /> } />
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
