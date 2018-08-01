import React, { Component } from 'react';
import './App.css';
import Person from '..components/Persons/Person/Person';

class App extends Component {

  state = {
    persons:[
      { id: 'abc', name : "Anil", age: 28},
      { id: 'def', name : "Sunil", age: 25},
      { id: 'ghi', name : "Ekta", age: 38},
      { id: 'jkl', name : "Neha", age: 48},
    ],
    otherHandler: "Some other Handler",
    showPerson: false
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons;
    
    //const persons = this.state.persons.slice();
    
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow });
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.userId === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;

    const persons = [...this.state.persons];    
    persons[personIndex] = person;

    this.setState({ persons : persons });
  }


  render() {
    const style= {
      backgroundColor: 'Grey',
      color: 'white'
    };

    
    let persons = null;
    if(this.state.showPerson){
      persons = (<div> 
        {this.state.persons.map((person,index) => {
            return <Person 
                    click = {() => this.deletePersonHandler(index)}
                    name= {person.name} 
                    age = {person.age} 
                    key = {person.id}
                    changed = {(event) => this.nameChangedHandler(event,person.id)} />
          }
        )}
      </div>); 
      style.backgroundColor = 'red'
    }
    
    const classes = [];
    if(this.state.persons.length <=  2){
      classes.push("red");
    }
    if(this.state.persons.length <=1){
      classes.push("bold");
    }

    return (
      <div className="App">
        <newClass />
        <h1>Hi, Welcome to My 2nd React App</h1> 
        <button 
          className = {classes.join(' ')}
          onClick={this.togglePersonHandler}>Change Name</button>
        {persons}
      </div> 
    );
    //return React.createElement('div', {className:'App'}, React.createElement('h1',null,'Hi I am Anil'));
  }
}

export default App;
