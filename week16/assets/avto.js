





// функция к заданию № 2: Все введеные в propmpt числа добавляются в массив. На пустое поле/не числа/на копку "отмена" массив выводится в отсортированном по возрастанию виде. Сумма всех введенных чисел выводится в поле result

function sumInput() {
    let numbers=[];             // создаем массив
    let sum = 0;                // обьявляем переменную равно нулю
    for (; ;) {                 // запускаем цикл 
        let value = +prompt("Введите число", '');   // получаем в value преобразованное с помощью + число, которое вводит пользователь, пока он это делает
        if (!value) break;                         // если пользователь ничего не ввел или ввел не число или нажал "отмена" - выходим из цикла
        numbers.push(value);                 // добавляем все введенные числа в созданный массив
        numbers.sort();                                         // сортируем массив
        sum += value;                   //  каждый раз прибавляем к sum последнее введенное число
    }
    let result = ('Сумма: ' + sum);          // обьявляем переменную для вывода результата        
    document.getElementById("result").innerHTML = result;             // выводим результат в <p> c id=result  

    alert(numbers);                                  // выводим  в alert отсортированный массив
}




/*
let numb = [[1,2], [1,2,3], [1,2,3,4]];
const el = numb.findIndex(el=>el>3);
alert(el);       //   вернется -1, так как такого массива нет  



let example = ['js', 'css', 'html'];
alert( example[0] );


let onlyNumbers = [0, 1, false, 2, undefined, '', 3, null]; 
let filteredNumbers = onlyNumbers.filter(Boolean);
alert(filteredNumbers);
*/

