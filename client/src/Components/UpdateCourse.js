import React, { useState, useContext, useEffect, useCallback } from 'react';
import { NewContext } from '../Context';
import Form from './Form';


const UpdateCourse = (props) => {
    const { authenticatedUser, credentials, data } = useContext(NewContext);
    const [course, setCourse] = useState({
        title:'',
        description:'',
        estimatedTime:'',
        materialsNeeded: '',
        userId: '',
        authenticatedUserId: authenticatedUser.id,
        courseId: '',
        errors:[]
      });
    const id = props.match.params.id
    
    //callback set to add current course details to course state. 
    const update = useCallback((oldCourse) => {
      setCourse(prevState => ({...prevState, 
        title: oldCourse.title,
        description: oldCourse.description,
        estimatedTime: oldCourse.estimatedTime,
        materialsNeeded: oldCourse.materialsNeeded,
        userId: oldCourse.owner.id,
        courseId: oldCourse.id,
        errors:[]
      }));
    },[]);
      
     //When the page loads, the course is loaded into the boxes based on the ID in the URL
      useEffect(() => {
        data.getCourse(id)
        .then(response => {
            if(response === 404){
                props.history.push(`/notfound`)
            } else {
              update(response)
                //if a user navigates to the update page of a project they don't own, they are redirected to forbidden page
              if (response.owner.id !== authenticatedUser.id) {props.history.push(`/forbidden`)}
            }
        })
        .catch(error => props.history.push(`/error`))
    }, [authenticatedUser.id, data, id, props.history, update]);

  //When submit is pressed, the new course is sent to the API through DATA component. If successful, the user is sent back to the courses index.  
  const submit = () => {
    data.updateCourse(course, credentials, course.courseId)
        .then((errors) => {
            if (errors.length) {
                console.log(errors)
                //If user doesn't have access to the course you get directed to the forbidden page
                if (errors === 403) {
                    props.history.push('/forbidden');
                    console.log("You do not have authorization to delete this course")
                  // If no course is found, user is sent to NotFound. 
                  } else if (errors === 404) {
                    props.history.push('/notfound');
                } else {
                    setCourse({ ...course, ...{errors }});
                }
            } else {
                props.history.push(`/`);
            }
        })
        .catch((error) => {
        props.history.push('/error');
      });
    }    

  const change = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setCourse({ ...course, ...{ [name]: value } });
  }
  const cancel = () => {
    props.history.push('/');
  }

  return(
    <div className="bounds course--detail">
        <h1>Update Course</h1>
        <div>
          <Form 
            cancel={cancel}
            errors={course.errors}
            submit={submit}
            submitButtonText="Update Course"
            elements={() => (
              <React.Fragment>
                <div className="grid-66">
                  <div className="course--header">
                    <h4 className="course--label">Course</h4>
                    <div>
                      <input 
                        id="title" 
                        name="title" 
                        type="text" 
                        className="input-title course--title--input" 
                        placeholder="Course title..."
                        value={course.title}
                        onChange={change} />
                    </div>
                    <p>By {authenticatedUser.firstName} {authenticatedUser.lastName}</p>
                  </div>
                  <div className="course--description">
                    <div><textarea id="description" name="description" className="" placeholder="Course description..." value={course.description} onChange={change} ></textarea></div>
                  </div>
                </div>
                <div className="grid-25 grid-right">
                  <div className="course--stats">
                    <ul className="course--stats--list">
                      <li className="course--stats--list--item">
                        <h4>Estimated Time</h4>
                        <div><input id="estimatedTime" name="estimatedTime" type="text" className="course--time--input"
                            placeholder="Hours" value={course.estimatedTime} onChange={change} /></div>
                      </li>
                      <li className="course--stats--list--item">
                        <h4>Materials Needed</h4>
                        <div><textarea id="materialsNeeded" name="materialsNeeded" className="" placeholder="List materials..." value={course.materialsNeeded} onChange={change} ></textarea></div>
                      </li>
                    </ul>
                  </div>
                </div>
            </React.Fragment>
            )}/>

        </div>
      </div>
  )
}

export default UpdateCourse;