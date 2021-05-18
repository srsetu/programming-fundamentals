// Read the problem carefully
// Analyse the problem
// Breakdown into smaller chunk
// Pseudo Code
// Research
// Compile within your brain
// Submit Your Code

/*
1. If the number is odd or even
2. If the number is greater than 500
3. Reverse Array Element
*/

// var fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
// let num = [1, 2, 3];
// num.reverse();
// fruits.reverse();

// console.log(num[0]);
function oddOrEven(array) {
    //enter code here
    // add all array number
    // check it is odd or even (%)
    // print result

    let result = 0;

    for (let i = 0; i < array.length; i++) {
        result = result + array[i];
    }

    if (result % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}

let arr = [1];

oddOrEven(arr);
