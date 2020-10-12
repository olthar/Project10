import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { NewContext } from '../Context';

const Header = (props) => {
  const { authenticatedUser } = useContext(NewContext);
  // let welcome;

  if (authenticatedUser){
    console.log("user")
  } else {
    console.log("no user")
  }

  return (
    <div className="header">
      <div className="bounds">
        <h1 className="header--logo">Courses</h1>
        <nav>
          {authenticatedUser ? (
            <React.Fragment>
              <span>Welcome, {authenticatedUser.firstName}!</span>
              <Link to="/signout">Sign Out</Link>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Link className="signup" to="/signup">Sign Up</Link>
              <Link className="signin" to="/signin">Sign In</Link>
            </React.Fragment>
          )}
        </nav>
      </div>
    </div>
  );
}

export default Header;