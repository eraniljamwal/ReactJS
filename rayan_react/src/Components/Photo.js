import React from 'react';


function Photo(props){
    return <figure className="figure">      
                <img className= "photo" src={props.post.imageLink} alt={props.post.description } />
                <figcaption>{props.post.description}</figcaption>   
                <div className="button-container">
                    <button className="remove-button" 
                    onClick= {()=> props.onRemovePhoto(props.post) }
                    >Remove</button>
                </div>
            </figure>
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