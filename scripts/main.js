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

// Muestro en la consola el número aleatorio generado al cargarse la página. Como logueo la constante en la que lo he guardado, solo se genera un número cada vez
console.log(generatedRandomNumber);

// Función que genera un número aleatorio hasta un máximo dado
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

// Función que compara el número que introduce la usuaria con el número aleatorio generado. En función de la respuesta, se pinta un feedback diferente en la caja de pistas
function compareNumbers() {
    const userNumberValue = parseInt(userNumberElement.value);
    console.log(userNumberValue);

    if (userNumberValue === generatedRandomNumber) {
        tipBoxElement.innerHTML = '¡HAS GANADO, CAMPEONA!';
    } else if (userNumberValue < generatedRandomNumber) {
        tipBoxElement.innerHTML = 'Demasiado bajo';
    } else {
        tipBoxElement.innerHTML = 'Demasiado alto';
    }
}

// Función que compara el número que introduce la usuaria con el número aleatorio generado. Es un callback que se ejecuta cuando la usuaria pulsa el botón "Prueba"
function handleSubmitBtn(event) {
    event.preventDefault();

    compareNumbers();

    //Necesito almacenar en acc el número de veces que se pulsa el botón de submit, y luego recoger eso en el attemptsMeterElement

    //attemptsMeterElement.innerHTML = numberOfAttempts;
}

submitBtnElement.addEventListener('click', handleSubmitBtn);