
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
const textoBackground = document.querySelector("#caixatexto2");
const submitButton = document.querySelector("#submeter2");

function alteraBackground() {
  const color = textoBackground.value;
  document.body.style.backgroundColor = color;
}

submitButton.addEventListener("click", alteraBackground);

//evento5

const butao = document.querySelector(".contador");
const numero = document.querySelector("#numero");

function aumentaNumero() {
  numero.innerText = Number(numero.innerText) + 1;
}

butao.addEventListener("click", aumentaNumero);
