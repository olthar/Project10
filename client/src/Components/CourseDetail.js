import React, { useState, useContext, useEffect } from 'react';
import { NewContext } from '../ContextIndex';
import { Link } from 'react-router-dom';


const CourseDetail = (props) => {
    const { data } = useContext(NewContext);

    const [course, setCourse] = useState('');
    const [owner, setOwner] = useState('');

    console.log(owner.firstName)
    // let material = course.materialsNeeded;
    // console.log(course.owner.firstName)
    // console.log(id)

    useEffect(() => {
        let id = props.match.params.id
        console.log('useEffect called!');
        data.getCourse(id)
        .then(response => {
            setOwner(response.owner);
            setCourse(response)
            // setOwner(response.data.owner)
        })
        .catch(error => console.log('Error fetching and parsing data', error))
    }, []);

return(
    <div>
        <div className="actions--bar">
          <div className="bounds">
            <div className="grid-100"><span><a className="button" href="update-course.html">Update Course</a><a className="button" href="#">Delete Course</a></span><a
                className="button button-secondary" href="index.html">Return to List</a></div>
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