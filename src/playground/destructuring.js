// Object destructuring

// const person = {
//     name: 'dude',
//     age: 20,
//     loc: {
//         city:'Espoo',
//         temp: 28
//     }
// };

// const { name: firstName = 'anon', age} = person;

// console.log(`${firstName} is ${age}.`);

// const {city, temp: temperature} = person.loc;

// if (city && temperature){
//     console.log(`weather is ${temperature} at ${city}.`);

// }

// const book = {
//     title: 'ego is stuff',
//     author: 'Ryan hold',
//     publisher: {
//         // name: 'Penquin'
//     }
// }

// const {name: PublisherName = 'self Published'} = book.publisher;
// console.log(PublisherName);


// Array destructuring

const address = ['23424 S stret', 'philadelpfia', 'pennysylvania', '23242'];

const [, city, state] = address;
console.log(`You're in ${state} ${city}`);

const kafe = ['coffee', '2', '3', '4'];

const [coffee, , price] = kafe;

console.log(`${coffee} costs ${price}e `)