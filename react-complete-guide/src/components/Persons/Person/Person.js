import React from 'react';
import './Person.css';
const person = (props) => {
    return (
        <div className="Persons">
            <p onClick={props.click}> Hi I'm {props.name} and my Age is {props.age} </p>
            {props.children}
           <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default person;