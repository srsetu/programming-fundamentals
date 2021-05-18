const heading = document.querySelector('h1');
const form = document.querySelector('form');
const input = document.querySelector('#text');
const submit = document.querySelector('input[type="submit"]');
const para = document.querySelector('#show-input');
const listItem = document.querySelector('li');

submit.addEventListener('click', myFunc);

function myFunc() {
    console.log('I was clicked');
}
