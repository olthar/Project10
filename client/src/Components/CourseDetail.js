import React, { useState, useContext, useEffect } from 'react';
import { NewContext } from '../Context';
import { NavLink } from 'react-router-dom';
const ReactMarkdown = require('react-markdown')


const CourseDetail = (props) => {
    const { authenticatedUser, data } = useContext(NewContext);
    const [course, setCourse] = useState('');
    const [owner, setOwner] = useState('');
    let buttons;

    // When page loads the course data is receeived from the API
    useEffect(() => {
        let id = props.match.params.id
        console.log('useEffect called!');
        data.getCourse(id)
        .then(response => {
            // If no course is found, user is sent to NotFound. 
            if(response === 404){
                props.history.push('/notfound')
            }else{
                setCourse(response);
                setOwner(response.owner);
            }
        })
        .catch((err) => {
            props.history.push('/error')
        })
    }, []);

    //Buttons created to delete and update course if the logged in user is the owner of that course
    if(authenticatedUser && owner.id === authenticatedUser.id){
        buttons = <span>
            <NavLink to={`/courses/${course.id}/update`} className="button">Update Course</NavLink>
            <NavLink to={`/courses/${course.id}/delete`} className="button">Delete Course</NavLink></span>
    }

return(
    <div>
        <div className="actions--bar">
          <div className="bounds">
          <div className="grid-100">    
              {buttons}
            <a className="button button-secondary" href="/">Return to List</a></div>
          </div>
        </div>
        <div className="bounds course--detail">
            <div className="grid-66">
                <div className="course--header">   
                    <h4 className="course--label">Course</h4>
                    <h3 className="course--title">{course.title}</h3>
                    <p>By { owner.firstName } { owner.lastName }</p>
                </div> 
                <div className="course--description">
                <ReactMarkdown source={course.description} />
                </div>
            </div>
            <div className="grid-25 grid-right">
                <div className="course--stats">
                    <ul className="course--stats--list">
                        <li className="course--stats--list--item">
                        <h4>Estimated Time</h4>
                        <h3>{course.estimatedTime}</h3>
                        </li>
                        <li className="course--stats--list--item">
                        <h4>Materials Needed</h4>
                            <ReactMarkdown source={course.materialsNeeded} />
                        </li>
                    </ul>
                </div> 
            </div> 
        </div> 
    </div>
);
}

export default CourseDetail;