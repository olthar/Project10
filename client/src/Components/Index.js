import React, { useState, useEffect, useContext } from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';
import { NewContext } from '../ContextIndex';
import Course from './Course';

function Courses  () {
    const { authenticatedUser, data } = useContext(NewContext);

    const [courses, setCourses] = useState('');
    let courseList;

    useEffect(() => {
        console.log('useEffect called!');
        data.getCourses()
            .then(response => setCourses(response))
            .catch(error => console.log('Error fetching and parsing data', error))
    }, []);
    
    console.log(courses)
    if (courses.length) {
        courseList = courses.map(course => <Course data={course} key={course.id} />);  
      }

    return (
        <div className="bounds">
            {courseList}
        </div>
    )
}

export default Courses;