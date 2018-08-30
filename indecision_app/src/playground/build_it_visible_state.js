class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.toggleButton = this.toggleButton.bind(this);
        this.state = {
            visibility : true
        };
    };

    toggleButton(){
        console.log('toggleButton'+this.state.visibility);
        this.setState((prevState)=>{
            return {
                visibility: !prevState.visibility
            } 
        });
        console.log('toggleButton'+this.state.visibility);
    }

    render(){
        return(
            <div>
                <h1>Visibility Toggle</h1>               
                <button onClick={this.toggleButton}> 
                    {this.state.visibility ? "Hide Detials" : "Show Details"}
                </button>
            { this.state.visibility && <p>Here are some details you can see now</p>}
         </div>            
        );
    }
}
ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// let visibility = false;
// console.log(visibility);
// const toggleButton = () => {
//     visibility = !visibility;
//     reRenderDom();
// }
// const reRenderDom = () => {
//     var template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleButton}> 
//                 {visibility ? "Hide Detials" : "Show Details"}
//             </button>
//             {visibility && <p>Here are some details you can see now</p>}
//         </div>
//     );
//     ReactDOM.render(template,document.getElementById('app'))
// }
// reRenderDom();