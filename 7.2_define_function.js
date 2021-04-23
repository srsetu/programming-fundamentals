// Define

function sayHello() {
    console.log('Hello');
}

// Invoke

// sayHello();

const sayHello2 = function () {
    console.log('Say hello again');
};

console.log(sayHello2);

function adder(a, b) {
    console.log(a + b);
}

const x = adder(5, 10);

console.log(x);

const minus = (a, b) => {
    console.log(a - b);
};

minus(10, 5);
