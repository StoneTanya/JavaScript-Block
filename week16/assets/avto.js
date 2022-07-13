// значения из текстовых инпутов

const milage =  document.getElementById('Milage');
const year = document.getElementById('year'); 
const inputs = document.querySelectorAll('input');

// значения из радио-кнопок
const radioTransmissionType = document.querySelectorAll('input[name="transmission"]');
const radioMotorType = document.querySelectorAll('input[name="motor"]');

// значения из options
const optionAutoMark = document.querySelector('#autoMark');

// цветные кнопки
const colorButtons = document.querySelectorAll('.formSection__ColorItem')
const colors = [
    {
        name: 'red',
        value: 1000
    },
    {
        name: 'green',
        value: 2500
    },
    {
        name: 'yellow',
        value: 2000
    },
    {
        name: 'purple',
        value: 5000
    },
    {
        name: 'black',
        value: 0
    },
    {
        name: 'pink',
        value: 3000 
    }
]

let currentColorValue = colors[4].value;

// вывод результата: кнопка и поле вывода суммы

let button = document.getElementById('calc-button');
let priceResult = document.getElementById('calc-result');

let basePrice;
let totalPrice;

milage.addEventListener('input', () => {
    calculate();
    });

year.addEventListener('input', () => {
    calculate();
    });

function calculate() {
    basePrice = optionAutoMark.value; 


    if (milage.value>= 1) {
        let milagePrice = +milage.value * 100; 
        totalPrice = +basePrice - +milagePrice;
    }
    else {
        totalPrice = +basePrice;
    }
    
    if (year.value ===2022) {
        totalPrice = +totalPrice;
    }
    else {
        let yearPrice = (2022 - +year.value) * 10000; 
        totalPrice = +totalPrice - +yearPrice;
    }

for (const radio of radioTransmissionType) {
    if (radio.checked) {
        totalPrice = +totalPrice + +radio.value;
    }
}

for (const radio of radioMotorType) {
    if (radio.checked) {
        totalPrice = +totalPrice + +radio.value;
    }
    console.log(totalPrice);
}
}


const takeActiveColor = currentActive => {
    const dataAttrValue = currentActive.dataset.name;
    const currentColor = colors.find(colorBtn => colorBtn.name === dataAttrValue);
    currentColorValue = currentColor.value;
}

for (let colorBtn of colorButtons) {
    colorBtn.addEventListener ('click', () => {
    takeActiveColor(colorBtn);
    });
}


button.addEventListener('click', function (event) {
    event.preventDefault();
    calculate();
    priceResult.innerHTML = `${totalPrice}`;
});








// функция к заданию № 2: Все введеные в propmpt числа добавляются в массив. На пустое поле/не числа/на копку "отмена" массив выводится в отсортированном по возрастанию виде. Сумма всех введенных чисел выводится в поле result

function sumInput() {
    let numbers = []; // создаем массив
    let sum = 0; // обьявляем переменную равно нулю
    for (;;) { // запускаем цикл 
        let value = +prompt("Введите число", ''); // получаем в value преобразованное с помощью + число, которое вводит пользователь, пока он это делает
        if (!value) break; // если пользователь ничего не ввел или ввел не число или нажал "отмена" - выходим из цикла
        numbers.push(value); // добавляем все введенные числа в созданный массив
        numbers.sort(); // сортируем массив
        sum += value; //  каждый раз прибавляем к sum последнее введенное число
    }
    let result = ('Сумма: ' + sum); // обьявляем переменную для вывода результата        
    document.getElementById("result").innerHTML = result; // выводим результат в <p> c id=result  

    alert(numbers); // выводим  в alert отсортированный массив
}





/*
let numb = [[1,2], [1,2,3], [1,2,3,4]];
const el = numb.findIndex(el=>el>3);
alert(el);       //   вернется -1, так как такого массива нет  



let example = ['js', 'css', 'html'];
alert( example[0] );


/* let onlyNumbers = [0, 1, false, 2, undefined, '', 3, null]; 
let filteredNumbers = onlyNumbers.filter(Boolean);
alert(filteredNumbers); 

*/

