import React, { useState, useContext, useEffect } from 'react';
import { NewContext } from '../ContextIndex';
import { NavLink } from 'react-router-dom';


const CourseDetail = (props) => {
    const { authenticatedUser, data } = useContext(NewContext);

    const [course, setCourse] = useState('');
    const [owner, setOwner] = useState('');
    const [match, setMatch] = useState(false);
    let buttons;


    useEffect(() => {
        let id = props.match.params.id
        console.log('useEffect called!');
        data.getCourse(id)
        .then(response => {
            setCourse(response);
            setOwner(response.owner);
            response.owner.id === authenticatedUser.id ? setMatch(true) : console.log("no")
        })
        .catch(error => console.log('Error fetching and parsing data', error))
    }, []);

    if(match){
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
                <h4 className="course--label">Course</h4>
                <h3 className="course--title">{course.title}</h3>
                <p>By { owner.firstName } { owner.lastName }</p>
            </div> 
            <div className="course--description">
                <p>{ course.description }</p>
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
                        {/* <ReactMarkdown source={data.materialsNeeded} /> */}
                        <ul>{course.materialsNeeded}</ul>
                        </li>
                    </ul>
                </div> 
            </div> 
        </div> 
    </div>
);
}

export default CourseDetail;