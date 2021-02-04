//Ejemplo 1
let title = document.querySelector('#title');

document.getElementById('red').addEventListener('click', function () {
    title.style = 'color:red;';
});
document.getElementById('blue').addEventListener('click', function () {
    title.style = 'color:blue;';
});
document.getElementById('black').addEventListener('click', function () {
    title.style = 'color:black;';
});