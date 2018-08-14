import React from 'react';

const cockpit = (props) => {   
    const classes= [];
    if(props.persons.length <= 2){
      classes.push('red');
    }

    if(props.persons.length <= 1){
      classes.push('bold');
    }
    return (
        <div>
            <h1>Hi, I am first React App</h1>
            {/* <button onClick={this.switchNameHandler.bind(this,'anil')}>Cick Me</button> */}
            {/* <button onClick={this.switchNameHandler.bind(this,'Sunil')}>Cick Me</button> */}
            {/* <button style={style} onClick={() => {this.switchNameHandler('Ekta')}} >Switch Name</button> */}
            <button style={props.style} onClick= {props.clicked}>Switch Name</button>
            <p className={classes.join(' ')}>This is really Working</p>
        </div>
    );
};
export default cockpit;
