

document.addEventListener("DOMContentLoaded", () => {


//evento1
const frase = document.querySelector('#mensagem');

function mudaFrase() {
    // Verifica o texto atual e altera conforme necessário
    if (frase.innerHTML === '1. Passa por aqui!') { 
        frase.innerHTML = '1. Obrigado por passares!';
    }
}
// Função para restaurar a frase original
function restauraFrase() {
    frase.innerHTML = '1. Passa por aqui!';
}

frase.addEventListener('mouseover', mudaFrase);
frase.addEventListener('mouseout', restauraFrase);

//evennto2
const pintaMe = document.querySelector("#pinta-me");
const colorButtons = document.querySelectorAll(".color-button");

function alteraCor(event) {
  const color = event.target.innerText.toLowerCase();
  pintaMe.style.color = color;
}

colorButtons.forEach((button) => {
  button.addEventListener("click", alteraCor);
});

//evento3
const texto = document.querySelector("#caixatexto1");
const cores = ["red", "green", "blue", "yellow", "gray"];
let colorIndex = 0;

function alteraCorBackground() {
  texto.style.backgroundColor = cores[colorIndex];
  colorIndex = (colorIndex + 1) % cores.length;
}

texto.addEventListener("input", alteraCorBackground);
texto.addEventListener("change", alteraCorBackground);

//evento4
 document.querySelector("select").onchange = function () {
  document.querySelector("body").style.backgroundColor = this.value;
};

//evento5

if (!localStorage.getItem("counter")) {
  localStorage.setItem("counter", 0);
}

const butao = document.querySelector(".contador");
const numero = document.querySelector("#numero");

let counter = Number(localStorage.getItem("counter"));

numero.innerText = counter;

function aumentaNumero() {
  counter++;
  numero.innerText = counter;
  localStorage.setItem("counter", counter);
}

butao.addEventListener("click", aumentaNumero);


//evento6

const nome = document.querySelector("#nome");
const idade = document.querySelector("#idade");
const dados = document.querySelector("#dados");
const form = document.querySelector("#form");

form.onsubmit = (e) => {
  e.preventDefault();
  dados.innerHTML = `Olá, o ${nome.value} tem ${idade.value}!`;
};


//evento7

if (!localStorage.getItem("counterSpan")) {
  localStorage.setItem("counterSpan", 0);
}

const span = document.querySelector("span");
function count() {
  let counterSpan = Number(localStorage.getItem("counterSpan"));
  counterSpan++;
  span.innerHTML = counterSpan;
  localStorage.setItem("counterSpan", counterSpan);
}
setInterval(count, 1000);

});