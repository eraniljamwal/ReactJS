// Var keyword
var fullName = "Anil";
var fullName = "Sunil";
console.log(fullName);

// let Keyword
let job = "Engineer";
job = "Designer"
console.log(job);


// const Keyword
const dob = 1990;
//job = "Designer"
console.log(dob);

// Var keyword Function Scope
// function getPetName(){
//     var petName = "Tinku";
//     return petName;
// }
// getPetName();
// console.log(petName);

const getfirstName = () => {
    const personName = "Anil Singh";
    let firstName;
    if(fullName){
        firstName = personName.split(" ")[0];
        console.log(firstName);
    }
 }


console.log(getfirstName());