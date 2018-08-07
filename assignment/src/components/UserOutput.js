import React, { Component } from 'react'

class UserOutput extends Component {
  render() {
    return (
      <div>
        UserOutput :
        {this.props.userName}
      </div>
    )
  }
}
export default UserOutput;
