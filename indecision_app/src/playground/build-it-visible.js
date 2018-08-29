let visibility = false;
console.log(visibility);
const toggleButton = () => {
    visibility = !visibility;
    reRenderDom();
}
const reRenderDom = () => {
    var template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleButton}> 
                {visibility ? "Hide Detials" : "Show Details"}
            </button>
            {visibility && <p>Here are some details you can see now</p>}
        </div>
    );
    ReactDOM.render(template,document.getElementById('app'))
}
reRenderDom();