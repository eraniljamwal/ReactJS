import React, {Component} from 'react';
import Title from './Title';
import List from './List';

class Main extends Component{
    render(){
        return <div>
                    <Title title={'Champions'}/>
                    <List tasks = {['Anil Sing','Sunil Singh']}/>
                    <List  tasks = {['Nancy','Neha']}/>
                </div>
    }
}
export default Main;