import React from 'react';
import {Link} from 'react-router-dom';

function Photo(props){
    const post = props.post
    return (       
            
            <div className="col-sm-4">
                <div  className="thumbnail">
                <Link to = {`/single/${props.post.id}`}>
                    <img className= "img-rounded" src={post.imageLink} alt={post.description } />
                </Link>
                <div className="caption">
                    {post.description}
                </div>                
                <button className="btn btn-primary" onClick= {()=> {
                    props.startRemovingPost(props.index, post.id);
                    props.history.push('/');
                }}
                >Remove</button>
                
                
                    <button type="button" className="btn btn-default btn-success comment_btn" >
                        <span className="glyphicon glyphicon-comment"></span>   
                        {(props.comments[props.post.id]) ? props.comments[post.id].length :  0 } 
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