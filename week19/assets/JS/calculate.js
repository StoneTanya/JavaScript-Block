const resultButton = document.getElementById('calc');

class Calculator {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    static sum(num1, num2) {
        return num1 + num2;
    }
    static minus(num1, num2) {
        return num1 - num2;
    }
    static divide(num1, num2) {
        return num1 / num2;
    }
    static mult(num1, num2) {
        return num1 * num2;
    }
};

resultButton.addEventListener('click', function () {
    const number1 = Number(document.getElementById("calc-num1").value);
    const number2 = Number(document.getElementById("calc-num2").value);
    let calculate = new Calculator(number1, number2);
    console.log(calculate);
    let result

    switch (option) {
        case '+':
            result = Calculator.sum(number1, number2);
            break;
        case '-':
            result = Calculator.minus(number1, number2);
            break;

        case '*':
            result = Calculator.mult(number1, number2);
            break;

        case '/':
            result = Calculator.divide(number1, number2);
            if (number2 === 0) {
                result = ("На ноль делить нельзя!");
            }
            break;
    }
    document.getElementById("result").innerHTML = result;
});