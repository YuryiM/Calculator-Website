let previousExpression = '';
let currentExpression = '';
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

const setCurrentInput = num => {
    if (currentInput == 0) currentInput = '';
    currentDisplay.innerHTML = currentInput += num;
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
    setCurrentInput(0);    
});

oneBtn.addEventListener('click', () => {
    setCurrentInput(1);
});

twoBtn.addEventListener('click', () => {
    setCurrentInput(2);
});

threeBtn.addEventListener('click', () => {
    setCurrentInput(3);
});

fourBtn.addEventListener('click', () => {
    setCurrentInput(4);
});

fiveBtn.addEventListener('click', () => {
    setCurrentInput(5);
});

sixBtn.addEventListener('click', () => {
    setCurrentInput(6);
});

sevenBtn.addEventListener('click', () => {
    setCurrentInput(7);
});

eightBtn.addEventListener('click', () => {
    setCurrentInput(8);
});

nineBtn.addEventListener('click', () => {
    setCurrentInput(9);
});

plusBtn.addEventListener('click', () => {
    previousDisplay.innerHTML = currentInput += ' + ';
    currentInput = '';
});

minusBtn.addEventListener('click', () => {
    previousDisplay.innerHTML = currentInput += ' + ';
    currentInput = '';
});
    
multiplyBtn.addEventListener('click', () => {
    previousDisplay.innerHTML = currentInput += ' + ';
    currentInput = '';
});

divideBtn.addEventListener('click', () => {
    previousDisplay.innerHTML = currentInput += ' + ';
    currentInput = '';
});

equalsBtn.addEventListener('click', () => {

});

decimalBtn.addEventListener('click', () => {

});
