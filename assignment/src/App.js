import React, { Component } from 'react';
import './App.css';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';

class App extends Component {

  state = {
      posts:{
        username: 'Anil Singh'
      }
  }

  usernameChangedHandler = (event) => {
    this.setState({username: event.target.value});
  }

  render() {
    return (
      <div className="App">
      Welcome to Our Main App!
      <UserInput name="anil"  
          currentName={this.state.posts.username}  change= {this.usernameChangedHandler} />
      <UserOutput userName={this.state.posts.username} />
      <UserOutput  userName="Sunil" />
      
      </div>
    );
  }
}
// function user(){
//   console.log('input');
// }
export default App;
