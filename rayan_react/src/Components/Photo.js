import React from 'react';
import {Link} from 'react-router-dom';

function Photo(props){
    return (       
        
            <div className="col-sm-4">
                <div  className="thumbnail">
                <Link to={`/CommentPhoto/${props.post.id}`}>
                    <img className= "img-rounded" src={props.post.imageLink} alt={props.post.description } />
                </Link>
                <div className="caption">
                    {props.post.description}
                </div>                
                <button className="btn btn-primary" onClick= {()=> {
                    props.removePost(props.index);
                }}
                >Remove</button>
                
                
                    <button type="button" className="btn btn-default btn-success comment_btn" >
                        <span className="glyphicon glyphicon-comment"></span> Comment
                    </button>
                
                </div>
            </div>
        
    )
}
// class Photo extends Component{
//     //const post = this.props.post;
//     render() {
//         return <figure className="figure">
      
//                     <img className= "photo" src={this.props.post.imageLink} alt={this.props.post.description } />
//                     <figcaption>{this.props.post.description}</figcaption>   
//                     <div className="button-container">
//                         <button className="remove-button">Remove</button>
//                     </div>
//                 </figure>
                
    
//     }
// }
export default Photo;