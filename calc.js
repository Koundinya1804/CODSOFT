let expression='';
function appendNumber(number){
    expression=expression + number;
    updateDisplay();
}
function appendOperator(operator){
    expression=expression + operator;
    updateDisplay();
}
function calculate(){
    expression=eval(expression).toString();
    updateDisplay();
}
function clearDisplay(){
    expression='';
    updateDisplay();
}
function updateDisplay(){
    document.getElementById('display').value=expression;
}