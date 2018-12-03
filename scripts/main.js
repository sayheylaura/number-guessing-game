'use strict';

const userNumberElement = document.querySelector('.user-number');

const submitBtnElement = document.querySelector('.submit-btn');

const tipBoxElement = document.querySelector('.tip-box');

const tryMeterElement = document.querySelector('.try-meter');

function handleSubmitBtn(event) {
    event.preventDefault();
    console.log(userNumberElement.value);
}

submitBtnElement.addEventListener('click', handleSubmitBtn);


// Función que genera un número aleatorio hasta un máximo dado
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

// Se pinta en la consola un número random hasta 100
console.log('> ' + getRandomNumber(100));

