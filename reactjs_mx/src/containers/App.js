import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props){
    super(props);
    console.log("[App.js] Constructor hooks: ",props);
    this.state = {
      persons: [
        {id: '1', name: 'Sunny', age: 28},
        {id: '2', name: 'An', age: 26},
        {id: '3', name: 'Teena', age: 30},
      ],
      showPersons: false
    }  
  }

  componentWillMount(){
    console.log("[App.js] Component Will Mount");
  }

  componentDidMount(){
    console.log('[App.js] Component Did Mount');
  }

  switchNameHandler = (newName) => {
    //console.log('Button Clicked');
    this.setState({
      persons: [
        {name: newName, age: 29},
        {name: 'Bunny Jamwal', age: 27},
        {name: 'Teena Chambyal', age: 31},
      ]      
    })
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p)=>{
      return p.id === id
    });

    const person = { ...this.state.persons[personIndex]}
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex]  = person;

    this.setState({ persons : persons })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  } 

  deletePersonHandler = (personIndex) => {
    // persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons : persons});
  }


  render() {
    console.log('[App.jS] render');
    const style = {
      backgroundColor: 'Green',
      color:'white',
      font:'inherit',
      padding:'8px',
      border: '1px 1px 1px #ccc',
      cursor: 'pointer'
    };

    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          <Persons 
            persons = {this.state.persons}
            clicked = {this.deletePersonHandler}
            changed = {this.nameChangeHandler}  
          />
        </div>
        )
        style.backgroundColor = 'Red';
    }

    
    return (
      <div className="App">
        <Cockpit style = {style} clicked= {this.togglePersonHandler} persons = {this.state.persons}/>
        {persons}
        
      </div>
      //React.createElement("div", {className : "App"}, React.createElement("h1",null, "Hi I am first React App"))
    );
  }
}

export default App;
