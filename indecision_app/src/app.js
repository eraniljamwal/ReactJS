class Indecision extends React.Component{
    render(){
        const Title = "Indecision";
        const subTitle = "Subtitle will goes here..";
        const options = ['Item 1',"Item 2", "Item 4"];
        return(
            <div>
                <Header  Title= {Title} subTitle={subTitle} />
                <Action />
                <Options options = {options}/>
                <AddOptions/>
            </div>
        )
    }
}

class Header extends React.Component{
    render(){
        return (
            <div>
                <h1>{this.props.Title}</h1>
                <p>{this.props.subTitle}</p>
            </div>
        );
    };
};

class Action extends React.Component{
    whatShould(){
        console.log("What Should button clicked");
    }
    render(){
        return (
            <button onClick={this.whatShould}> What should I do ?</button>
        );
    };
};

class Options extends React.Component{
    constructor(props){
        super(props);
        this.removeAll = this.removeAll.bind(this);
    }
    
    removeAll(){
        console.log('Remove All'+ this.props);
    }

    render(){
        return(
            <div>
                Item Total: {this.props.options.length} | <button onClick={this.removeAll}> Remove All</button>             
                <ul>
                    {this.props.options.map((item)=>{
                        //return <li key={item}>{item}</li>
                        return <Option key={item} optionText={item} /> 
                    })}
                </ul>
            </div>
        );
    }
}
 
class Option extends React.Component{
    render(){
        return(
            <div>
                {this.props.optionText}                
            </div>
        )
    }
}


class AddOptions extends React.Component{
    handleAddOption(e){
        e.preventDefault();
        console.log(e.target.elements.option.value);
        e.target.elements.option.value.trim() && alert(e.target.elements.option.value);
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<Indecision />, document.getElementById('app'));
