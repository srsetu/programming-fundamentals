// let name = 'Setu';

// if (name == 'Setu') {
//     console.log('Hello ' + name);
// } else if(name == 'Tonni') {
//     console.log('Your name is ' + name);
// } else if (name == 'Sagor') {
//     console.log('Your name is ' + name);
// } else {
//     console.log('Your name is ' + name);
// }

// Switch Statements
// switch (name) {
//     case 'Setu': console.log('Your name is ' + name);
//     break;
//     case 'Tonni': console.log('Your name is ' + name);
//     break;
//     case 'Setu': console.log('Your name is ' + name);
//     break;
//     default: console.log('Your name is ' + name);
// }

// Weekday
let day = new Date().getDay();
let dayName;

// console.log(day);

switch (day) {
    case 0: dayName = 'Sunday';
    break;
    case 1: dayName = 'Monday';
    break;
    case 2: dayName = 'Tuesday';
    break;
    case 3: dayName = 'Wednesday';
    break;
    case 4: dayName = 'Thursday';
    break;
    case 5: dayName = 'Friday';
    break;
    case 6: dayName = 'Saturday';
    break;
}
console.log('Ajker bar hosse: ' + dayName);