
export function removePost(index){ // action creator
    return{
        type : "REMOVE_PHOTO",
        index
    }
}

export function addPost(post){
    return {
        type: "ADD_POST",
        post
    }

}

