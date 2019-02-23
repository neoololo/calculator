function checkOperator(operator, number) {

    switch(operator) {
        case 'plus':
            number += +display.innerHTML;
            return number;        
        case 'minus': 
            number -= +display.innerHTML;
            return number;        
        case 'mult': 
            number *= +display.innerHTML;
            return number;
        case 'div': 
            number /= +display.innerHTML;
            return number;     
        case 'result': 
            number = +display.innerHTML;
            return number;
    }
}

function calc(num, operator, nextNum) {
    if (operator !== '' && !nextNum) {
        num = checkOperator(operator, num);
    } else if (!nextNum) {
        num = +display.innerHTML;
    }

    return num;
}

window.onload = function() {
    var display = document.getElementById('display');
    var buttons = document.getElementsByClassName('cell');
    for (var i = 0; i < buttons.length; i++) {
        var num1, num2, num = 0, operator = '', nextNum = false;

        buttons[i].onclick = function() {
            if (this.innerHTML == '+') {
                num = calc(num, operator, nextNum);
                display.innerHTML = num;
                operator = 'plus';
                nextNum = true;
            } else if (this.innerHTML == '-') {
                num = calc(num, operator, nextNum);
                display.innerHTML = num;
                operator = 'minus';
                nextNum = true;
            } else if (this.innerHTML == '*') {
                num = calc(num, operator, nextNum);
                display.innerHTML = num;
                operator = 'mult';
                nextNum = true;
            } else if (this.innerHTML == '/') {
                num = calc(num, operator, nextNum);
                display.innerHTML = num;
                operator = 'div';
                nextNum = true;
            } else if (this.innerHTML == 'C') {
                display.innerHTML = '';
                operator = '';
                nextNum = false;
                num = 0;
            } else if (this.innerHTML == '=') {
                console.log('=');
                num = calc(num, operator, nextNum);
                display.innerHTML = num;
                operator = 'result';
                nextNum = true;
            } else {
                if (nextNum) {
                    nextNum = false;
                    display.innerHTML = this.innerHTML;
                } else {
                    display.innerHTML += this.innerHTML;
                }               
            }            
        };
    }
};