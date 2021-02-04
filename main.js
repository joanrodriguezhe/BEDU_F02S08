//Ejemplo 1
let title = document.querySelector('#title1');

document.getElementById('red').addEventListener('click', function () {
    title.style = 'color:red;';
});
document.getElementById('blue').addEventListener('click', function () {
    title.style = 'color:blue;';
});
document.getElementById('black').addEventListener('click', function () {
    title.style = 'color:black;';
});

//Ejemplo2
let title2 = document.querySelector('#title2');
let input2 = document.getElementById('text');

input2.addEventListener('input', function (event) {
    title2.textContent = event.target.value;
})