let previousExpression = '';
let currentExpression = '0';
let previousInput = '';
let currentInput = '0';

// Display window objects
let previousDisplay = document.getElementById('previous-expression');
let currentDisplay = document.getElementById('current-expression');

// Button objects
let clearBtn = document.getElementById('clear-btn');
let deleteBtn = document.getElementById('delete-btn');
let zeroBtn = document.getElementById('zero-btn');
let oneBtn = document.getElementById('one-btn');
let twoBtn = document.getElementById('two-btn');
let threeBtn = document.getElementById('three-btn');
let fourBtn = document.getElementById('four-btn');
let fiveBtn = document.getElementById('five-btn');
let sixBtn = document.getElementById('six-btn');
let sevenBtn = document.getElementById('seven-btn');
let eightBtn = document.getElementById('eight-btn');
let nineBtn = document.getElementById('nine-btn');
let plusBtn = document.getElementById('plus-btn');
let minusBtn = document.getElementById('minus-btn');
let multiplyBtn = document.getElementById('multiply-btn');
let divideBtn = document.getElementById('divide-btn');
let equalsBtn = document.getElementById('equals-btn');
let decimalBtn = document.getElementById('decimal-btn');

const calculate = () => {
    const simplifiedExpression = currentExpression.replace(/ /g, '');
    switch(simplifiedExpression.charAt(1)){
        case '+':
            currentExpression = parseInt(simplifiedExpression.charAt(0), 10) + parseInt(simplifiedExpression.charAt(2), 10);
        case '-':
            currentExpression = parseInt(simplifiedExpression.charAt(0), 10) - parseInt(simplifiedExpression.charAt(2), 10);
        case '*':
            currentExpression = parseInt(simplifiedExpression.charAt(0), 10) * parseInt(simplifiedExpression.charAt(2), 10);
        case '/':
            currentExpression = parseInt(simplifiedExpression.charAt(0), 10) / parseInt(simplifiedExpression.charAt(2), 10);
    }
    previousExpression += ' = ';
}

clearBtn.addEventListener('click', () => {
    previousDisplay.innerHTML = '';
    currentDisplay.innerHTML = '0';
    previousExpression = '';
    currentExpression = '';
});

deleteBtn.addEventListener('click', () => {
    currentDisplay.innerHTML = currentExpression.slice(0, -1);
});

zeroBtn.addEventListener('click', () => {
    if (currentInput != '0'){
        currentDisplay.innerHTML = currentExpression += '0';
    }
    
});

oneBtn.addEventListener('click', () => {
    if (currentInput != '0'){
        currentDisplay.innerHTML = currentExpression += '1';
    }
    else if (currentInput == '0'){
        currentExpression = '';
        currentDisplay.innerHTML = currentExpression += '1';
    }
});

twoBtn.addEventListener('click', () => {
    if (currentInput != '0'){
        currentDisplay.innerHTML = currentExpression += '2';
    }
    else if (currentInput == '0'){
        currentExpression = '';
        currentDisplay.innerHTML = currentExpression += '2';
    }
});

threeBtn.addEventListener('click', () => {
    if (currentInput != '0'){
        currentDisplay.innerHTML = currentExpression += '3';
    }
    else if (currentExpression == '0'){
        currentExpression = '';
        currentDisplay.innerHTML = currentExpression += '3';
    }
});

fourBtn.addEventListener('click', () => {
    currentDisplay.innerHTML = currentExpression += '4';
});

fiveBtn.addEventListener('click', () => {
    currentDisplay.innerHTML = currentExpression += '5';
});

sixBtn.addEventListener('click', () => {
    currentDisplay.innerHTML = currentExpression += '6';
});

sevenBtn.addEventListener('click', () => {
    currentDisplay.innerHTML = currentExpression += '7';
});

eightBtn.addEventListener('click', () => {
    currentDisplay.innerHTML = currentExpression += '8';
});

nineBtn.addEventListener('click', () => {
    currentDisplay.innerHTML = currentExpression += '9';
});

plusBtn.addEventListener('click', () => {
    previousDisplay.innerHTML = currentExpression += ' + ';
});

minusBtn.addEventListener('click', () => {
    previousDisplay.innerHTML = currentExpression += ' - ';
});
    
multiplyBtn.addEventListener('click', () => {
    previousDisplay.innerHTML = currentExpression += ' * ';
});

divideBtn.addEventListener('click', () => {
    previousDisplay.innerHTML = currentExpression += ' / ';
});

equalsBtn.addEventListener('click', () => {

});

decimalBtn.addEventListener('click', () => {

});
