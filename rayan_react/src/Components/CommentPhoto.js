import React, {Component} from 'react';

class CommentPhoto extends Component{
    render(){
        console.log(this.props.match.params.id);
        return (
            
            <div className="row comment_container">
                <div className="col-sm-6">.col-sm-4</div>
                <div className="col-sm-6">.col-sm-4</div>
            </div>
        ); 
    }   
}

export default CommentPhoto;
