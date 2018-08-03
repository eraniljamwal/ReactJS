import React from 'react';
import Photo from './Photo';
import {Link} from 'react-router-dom';
function PhotoWall(props){
    return (
        <div>
            <Link className="addIcon" to = "/AddPhoto"></Link>
            {props.posts.map((post, index) => <Photo key = {index} post={post} onRemovePhoto = {props.onRemovePhoto}/>)}
        </div>
            
    );
}


// class PhotoWall extends Component{
//     render() {
//         return (
//             <div>
//                 {this.props.posts.map((post, index) => <Photo key = {index} post={post} />)};
//             </div>
                
//         );
//     }
// }
export default PhotoWall;