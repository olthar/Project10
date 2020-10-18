import React, { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { NewContext } from '../Context';
import Course from './Course';

function Courses  (props) {
    const { data } = useContext(NewContext);

    const [courses, setCourses] = useState('');
    let courseList;

    // When page loads the courses data is receeived from the API
    useEffect(() => {
        console.log('useEffect called!');
        data.getCourses()
            .then(response => setCourses(response))
            .catch(error => props.history.push('/error'))
    }, []);
    
    // If there are courses, they will be added to the list using the COURSE component. 
    if (courses.length) {
        courseList = courses.map(course => <Course data={course} key={course.id} />); 
      }

    return (
        <div className="bounds">
            {courseList}
            <div className="grid-33">
                <NavLink to={`/create`} className="course--module course--add--module" >
                    <h4 className="course--label">+</h4>
                    <h3 className="course--title">Create Course</h3>
                </NavLink>
            </div> 
        </div>
    )
}

export default Courses;