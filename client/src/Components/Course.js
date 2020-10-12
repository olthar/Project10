import React from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';

import CourseDetail from './CourseDetail';

const Course = props => (
    <div className="grid-33">
        <NavLink to={`/courses/${props.data.id}`} className="course--module course--link" >
            <h4 className="course--label">Course</h4>
            <h3 className="course--title">{props.data.title}</h3>
        </NavLink>
    </div> 
);

export default Course;