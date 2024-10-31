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

const pintaMe = document.querySelector('#pinta-me');
const colorButtons = document.querySelector('.color-button'); 
function alteracor(){
    
}
pintaMe.addEventListener('click', alteracor);

