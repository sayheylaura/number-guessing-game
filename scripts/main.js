'use strict';

const userNumberElement = document.querySelector('.user-number');

const submitBtnElement = document.querySelector('.submit-btn');

const tipBoxElement = document.querySelector('.tip-box');

const attemptsMeterElement = document.querySelector('.attempts-meter');

const generatedRandomNumber = getRandomNumber(100);

let acc = 0;

// Función que genera un número aleatorio hasta un máximo dado
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

function handleSubmitBtn(event) {
    event.preventDefault();

    console.log(userNumberElement.value);

    if (parseInt(userNumberElement.value) === generatedRandomNumber) {
        tipBoxElement.innerHTML = '¡HAS GANADO, CAMPEONA!';
    } else if (parseInt(userNumberElement.value) < generatedRandomNumber) {
        tipBoxElement.innerHTML = 'Demasiado bajo';
    } else if (parseInt(userNumberElement.value) > generatedRandomNumber) {
        tipBoxElement.innerHTML = 'Demasiado alto';
    }

    //Necesito almacenar en acc el número de veces que se pulsa el botón de submit, y luego recoger eso en el trymeterelement
    
    //attemptsMeterElement.innerHTML = numberOfAttempts;
}

submitBtnElement.addEventListener('click', handleSubmitBtn);