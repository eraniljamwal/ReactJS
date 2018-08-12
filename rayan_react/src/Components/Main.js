import React, {Component} from 'react';
import Title from './Title';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import {Route} from 'react-router-dom';
import Single from './Single';


class Main extends Component{

    state = { loading: true }

    componentDidMount(){
        this.props.startLoadingPost().then(()=>{
            this.setState({loading: false})
        })
        this.props.startLoadingComments()
    }

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

                <Route path="/single/:id" render={(params)=>(
                <div>
                    <Title title={'Comment Detail'}/> 
                    <Single  loading= {this.state.loading} {...this.props} {...params}/>
                </div>
                
                )}

                />           

            </div>
        )       
    }
}
export default Main;
// <div>
//     <Title title={'Comment Photo'}/>   
//     <CommentPhoto />
// </div>