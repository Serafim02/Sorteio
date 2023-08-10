let button = document.getElementById('Sortear')

button.addEventListener('click', function () {
    let min = parseInt(document.getElementById('min').value);
    let max = parseInt(document.getElementById('max').value);

    let resultado = Math.floor(Math.random() * (max - min + 1) + min);

    document.querySelector('#resultado').textContent = resultado
})