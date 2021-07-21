
window.onload = function() {
    let one = document.getElementById('1');
    let two = document.getElementById('2');
    let three = document.getElementById('3');
    let four = document.getElementById('4');
    let five = document.getElementById('5');
    let six = document.getElementById('6');
    let seven = document.getElementById('7');
    let eight = document.getElementById('8');
    let nine = document.getElementById('9');
    let zero = document.getElementById('0');
    let point = document.getElementById('point');
    let equals = document.getElementById('equality');
    let plus = document.getElementById('plus');
    let minus = document.getElementById('minus');
    let divide = document.getElementById('divide');
    let multiply = document.getElementById('multiply');
    let display = document.getElementsByClassName('display')[0];
    console.log(display);

    let total = '';
    let operandTwo = '';
    let operation = null;

    // Refactor: add event listener on buttons div, get button from event

    function resetTotal() {
        operandTwo = total;
        total = '';
    }

    multiply.addEventListener('click', function() {
        operation = 'multiply';
        resetTotal();
    });

    divide.addEventListener('click', function() {
        operation = 'divide';
        resetTotal();
    });

    minus.addEventListener('click', function() {
        operation = 'minus';
        resetTotal();
    });
    
    plus.addEventListener('click', function() {
        operation = 'plus';
        resetTotal();
    });

    one.addEventListener('click', function() {
        total = total + '1';
        display.innerHTML = total;
    });

    point.addEventListener('click', function() {
        total = total + '.';
        display.innerHTML = total;
    });

    two.addEventListener('click', function() {
        total = total + '2';
        display.innerHTML = total;
    });

    three.addEventListener('click', function() {
        total = total + '3';
        display.innerHTML = total;
    });

    four.addEventListener('click', function() {
        total = total + '4';
        display.innerHTML = total;
    });

    five.addEventListener('click', function() {
        total = total + '5';
        display.innerHTML = total;
    });

    six.addEventListener('click', function() {
        total = total + '6';
        display.innerHTML = total;
    });

    seven.addEventListener('click', function() {
        total = total + '7';
        display.innerHTML = total;
    });

    eight.addEventListener('click', function() {
        total = total + '8';
        display.innerHTML = total;
    });

    nine.addEventListener('click', function() {
        total = total + '9';
        display.innerHTML = total;
    });

    zero.addEventListener('click', function() {
        total = total + '0';
        display.innerHTML = total;
    });

    equals.addEventListener('click', function() {
        let result = '';
        switch (operation) {
            case 'multiply':
                result = Number(total) * Number(operandTwo);
                break;
            case 'divide':
                result = Number(total) / Number(operandTwo);
                break;
            case 'plus':
                result = Number(total) + Number(operandTwo);
                break;
            case 'minus':
                result = Number(total) - Number(operandTwo);
                break;
        }
        display.innerHTML = result;
        total = result.toString();
        operandTwo = '';
    });
}