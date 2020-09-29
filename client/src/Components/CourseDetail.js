import React, { useState, useContext, useEffect } from 'react';
import { __RouterContext } from 'react-router';
import axios from 'axios';



const CourseDetail = (match) => {
    
    const [course, setCourse] = useState('');
    const [owner, setOwner] = useState('');

    let routerContext = useContext(__RouterContext)
    console.log(course.materialsNeeded)
    let id = routerContext.match.params.id
    let material = course.materialsNeeded;
    console.log(owner.firstName)

    useEffect(() => {
        console.log('useEffect called!');
        axios(`http://localhost:5000/api/courses/${id}`)
        .then(response => {
            setCourse(response.data)
            setOwner(response.data.owner)
        })
        .catch(error => console.log('Error fetching and parsing data', error))
    }, []);

    // const materials = material.replace(/(\*)/ , '<li>')

return(
    <div className="bounds course--detail">
        <div className="grid-66">
            <h4 className="course--label">Course</h4>
            <h3 className="course--title">`{course.title}`</h3>
            <p>`By { course.title }`</p>
        </div> 
        <div className="course--description">
            <p>arseitnhiarnsthaernhstenarh</p>
        </div> 
        <div className="grid-25 grid-right">
            <div className="course--stats">
                <ul className="course--stats--list">
                    <li className="course--stats--list--item">
                    <h4>Estimated Time</h4>
                    <h3>14 hours</h3>
                    </li>
                    <li className="course--stats--list--item">
                    <h4>Materials Needed</h4>
                    <ul>{material}</ul>
                    </li>
                </ul>
            </div> 
        </div> 
    </div> 
);
}

export default CourseDetail;