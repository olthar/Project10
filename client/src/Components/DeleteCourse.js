import React, { useState, useContext, useEffect } from 'react';
import { NewContext } from '../ContextIndex';
import { NavLink } from 'react-router-dom';

export default (props) => {
  const { authenticatedUser, credentials, data } = useContext(NewContext);

  function handleSubmit(event) {
    const { from } = props.location.state || { from: { pathname: '/authenticated' } };
    let id = props.match.params.id
    event.preventDefault();
    console.log(id, credentials)
    data.deleteCourse(id, credentials)
    .then((errors) => {
      if (errors.length) {
        console.log(errors)
        // setCourse({ ...course, ...{errors }});
        } else {
        props.history.push(from);
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
        <NavLink to={`/courses/delete`} className="button button-secondary">Cancel</NavLink>     
      </form>
    </div>
  );
}
