import { add, multiply } from "./math";

const eventHandler = () => {
    const addButton = document.getElementById('add');
    const multiplyButton = document.getElementById('multiply');
    const number1 = document.getElementById('number-1');
    const number2 = document.getElementById('number-2');
    const result = document.getElementById('result');
    const updateDomWithAddedNumbers = () => {
        //result.innerHTML = number1.value + " + " + number2.value + " = " + add(number1.value, number2.value);
        if(number1.value == "" || number2.value == "") {
            alert("Enter a value for both numbers!");
        } else {
        result.innerHTML = "Sum = " + add(number1.value, number2.value);
        }
    }

    const updateDomWithMultipliedNumbers = () => {
        if(number1.value == "" || number2.value == "") {
            alert("Enter a value for both numbers!");
        } else {
        result.innerHTML = "Product = " + multiply(number1.value, number2.value);
        }
    }

    addButton.addEventListener('click', updateDomWithAddedNumbers);
    multiplyButton.addEventListener('click', updateDomWithMultipliedNumbers);
}

export {eventHandler};