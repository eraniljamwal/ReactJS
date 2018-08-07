import React, {Component} from 'react';
import Title from './Title';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import {Route} from 'react-router-dom';


class Main extends Component{

    constructor(){
        super()
        this.state = {
            posts : [{
                id: 0,
                description: "beautiful landscape",
                imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
                "3919321_1443393332_n.jpg"
                }, {
                id: 1,
                description: "Aliens???",
                imageLink: "https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=" +
                "08323785_735653395_n.jpg"
                }, {
                id: 2,
                description: "On a vacation!",
                imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
                },   
                {
                id: 3,
                description: "On a vacation!",
                imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVolufz9Y5TrOFAPWrhvSmG4q-KpiVT3I9StLBtpudaQO1S467fg"
                },{
                id: 4,
                description: "On a vacation!",
                imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMQ12q7OuFbDV92neaX0Ek-of1DFVBHvT1zpGzKxG5Jh1MhZ7l"
                },{
                id: 5,
                description: "On a vacation!",
                imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPFY2xpsGvonFVtlB7OnPmVr57Re4q9E_DMpUllrHusDS7dAhs"
                },{
                id: 6,
                description: "On a vacation!",
                imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ94UWFnNhHpUGzvkQ1o3mCguYzAbOYo9r6FyEoJbSFVW1bWzivow"
                }],        
                screen : 'allPhoto' 
        }       
        this.removePhoto = this.removePhoto.bind(this); 
    }

    removePhoto(postRemoved){
        console.log(postRemoved.description);
        this.setState((state) => ({
            posts : state.posts.filter( post => post !== postRemoved)
        }))
    }

    addPhoto(postSubmitted){
        this.setState(
            state => ({
                posts:state.posts.concat([postSubmitted])
            })                                                                              
        )
    }

    componentDidUpdate(prevProps,prevState) {
        //alert('ComponentdidUpdate');
        //console.log(prevState.posts); // Previous State
        //console.log(this.state); // Updaed State
    }

    render(){
        //console.log(this.state.posts);
        return(  
            <div>                
                <Route exact path="/" render={()=>(
                <div> 
                    <Title title={'My Gallery'}/>                    
                    <PhotoWall posts = {this.state.posts} onRemovePhoto = {this.removePhoto} onNavigate = {this.navigate} /> 
                </div>
                )} />
                                                           
                <Route path="/AddPhoto" render={({history})=>(
                <div>   
                    <Title title={'Add Photo'}/>   
                    <AddPhoto onAddphoto={(addedPost) => {
                        console.log(addedPost);
                        this.addPhoto(addedPost)
                        history.push('/')
                    }}
                    />
                </div>
                )}/>                       
            </div>
        )       
    }
}
export default Main;