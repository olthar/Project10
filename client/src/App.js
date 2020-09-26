import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import Header from './Components/Header';
import Courses from './Components/Courses';




// tarst

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    console.log('useEffect called!');
    axios(`http://localhost:5000/api/courses`)
    .then(response => setData(response.data.data))
    .then(console.log(data)) 
    .catch(error => console.log('Error fetching and parsing data', error))
}, []);


  
  return (
    <BrowserRouter>
    <div className="container">
      <Header />
      <Courses />
      <Switch>
        {/* <Route exact path="/" component={Home} />
        <Route path="/about" render={ () => <About title='About' /> } />
        <Route exact path="/teachers" component={Teachers} />
        <Route path="/teachers/:topic/:name" component={Featured} /> */}
        <Route path="/courses"/>
        {/* <Route component={NotFound} /> */}
      </Switch>
    </div>
  </BrowserRouter>
  )
      }

export default App;
