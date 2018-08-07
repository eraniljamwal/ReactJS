import React,{Component} from 'react';

class AddPhoto extends Component{
    constructor(){
        super()
        this.handleSubmit =this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        const imageLink = event.target.elements.link.value;
        const description = event.target.elements.description.value;
        const post = {
            id: Number(new Date()),
            description: description,
            imageLink:imageLink
        }
        if(description && imageLink){
            this.props.onAddphoto(post)
        }

    }

    render(){
        
        return (
            <div className="addPhotoForm" >
                <form className="form" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Add Link URL Here.." name="link" />
                    <input type="text" placeholder="Add Description Here..." name="description"/>
                    <button></button>
                </form>
            </div>           
        )
    }
}
export default AddPhoto;