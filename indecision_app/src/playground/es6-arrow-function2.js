// Arguments object(unable to pass more function parameters and access them using argument obeject) - No longer bound with arrow function 

const add = (a, b) => {
    //console.log(arguments);
    return a+b;
}
console.log(add(10,5, 1000));


// this keyword no longer bound
const user =  {
    name : "Anil Singh",
    cities : ['Philadelphia', 'New York', 'Dublin'],
    printPlaceLived: function(){
        // this.cities.forEach((city) => {
        //     console.log(`${this.name} has lived in ${city}`)
        // })

        return this.cities.map((city)=> `${this.name} has lived in ${city}`);
    }    
}
console.log(user.printPlaceLived());


const multiplier = {
    numbers : [1,2,3],
    multiplyBy: 2,
    multiply : function(){
        return this.numbers.map((num) => num * this.multiplyBy);
    }
}

console.log(multiplier.multiply());