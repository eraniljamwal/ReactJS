import React, {Component} from 'react';
class List extends Component{
    render(){
        console.log('items', this.props.taks);
        return (
                <ol>
                    {this.props.tasks.map((task,index) => <li key={index}>{task}</li>)}
                </ol>
            )
    }
}

export default List;