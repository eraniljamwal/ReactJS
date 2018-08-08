import React from 'react';
import Photo from './Photo';
import {Link} from 'react-router-dom';
function PhotoWall(props){
    return (
        <div className="container">
            {/* <button className="addIcon" onClick={props.onNavigate}>+</button> */}
            <Link className="addIcon" to='AddPhoto'></Link>
            {/*  <a className="addIcon" onClick={props.onNavigate} href="#AddPhoto"></a> */}
            {props.posts
                .sort(function(x,y){ 
                    return y.id - x.id                
                })
                .map((post, index) => <Photo key = {index}  {...props}  post={post} index= {index} />)}
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