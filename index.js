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

const setCurrentInput = input => {
    if (currentInput == 0) currentInput = '';
    currentInput += input;
    currentDisplay.innerHTML = currentInput;
}

clearBtn.addEventListener('click', () => {
    previousDisplay.innerHTML = '';
    currentDisplay.innerHTML = '0';
    currentInput = '';
    currentExpression = '';
});

deleteBtn.addEventListener('click', () => {
    currentDisplay.innerHTML = currentInput = String(currentInput).slice(0, -1);
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
    buttonOperation('+');
});

minusBtn.addEventListener('click', () => {
    buttonOperation('-');
});
    
multiplyBtn.addEventListener('click', () => {
    buttonOperation('*');
});

divideBtn.addEventListener('click', () => {
    buttonOperation('/');
});

function buttonOperation(operator){
    if (currentInput && (previousDisplay.innerHTML.includes('=') || previousDisplay.innerHTML == '')){
        console.log("HEY!");
        console.log(currentExpression);
        currentExpression = '';
        currentExpression += currentInput + ' ' + operator + ' ';
        console.log(currentExpression);
        previousDisplay.innerHTML = currentExpression;
        currentDisplay.innerHTML = currentInput = '';
    }
    else if (currentInput && !previousDisplay.innerHTML.includes('=')){
        console.log();
        currentExpression += currentInput;
        previousDisplay.innerHTML = currentExpression + ' =';
        let value = calculate();
        currentInput = '';
        currentExpression = value + ' ' + operator + ' ';
        currentDisplay.innerHTML = '';
        previousDisplay.innerHTML = value + ' ' + operator + ' ';
    }
}

function calculate() {
    // Splits expression into 3 items
    const simplifiedExpressionArr = currentExpression.split(' ');
    const numOne = parseFloat(simplifiedExpressionArr[0], 10);
    const numTwo = parseFloat(simplifiedExpressionArr[2], 10);
    let solution;
    // Switch statement which takes in the operator
    switch (simplifiedExpressionArr[1]) {
        case '+':
            solution = numOne + numTwo;
            break;
        case '-':
            solution = numOne - numTwo;
            break;
        case '*':
            solution = numOne * numTwo;
            break;
        case '/':
            solution = numOne / numTwo;
    }
    // Rounds to hundreths place
    return Math.round(solution * 100)/100;
}

equalsBtn.addEventListener('click', () => {
    if(String(currentExpression).match(/(\+|-|\*|\/)/g)){
        console.log("testeeee");
        previousDisplay.innerHTML += currentInput;
        currentDisplay.innerHTML = '';
        currentExpression += currentInput;
        let value = calculate();
        currentInput = value;
        currentDisplay.innerHTML = value;
        currentExpression = value;
        previousDisplay.innerHTML += ' =';
    }
});



decimalBtn.addEventListener('click', () => {
    setCurrentInput('.');
});
