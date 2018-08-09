import _posts from '../data/posts';
import {combineReducers} from 'redux';


function comments(state={},action){
    switch(action.type){
        case 'ADD_COMMENT': 
        //console.log(action.postId)
        

        if(!state[action.postId]){
            return {...state, [action.postId]:[action.comment]}
        }else{
            return {...state, [action.postId]:[...state[action.postId], action.comment]}
        }

        default: return state
    }
    return state;
}

function posts(state = _posts, action){
    //console.log(action.index);
    //console.log('hi');
    //console.log("Posts Reducer");
    switch(action.type){
        //case 'REMOVE_PHOTO' : return [0,1];
        case 'REMOVE_PHOTO': return [...state.slice(0,action.index), ...state.slice(action.index + 1)]
        case 'ADD_POST' : return [...state, action.post]
        default : return state
    }
}

const rootReducer = combineReducers({posts,comments});
export default rootReducer;