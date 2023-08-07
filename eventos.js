const div = document.querySelector('#div');
const btn = document.querySelector('#btn');

function saludarDiv() {
    alert('Hola! Soy el div');
}
function saludarBtn() {
    alert('Hola!');
    event.stopPropagation();
}

div.addEventListener("click", saludarDiv);
btn.addEventListener("click", saludarBtn)
