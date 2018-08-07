import React, { Component } from 'react'

class UserInput extends Component {

  render() {
    return (
      <div>
        UserInput
        <input type="text" name="name" onChange={this.props.change} value={this.props.currentName} />
      </div>
    )
  }
}
export default UserInput;
