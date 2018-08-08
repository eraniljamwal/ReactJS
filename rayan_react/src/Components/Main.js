import React, {Component} from 'react';
import Title from './Title';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import {Route} from 'react-router-dom';


class Main extends Component{
    render(){
        return(  
            <div>                
                <Route exact path="/" render={()=>(
                    <div>
                        <Title title={'My Gallery'}/> 
                        <PhotoWall {...this.props} />                   
                        {/* <PhotoWall posts = {this.state.posts} onRemovePhoto = {this.removePhoto} onNavigate = {this.navigate} />  */}
                    </div>
                )} />
                                                           
                <Route path="/AddPhoto" render={()=>(
                <div>                    
                    <Title title={'Add Photo'}/>   
                    <AddPhoto {...this.props}/>
                </div>
                )}/>              

            </div>
        )       
    }
}
export default Main;
// <div>
//     <Title title={'Comment Photo'}/>   
//     <CommentPhoto />
// </div>