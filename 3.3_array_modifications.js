let arr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']

// insert
// arr.push(0) --> Element last item hoye add hoy.
// arr.unshift(5, 10) --> Element first item hoye add hoy.

// arr.splice(2, 0, 'Rose')

// remove
// arr.pop() --> Last item remove kore

arr.shift()

console.log(arr);


// arr.splice(1, 2);
// replace
// arr.splice(2, 1, 'March')

// search

// let month = 'March';
// let isFound = false;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == month) {
//         console.log('Item has been found, Index No: ' + i);
//         isFound = true;
//         break;
//     }
// }

// if (isFound == false) {
//     console.log('Nothing Found');
// }