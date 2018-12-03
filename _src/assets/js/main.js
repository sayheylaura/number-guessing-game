'use strict';

const userNumberElement = document.querySelector('.user-number');

const submitBtnElement = document.querySelector('.submit-btn');

function handleSubmitBtn(event) {
    
}

submitBtnElement.addEventListener('click', handleSubmitBtn);


// Función que genera un número aleatorio hasta un máximo dado
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

// Se pinta en la consola un número random hasta 100
console.log('> ' + getRandomNumber(100));

