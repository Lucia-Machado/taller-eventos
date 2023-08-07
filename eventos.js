const div = document.querySelector('#div');

function saludar() {
    alert('Hola! Soy el div');
}

div.addEventListener("click", saludar);