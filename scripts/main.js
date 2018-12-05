'use strict';

// Recojo los elementos HTML que necesito
const userNumberElement = document.querySelector('.user-number');

const submitBtnElement = document.querySelector('.submit-btn');

const tipBoxElement = document.querySelector('.tip-box');

const attemptsMeterElement = document.querySelector('.attempts-meter');

// Guardo el número aleatorio generado en una constante
const generatedRandomNumber = getRandomNumber(100);

// Declaro una variable que necesito para contar cuántas veces se pulsa el botón submit
let acc = 0;

// Función que genera un número aleatorio hasta un máximo dado
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

// Función que compara el número que introduce la usuaria con el número aleatorio generado
function handleSubmitBtn(event) {
    event.preventDefault();

    const userNumberValue = parseInt(userNumberElement.value);

    console.log(userNumberValue);

    if (userNumberValue === generatedRandomNumber) {
        tipBoxElement.innerHTML = '¡HAS GANADO, CAMPEONA!';
    } else if (userNumberValue < generatedRandomNumber) {
        tipBoxElement.innerHTML = 'Demasiado bajo';
    } else if (userNumberValue > generatedRandomNumber) {
        tipBoxElement.innerHTML = 'Demasiado alto';
    }

    //Necesito almacenar en acc el número de veces que se pulsa el botón de submit, y luego recoger eso en el attemptsMeterElement

    //attemptsMeterElement.innerHTML = numberOfAttempts;
}

submitBtnElement.addEventListener('click', handleSubmitBtn);