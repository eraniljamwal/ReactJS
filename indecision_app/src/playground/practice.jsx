const user = {
    name: "Sunil Singh",
    age: 17,
    location: 'Philadelphia'
}
const userName = "Anil";
const userAge = 28;
const userLocation = "Jammu and Kashmir"; 

function getLocation(location){
    if(location){
        return <p>Location: {location}</p>
    }
}

const templateTwo = (
    <div>
        <h1>Name: {user.name ? user.name.toUpperCase() : 'Anonymus'}</h1>
        {user.age >= 18 && <p>Age: {user.age}</p> } 
        {getLocation(user.location)}
    </div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);