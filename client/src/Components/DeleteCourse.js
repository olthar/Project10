import React, { useContext } from 'react';
import { NewContext } from '../Context';
import { NavLink } from 'react-router-dom';

export default (props) => {
  const { credentials, data } = useContext(NewContext);
  let id = props.match.params.id

  //When submit is pressed, the users credentials are passed along with the ID of the course to verify and delete that course.
  function handleSubmit(event) {
    event.preventDefault();
    data.deleteCourse(id, credentials)
      .then((errors) => {
        //If user doesn't have access to the course you get directed to the forbidden page
        if (errors === 403) {
          props.history.push('/forbidden');
          console.log("You do not have authorization to delete this course")
        //If user puts a course number in that doesn't exist, they are directed to can't find. 
        } else if (errors === 404) {
          props.history.push('/notfound');
        } else {
          props.history.push('/');
        }
      })
      .catch((error) => {
        props.history.push('/error');
      });
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button className="button" type="submit">Confirm Delete</button>
        <NavLink to={`/courses/${id}`} className="button button-secondary">Cancel</NavLink>     
      </form>
    </div>
  );
}
