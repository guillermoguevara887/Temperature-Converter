const input1 = document.querySelector('#input1');


const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

function toCelsius() {
    const celsius = ((+input1.value - 32) * (5 / 9));
    result.innerHTML = "The result in Celsius is: " + celsius.toFixed(2);
}


