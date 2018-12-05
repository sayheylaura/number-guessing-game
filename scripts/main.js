'use strict';

// Recojo los elementos HTML que necesito
const userNumberEl = document.querySelector('.user-number');

const submitBtnEl = document.querySelector('.submit-btn');

const tipBoxEl = document.querySelector('.tip-box');

const attemptsMeterEl = document.querySelector('.attempts-meter');

// Guardo el número aleatorio generado en una constante
const generatedRandomNumber = getRandomNumber(100);

// Acumulador: declaro una variable que necesito para contar cuántas veces se pulsa el botón submit
let acc = 0;

// Muestro en la consola el número aleatorio generado al cargarse la página. Como logueo la constante en la que lo he guardado, solo se genera un número cada vez
console.log(generatedRandomNumber);

// Función que genera un número aleatorio hasta un máximo dado
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

// Función que compara el número que introduce la usuaria con el número aleatorio generado. En función de la respuesta, se pinta un feedback diferente en la caja de pistas
function compareNumbers() {
    const userNumberValue = parseInt(userNumberEl.value);
    console.log(userNumberValue);

    if (userNumberValue === generatedRandomNumber) {
        tipBoxEl.innerHTML = '¡HAS GANADO, CAMPEONA!';
    } else if (userNumberValue < generatedRandomNumber) {
        tipBoxEl.innerHTML = 'Demasiado bajo';
    } else {
        tipBoxEl.innerHTML = 'Demasiado alto';
    }
}

// Función callback que se ejecuta cuando la usuaria pulsa el botón "Prueba"
function handleSubmitBtn(event) {
    // Evito que al pulsar el botón "Prueba" se recargue la página (funcionalidad por defecto del type "submit")
    event.preventDefault();

    // Ejecuto la función que compara el número introducido por la usuaria y el número aleatorio, y que pinta un feedback distinto dependiendo del caso
    compareNumbers();

    //Contador: cada vez que se pulsa el botón "Prueba", el acumulador suma 1 y su valor se pinta en la caja HTML del contador
    acc += 1;
    attemptsMeterEl.innerHTML = acc;
}

submitBtnEl.addEventListener('click', handleSubmitBtn);