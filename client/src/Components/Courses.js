import React, { useState, useEffect } from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';
import axios from 'axios';

import Course from './Course';


function Courses  () {

    const [courses, setCourses] = useState('');
    let courseList;



    useEffect(() => {
        console.log('useEffect called!');
        axios(`http://localhost:5000/api/courses`)
        .then(response => setCourses(response.data))
        // .then (console.log(courses)) 
        .catch(error => console.log('Error fetching and parsing data', error))
    }, []);

    console.log(courses)
    if (courses.length) {
        courseList = courses.map(course => <Course data={course} key={course.id} />);  
        console.log(courseList)  
    //   } else {
    //     courss = <NoGifs />
      }

    return (
        <div className="bounds">
            {courseList}

        </div>
    )
}

export default Courses;