// ЗАДАНИЕ  № 1 - вывод ФИО на страницу
let fullName = document.getElementById('hello-name');

fullName.addEventListener('input', function formatFio(evt) {
    evt.preventDefault();
    const nameSplit = fullName.value.split(' ');      // разделили введенное пользователем в input fullName по пробелам, получился массив с фамилией, именем и отчеством
    let surname = nameSplit[0];              // забираю из массива Фамилию
    let name = nameSplit[1];              // забираю из массива Имя
    let patronymic = nameSplit[2];    // забираю из массива Отчество

    let f = surname[0].toUpperCase() + surname.slice(1).toLowerCase();
    document.querySelector('#F').value = f;

    let i = name[0].toUpperCase() + name.slice(1).toLowerCase();
    document.querySelector('#I').value = i;

    let o = patronymic[0].toUpperCase() + patronymic.slice(1).toLowerCase();
    document.querySelector('#O').value = o;
});



// ЗАДАНИЕ № 3 - Генератор случайный чисел
const randomButton = document.getElementById('randomButton');
let from = document.getElementById('from');
let to = document.getElementById('to');

randomButton.addEventListener ('click', function randomNumbers () {
    let min = from.value;
    let max = to.value;
    let numbers = [];
    let sum = 0;
    let multi = 1;

    for(let i = 0; i <= 9; i++) {                    //9 итераций, чтобы в массив добавилось 10 чисел
        let randomNumber = Math.floor(Math.random() * (max - +min +1)) + +min;             
        numbers.push(randomNumber);
        sum += randomNumber;                        //  суммируем сгенерированные числа
        multi *= randomNumber;                      //  перемножаем сгенерированные числа
        average = sum / 10;                         //  находим среднее арифметическое
    }
    let numbersString = numbers.join();            //  склеиваем из массива строку для вывода на страницу

    document.getElementById('randomResult').innerHTML = numbersString;
    document.getElementById('sum').innerHTML = sum;
    document.getElementById('multi').innerHTML = multi;
    document.getElementById('average').innerHTML = average;
})

