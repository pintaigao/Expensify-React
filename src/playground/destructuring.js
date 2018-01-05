const person = {
    name : "Pintaigao",
    age:26,
    location:{
        city:"New York",
        temp : 92
    }
};

const {name:firstName = "Anonymous" ,age} = person;

console.log(`${firstName} is ${age}.`);

if(person.location.city && person.location.temp){
    console.log("It is ${}")
}


//Array destruction
const address = ["422","140","NJ","07087"];

const [_,city,state = "New York",zip] = address;

console.log(`You are in ${street}`);

const item = ["Coffee (hot)",''];

