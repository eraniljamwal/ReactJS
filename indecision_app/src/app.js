const app = {
    title: 'I am the title',
    subTitle: 'I am subtitle',
    options: []
}

function getOptions(options){
    return options.length > 0 ? "Here are your options" : "No Options" ;
}

const addOption = (event) => {
    event.preventDefault();
    let optionVal = event.target.elements.options.value;
    app.options.push(optionVal);
    event.target.elements.options.value = '';
    renderDom();
}

const removeAll = () => {
    app.options = [];
    renderDom();
}

const pickOption = () => {
    const optionIndex = Math.floor(Math.random() * app.options.length);
    console.log(app.options[optionIndex]);
}

const renderDom = () => {
    const template = ( 
        <div>
            <h1>{app.title}</h1>
            {app.subTitle && <p>{app.subTitle}</p>}
            <p>Legth of option values are: {app.options.length}</p>
            <button disabled = {app.options.length === 0} onClick={pickOption}>Whats Should I Do?</button>  <button onClick={removeAll}>Remove All</button>            
            <ol>
                {app.options.map((val)=>{
                        return <li key={val}>{val}</li>
                })}
            </ol>
            <form onSubmit={addOption}>
                <input name="options"></input>
                <button>Add Option</button>
            </form>
        </div>
    );

    const appRoot = document.getElementById('app');
    ReactDOM.render(template, appRoot);
}
renderDom();


