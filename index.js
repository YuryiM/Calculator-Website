// Declares variables to be used later and assigns default values
let currentExpression = '';
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

// Updates currentInput based on passed argument
// Accepts number or decimal
function setCurrentInput(input) {
    // Clears current input if it is default value of 0
    if (currentInput == 0) currentInput = '';
    // Adds argument to end of currentInput
    currentInput += input;
    currentDisplay.innerText = currentInput;
}

// Returns value based on what is in currentExpression
// Only evaluates 2 numbers at a time
function calculate() {
    let solution;
    // Splits expression into 3 items
    const simplifiedExpressionArr = currentExpression.split(' ');
    const numOne = parseFloat(simplifiedExpressionArr[0], 10);
    const numTwo = parseFloat(simplifiedExpressionArr[2], 10);
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

// Performs button based on operator argument
// Possible arguments: [+, -, *, /]
function buttonOperation(operator){
    // Runs if currentInput has a value and if previousDisplay is empty or just completed an operation
    if (currentInput && (previousDisplay.innerText.includes('=') || previousDisplay.innerText == '')){
        currentExpression = '';
        previousDisplay.innerText = currentExpression += currentInput + ' ' + operator + ' ';
        currentDisplay.innerText = currentInput = '';
    }
    else if (currentInput && !previousDisplay.innerText.includes('=')){
        currentExpression += currentInput + ' =';
        previousDisplay.innerText = currentExpression;
        currentExpression = calculate() + ' ' + operator + ' ';
        previousDisplay.innerText = currentExpression;
        // Clears current information
        currentInput = '';
        currentDisplay.innerText = '';
    }
}


function deleteInput(){
    currentDisplay.innerText = currentInput = String(currentInput).slice(0, -1);
}

function equals(){
    // Runs if current expression contains an operator, otherwise does nothing
    if(String(currentExpression).match(/(\+|-|\*|\/)/g)){
        previousDisplay.innerText += currentInput;
        currentDisplay.innerText = '';
        currentExpression += currentInput;
        let value = calculate();
        currentInput = value;
        currentDisplay.innerText = value;
        currentExpression = value;
        previousDisplay.innerText += ' =';
    }
}

// Clears previous and current displays
clearBtn.addEventListener('click', () => {
    previousDisplay.innerText = '';
    currentDisplay.innerText = '0';
    currentInput = '';
    currentExpression = '';
});

deleteBtn.addEventListener('click', () => {
    deleteInput();
});

window.addEventListener('keydown', e => {
    switch (e.key){
        case '0':
            setCurrentInput(0); 
            break;
        case '1':
            setCurrentInput(1); 
            break;
        case '2':
            setCurrentInput(2); 
            break;
        case '3':
            setCurrentInput(3); 
            break;
        case '4':
            setCurrentInput(4); 
            break;
        case '5':
            setCurrentInput(5); 
            break; 
        case '6':
            setCurrentInput(6); 
            break;
        case '7':
            setCurrentInput(7); 
            break;
        case '8':
            setCurrentInput(8); 
            break;
        case '9':
            setCurrentInput(9); 
            break;
        case '+':
            buttonOperation('+');
            break;
        case '-':
            buttonOperation('-'); 
            break;
        case '*':
            buttonOperation('*'); 
            break;
        case '/':
            buttonOperation('/');
            break;
        case 'Delete':
            deleteInput();
            break;
        case 'Backspace':
            deleteInput();
            break; 
        case 'Enter':
            equals();
            break;
        case '=':
            equals();
            break;   
        case '.':
            setCurrentInput('.');
            break;
        default:
            break;
    }
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

decimalBtn.addEventListener('click', () => {
    setCurrentInput('.');
});

equalsBtn.addEventListener('click', () => {
    equals();
});