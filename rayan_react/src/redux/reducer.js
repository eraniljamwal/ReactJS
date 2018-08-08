import post from '../data/posts';

const postReducer = function posts(state = post, action){
    //console.log(action.index);
    //console.log('hi');

    switch(action.type){
        //case 'REMOVE_PHOTO' : return [0,1];
        case 'REMOVE_PHOTO': return [...state.slice(0,action.index), ...state.slice(action.index + 1)]
        case 'ADD_POST' : return [...state, action.post]
        default : return state
    }
}

export default postReducer;