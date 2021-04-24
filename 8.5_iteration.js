let obj = {
    name: 'Saidur',
    addr: 'Manikganj',
    age: 45,
};

// Object.keys() -> array
// console.log(Object.keys(obj));
// for (let el of Object.keys(obj)) {
//     console.log(obj[el]);
// }

// Object.values() -> array
// console.log(Object.values(obj));

// Object.entries() -> array
// console.log(Object.entries(obj));

// For..in
for (let el in obj) {
    console.log(obj[el]);
}
