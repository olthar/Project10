import React, { useState, useContext, useEffect } from 'react';
import { NewContext } from '../ContextIndex';
import { Link } from 'react-router-dom';
import Form from './Form';


const CreateCourse = (props) => {
    const { authenticatedUser, credentials, data } = useContext(NewContext);

    const [course, setCourse] = useState({
        title:'',
        description:'',
        estimatedTime:'',
        materialsNeeded: '',
        userId: authenticatedUser.id,
        errors:[]
      });
    
  const submit = () => {
    const { from } = props.location.state || { from: { pathname: '/authenticated' } };
    console.log(course)
    data.createCourse(course, credentials)
      .then((errors) => {
        if (errors.length) {
          console.log(errors)
          setCourse({ ...course, ...{errors }});
          } else {
          props.history.push(from);
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
        <h1>Create Course</h1>
        <div>
          <Form 
            cancel={cancel}
            errors={course.errors}
            submit={submit}
            submitButtonText="Create Course"
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
                        onChange={change}  />
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

export default CreateCourse;