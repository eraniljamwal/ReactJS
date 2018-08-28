import React, {Component} from 'react';
import './Person.css';
import PropTypes from 'prop-types';

class Person extends Component{
    constructor(props){
        super(props);
        console.log("[Person.js] Constructor hooks: ",props);
        this.state = {
            persons: [
            {id: '1', name: 'Sunny', age: "28"},
            {id: '2', name: 'An', age: 26},
            {id: '3', name: 'Teena', age: 30},
            ],
            showPersons: false
        }  
        this.inputElement = React.createRef();
    }

    componentWillMount(){
        console.log("[Person.js] Component Will Mount");
    }

    componentDidMount(){
        console.log('[Person.js] Component Did Mount');
        
        if(this.props.position === 0){
            this.inputElement.current.focus();
        }
    }
    render(){
        console.log('[Person.js] Component Did Mount'); 
                return (
                    <div className="person" >
                        <p onClick={this.props.click}>Hi I am {this.props.name} and my age is {this.props.age}  </p>
                        {this.props.children}
                        <input 
                        // ref = {(inp) => {this.inputElement = inp}}
                        ref = {this.inputElement}
                        type="text" onChange={this.props.changed} value={this.props.name} />
                    </div>
                )
    }  
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default Person;
