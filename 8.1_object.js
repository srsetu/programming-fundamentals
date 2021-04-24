let name1 = 'Saidur Rahman';
let addr1 = 'Manikganj';
let age1 = 80;

let name2 = 'John';
let addr2 = 'Dhaka';
let age2 = 45;

let name3 = 'John';
let addr3 = 'Dhaka';
let age3 = 54;

let person = new Object();

// console.log(person);
// computed member access
person['name'] = 'Saidur';
person['addr'] = 'Manikganj';

// console.log(person['name']);

// member access
// console.log(person.addr);

// Object Literal
let anotherPerson = {
    name: 'Saidur',
    address: 'Manikganj',
    age: 45,
    birthYear: function birthYear() {
        return 2021 - 45;
    },
};

// property
// method

console.log(anotherPerson.birthYear());
