let a = {
    a: 'Hello',
    b: 'World',
};
let b = {
    a: 'Hello',
    b: 'World',
    c: 'JS',
};

console.log(JSON.stringify(a) === JSON.stringify(b));
