// ЗАДАНИЕ  № 1 - вывод ФИО на страницу
let fullName = document.getElementById('hello-name');

fullName.addEventListener('input', function formatFio(evt) {
    evt.preventDefault();
    const nameSplit = fullName.value.split(' ');      // разделили введенное пользователем в input fullName по пробелам, получился массив с фамилией, именем и отчеством
    let surname = nameSplit[0];              // забираю из массива Фамилию
    let name = nameSplit[1];              // забираю из массива Имя
    let patronymic = nameSplit[2];    // забираю из массива Отчество

    console.log(surname);
    console.log(nameSplit);

    let f = surname[0].toUpperCase() + surname.slice(1).toLowerCase();           
    document.querySelector('#F').value = f;                                           

    let i = name[0].toUpperCase() + name.slice(1).toLowerCase();              // Почему в консоли ошибка? 
    document.querySelector('#I').value = i;

    let o = patronymic[0].toUpperCase() + patronymic.slice(1).toLowerCase();              
    document.querySelector('#O').value = o;
});



// задание № 2



// задание № 3

function formatDate () {
    let publishDate = document.getElementsByClass('publishDate');            // какая-то дата, например, дата публикации материла на сайт, будет сравниваться с now
    let now = new Date();
    let diff = now - publishDate;
    console.log(now);

    let message = '';

    if (diff < 1000) {
        message = 'Прямо сейчас';
    } else if (diff < 60000) {
        message = diff / 1000 + ' сек. назад';
    } else if (diff < 3600000) {
        message = diff / 60000 + ' мин. назад';
    } else {
        let year = now.getFullYear() % 100;
        let month = now.getMonth() + 1;
        let day = now.getDate();
        let hour = now.getHours();
        let minute = now.getMinutes();
        let second = now.getSeconds();
        
        day = (day < 10) ? '0' + day : day;
        month = (month < 10) ? '0' + month : month;
        minute = (minute < 10) ? '0' + minute : minute;
        second = (second < 10) ? '0' + second : second;
        hour = (hour < 10) ? '0' + hour : hour;
        message = day + '.' + month + '.' +  year + ', ' +  hour + ':' + minute;
    }
    console.log(message);
}
formatDate();



// ЗАДАНИЕ № 4 - Генератор случайных чисел
const randomButton = document.getElementById('randomButton');
let from = document.getElementById('from');
let to = document.getElementById('to');

randomButton.addEventListener('click', function randomNumbers() {
    let min = from.value;
    let max = to.value;
    let numbers = [];
    let sum = 0;
    let multi = 1;

    for (let i = 0; i <= 9; i++) {                    //9 итераций, чтобы в массив добавилось 10 чисел
        let randomNumber = Math.floor(Math.random() * (max - +min + 1)) + +min;
        numbers.push(randomNumber);
        sum += randomNumber;                        //  суммируем сгенерированные числа
        multi *= randomNumber;                      //  перемножаем сгенерированные числа
        average = sum / 10;                         //  находим среднее арифметическое
    }
    let numbersString = numbers.join();            //  склеиваем из массива строку для вывода на страницу
    let minimal = Math.min(numbers);        //    не работает !!!!!!!!!!!
    let maximum = Math.max(numbers);        //    не работает  !!!!!!!!!!!
    
    document.getElementById('randomResult').innerHTML = numbersString;
    document.getElementById('minItem').innerHTML = minimal;
    document.getElementById('maxItem').innerHTML = maximum;
    document.getElementById('sum').innerHTML = sum;
    document.getElementById('multi').innerHTML = multi;
    document.getElementById('average').innerHTML = average;
})







