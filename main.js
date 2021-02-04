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

//Ejemplo3
window.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
        document.body.style.background = "lightblue";
    }

    if (event.key == "Enter" && event.ctrlKey) {
        document.body.style.background = "orange";
    }
});
window.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        document.body.style.background = "";
    }
})


//Reto 1

let globo = document.querySelector('#globo');
let globoSize = 20;

globo.style.fontSize = `${globoSize}px`;

const updateGloblo = (event) => {
    event.preventDefault();
    if (event.key == "ArrowUp") {
        if (globoSize > 80) {
            globo.textContent = '💥';
            window.removeEventListener("keydown", updateGloblo);
        } else {
            globoSize *= 1.1;
        }
    } else if (event.key == "ArrowDown") {
        if (globoSize > 0) {
            globoSize *= .9;
        }
    }
    globo.style.fontSize = `${globoSize}px`;
}
window.addEventListener("keydown", updateGloblo)

//Reto 2
let modal = document.querySelector('#modal');
document.querySelector('#modal-image').src = 'https://picsum.photos/300/200';

document.querySelector('#openModal').addEventListener('click', function () {
    modal.style.display = 'block';
});
document.querySelector('.close').addEventListener('click', function () {
    modal.style.display = 'none';
});

//Reto 3

const createTabs = (node) => {
    let div = document.createElement('div');
    div.id = 'buttons';
    div.style.display = 'flex';
    [...node.children].forEach(tab => {
        tab.style.display = 'none';
        let button = document.createElement('button')
        button.textContent = tab.getAttribute('data-tabname');

        button.addEventListener('click', function () {
            [...node.children].slice(1).forEach(tabDiv => {
                tabDiv.style.display = tabDiv == tab ? 'block' : 'none';
                [...document.querySelector('#buttons').children].forEach(button => {
                    button.style.color = 'black';
                });
                this.style.color = 'red';
            });
        });
        div.appendChild(button);
    })
    node.insertBefore(div, node.firstChild);
}

createTabs(document.querySelector('#tab-panel'));
