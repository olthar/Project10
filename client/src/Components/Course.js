import React from 'react';
import { NavLink } from 'react-router-dom';


//Creates random colours for the course modules. 
function randomRGB() {
    let rgb = Math.floor(Math.random() * 256 ); 
    return rgb ;
}
function randomBG() {
    let color = "rgb(" + randomRGB()+', 200,'+randomRGB()+", 0.3)";
    return color;
}

const Course = props => (
    <div className="grid-33">
        <NavLink to={`/courses/${props.data.id}`} className="course--module course--link" style={{backgroundColor: randomBG()}} >
            <h4 className="course--label">Course</h4>
            <h3 className="course--title">{props.data.title}</h3>
        </NavLink>
    </div> 
);

export default Course;