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

  switchNameHandler = () => {
    //console.log('was clicked');
    this.setState({
      persons:[
        {name : "Anil Singh", age: 29},
        {name : "Sunil Singh", age: 32},
        {name : "Ekta Rani", age: 28},
        {name : "Neha Mahajan", age: 27},
      ]
    });
  };

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
        <Person 
          name={this.state.persons[0].name} 
          age = {this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age = {this.state.persons[1].age}/>
        <Person 
          name={this.state.persons[2].name} 
          age = {this.state.persons[2].age}
          click={this.switchNameHandler}
          changed={this.nameChangedHandler}>
          My hobby is chess</Person>
        <Person 
          name={this.state.persons[3].name} 
          age = {this.state.persons[3].age}/> 
      </div>); 
    }
    
    return (
      <div className="App">
        <h1>Hi, Welcome to My first React App</h1> 
        <button 
          style={style}
          onClick={this.togglePersonHandler}>Change Name</button>


          {persons
            /* {
            this.state.showPerson === true ? 
            <div> 
              <Person 
                name={this.state.persons[0].name} 
                age = {this.state.persons[0].age}/>
              <Person 
                name={this.state.persons[1].name} 
                age = {this.state.persons[1].age}/>
              <Person 
                name={this.state.persons[2].name} 
                age = {this.state.persons[2].age}
                click={this.switchNameHandler}
                changed={this.nameChangedHandler}>
                My hobby is chess</Person>
              <Person 
                name={this.state.persons[3].name} 
                age = {this.state.persons[3].age}/> 
            </div> 
            : null } */}
      </div> 
    );
    //return React.createElement('div', {className:'App'}, React.createElement('h1',null,'Hi I am Anil'));
  }
}

export default App;
