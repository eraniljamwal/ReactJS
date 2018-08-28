import React, {Component} from 'react';
import Person from './Person/Person';


class Persons extends Component{

    componentWillMount(){
       // console.log("[Persons.js] Component Will Mount");
    }

    componentDidMount(){
        //console.log('[Persons.js] Component Did Mount');
    }

    componentWillReceiveProps(nextProps){
        //console.log('[Persons.js] ComponentWillReceiveProps', nextProps);
    }
      
    shouldComponentUpdate(nextProps, nextState){
        //console.log('[Persons.js] shouldComponentUpdate',nextProps, nextState);
       return false;
    }


    render(){
        //console.log('[Persons.jS] render');
        return this.props.persons.map( (person,index) => {
            return <Person 
            click = {() => this.props.clicked(index)}
            name={person.name} 
            age ={person.age} 
            key={person.id} 
            changed={(event) => this.props.changed(event, person.id)}
            />
        });
    }
}    

export default Persons;



