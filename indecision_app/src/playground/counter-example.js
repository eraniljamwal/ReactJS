class Counter extends React.Component{

    constructor(props){
        super(props);
        this.plusOneHandler = this.plusOneHandler.bind(this);
        this.minusOneHandler = this.minusOneHandler.bind(this);
        this.resetHandler = this.resetHandler.bind(this);
        this.state = {
            count : 0
        }
    }

    plusOneHandler(){
        this.setState((prevState)=>{
            return {
                count: prevState.count + 1
            } 
        })
    }

    minusOneHandler(){
        this.setState((prevState) => {
            return {
                count: prevState.count -1
            }
        })
    }

    resetHandler(){
        this.setState(() => {
                return {
                    count : 0
                }
        })
    }

    render(){
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.plusOneHandler}>+1</button>
                <button onClick={this.minusOneHandler}>-1</button>
                <button onClick={this.resetHandler}>Reset</button>
            </div>
        );
    }
}


ReactDOM.render(<Counter />, document.getElementById('app'))