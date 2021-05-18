const body = document.body;
const heading = document.querySelector('#heading');
const main = document.querySelector('#main');
const link = document.querySelector('a');

const newDiv = document.createElement('div');
newDiv.innerHTML = '<h1>New Hello World</h1>';

// heading.remove();
heading.style.color = 'red';
link.setAttribute('href', 'https://google.com');
body.appendChild(newDiv);

// heading.setAttribute('class', heading.getAttribute('class') + ' newClass');

// heading.addEventListener('click', function () {
//     heading.classList.toggle('newClass', false);
// });

main.appendChild(newDiv);

console.log(heading.classList);
