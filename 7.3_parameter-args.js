function adder(a, b) {
    console.log(a + b);
}

// adder(10, 5);

// parameter -> a, b
// argument -> 10, 5

function adder(a, b) {
    console.log(arguments[0]);
}

//adder(10, 5);

function arrLength(arr) {
    console.log(arguments[0].length);
}

let arr = [1, 3, 4, 5];

arrLength(arr);
