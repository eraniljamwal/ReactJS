class Person {
    constructor(name="Anonymus", age= 19){
        this.name = name,
        this.age = age
    }

    getGreetings(){
        return `Hi ${this.name} your current age is ${this.age}. `;
    }
}

class Students extends Person{
    constructor(name, age, major){
        super(name, age);  // If we extend class then we must use super keyword to use parent class constructor.
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    }

    getGreetings(){
        let description = super.getGreetings(); // call parent class greetings function
        if(this.hasMajor()){
            description += ` your major is ${this.major}`;
        }
        return description;
    }
}

class Traveler extends Person{
    constructor(name, age, homeLocation){
        super(name,age);
        this.homeLocation = homeLocation;
    }
    
    getGreetings(){
        let description = super.getGreetings();

        if(this.homeLocation){
            description+= `${this.name} has home location: ${this.homeLocation}. `;
        }
        return description;
    }
}

const anil = new Students('Anil Singh', 28, 'IT');
console.log(anil.getGreetings());

const sunil = new Students('Sunil Singh', 32);
console.log(sunil.getGreetings());

const subash = new Traveler("Subash Chandra", 31, 'Orissa');
console.log(subash.getGreetings());

const nithin = new Traveler("Nithin EV", 30);
console.log(nithin.getGreetings());