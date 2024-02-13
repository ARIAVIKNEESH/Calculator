let expression = '';

function appendNumber(number) {
    expression += number;
    document.getElementById('result').value = expression;
}

function operate(operator) {
    expression += operator;
    document.getElementById('result').value = expression;
}

function calculate() {
    try {
        expression = eval(expression);
        document.getElementById('result').value = expression;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

function clearResult() {
    expression = '';
    document.getElementById('result').value = '';
}
