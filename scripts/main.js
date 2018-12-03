'use strict';

const userNumberElement = document.querySelector('.user-number');

const submitBtnElement = document.querySelector('.submit-btn');

const tipBoxElement = document.querySelector('.tip-box');

const tryMeterElement = document.querySelector('.try-meter');

const generatedRandomNumber = getRandomNumber(100);

// Función que genera un número aleatorio hasta un máximo dado
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

// Se pinta en la consola un número random hasta 100
console.log('> ' + getRandomNumber(100));

function handleSubmitBtn(event) {
    event.preventDefault();

    if (parseInt(userNumberElement.value) === generatedRandomNumber) {
        tipBoxElement.innerHTML = '¡HAS GANADO, CAMPEONA!';
    } else if (parseInt(userNumberElement.value) < generatedRandomNumber) {
        tipBoxElement.innerHTML = 'Demasiado bajo';
    } else if (parseInt(userNumberElement.value) > generatedRandomNumber) {
        tipBoxElement.innerHTML = 'Demasiado alto';
    }
}

submitBtnElement.addEventListener('click', handleSubmitBtn);