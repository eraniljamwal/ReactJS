import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons:[
      {name : "Anil", age: 28},
      {name : "Sunil", age: 25},
      {name : "Ekta", age: 38},
      {name : "Neha", age: 48},
    ],
    otherHandler: "Some other Handler",
    showPerson: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons:[
        {name : "Anil Singh", age: 29},
        {name : "Sunil Singh", age: 32},
        {name : event.target.value, age: 28},
        {name : "Neha Mahajan", age: 27},
      ]
    })
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
                    age = {person.age} />
          }
        )}
      </div>); 
    }
    
    return (
      <div className="App">
        <h1>Hi, Welcome to My 2nd React App</h1> 
        <button 
          style={style}
          onClick={this.togglePersonHandler}>Change Name</button>

        {persons}
      </div> 
    );
    //return React.createElement('div', {className:'App'}, React.createElement('h1',null,'Hi I am Anil'));
  }
}

export default App;
