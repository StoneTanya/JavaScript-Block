// ЗАДАНИЕ  № 1 - вывод ФИО на страницу
let fullName = document.getElementById('hello-name');

fullName.addEventListener('input', function formatFio(evt) {
    evt.preventDefault();
    const nameSplit = fullName.value.split(' '); // разделили введенное пользователем в input fullName по пробелам, получился массив с фамилией, именем и отчеством
    let surname = nameSplit[0]; // забираю из массива Фамилию
    let name = nameSplit[1]; // забираю из массива Имя
    let patronymic = nameSplit[2]; // забираю из массива Отчество

    let f = surname[0].toUpperCase() + surname.slice(1).toLowerCase();
    document.querySelector('#F').value = f;

    let i = name[0].toUpperCase() + name.slice(1).toLowerCase(); // Почему в консоли ошибка? 
    document.querySelector('#I').value = i;

    let o = patronymic[0].toUpperCase() + patronymic.slice(1).toLowerCase();
    document.querySelector('#O').value = o;
});


// задание № 2

let comments = [];
let addComment = document.getElementById('comment-add'); 

addComment.addEventListener('click', function addComments(event) {
    event.preventDefault();
    let commentBody = document.getElementById('comment-body');
    let comment = {
        body: commentBody.value,
        time: Math.floor(Date.now()/1000)
    }
    commentBody.value = '';
    comments.push(comment);
    saveComments();
    showComments();
});

function saveComments() {
    localStorage.setItem('comments', JSON.stringify(comments));
}

function showComments () {
    let commentField = document.getElementById('comment-field');
    let out = '';
    comments.forEach(function(item) {
        out += `<p class ="text-right small">${timeConverter(item.time)}</p>`;
        out += `<p class ="alert alert-success">${checkSpam(item.body)}</p>`;
    });
    commentField.innerHTML = out;
}

function timeConverter(UNIX_timestamp) {
    let timeComment = new Date(UNIX_timestamp * 1000);
    let year = timeComment.getFullYear();
    let month = timeComment.getMonth() + 1;
    let day = timeComment.getDate();
    let hour = timeComment.getHours();
    let minute = timeComment.getMinutes();
    let sec = timeComment.getSeconds();
    // форматирую дату и время, добавляю нули к единственной цифре через тернарный оператор
    day = (day < 10) ? '0' + day : day;
    month = (month < 10) ? '0' + month : month;
    minute = (minute < 10) ? '0' + minute : minute;
    hour = (hour < 10) ? '0' + hour : hour;
    sec = (sec < 10) ? '0' + sec : sec;
    let time = day + '.' + month + '.' + year + ', ' + hour + ':' + minute + ':' + sec; // соединяю для вывода
    return time;
}

function checkSpam() {
    let commentString = comments.map(({body}) => `${[body]}`).join('');
    let filteredString = commentString.replace('xxx', '***');
    console.log(filteredString);
    return filteredString;
}



// задание № 3

function formatDate() {
    // eventDate - это какая-то дата, которая будет вводиться, например, при публикации материла на сайт. 
    // Она будет сравниваться с now. Для примера указала дату, близкую к now.  

    let eventDate = new Date(2022, 6, 24, 20, 05);
    let now = new Date();
    let diff = now - eventDate;
    console.log(now);

    let message = '';

    if (diff < 1000) { // меньше 1 секунды
        message = 'Прямо сейчас';
    } else if (diff < 60000) {
        message = Math.round(diff / 1000) + ' сек. назад';
    } else if (diff < 3600000) {
        message = Math.round(diff / 60000) + ' мин. назад';
    } else {
        let year = eventDate.getFullYear() % 100;
        let month = eventDate.getMonth() + 1;
        let day = eventDate.getDate();
        let hour = eventDate.getHours();
        let minute = eventDate.getMinutes();
        let second = eventDate.getSeconds();
        // форматирую дату и время, добавляю нули к единственной цифре через тернарный оператор
        day = (day < 10) ? '0' + day : day;
        month = (month < 10) ? '0' + month : month;
        minute = (minute < 10) ? '0' + minute : minute;
        second = (second < 10) ? '0' + second : second;
        hour = (hour < 10) ? '0' + hour : hour;
        message = day + '.' + month + '.' + year + ', ' + hour + ':' + minute; // соединяю для вывода
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

    for (let i = 0; i <= 9; i++) { //9 итераций, чтобы в массив добавилось 10 чисел
        let randomNumber = Math.floor(Math.random() * (max - +min + 1)) + +min;
        numbers.push(randomNumber);
        sum += randomNumber; //  суммируем сгенерированные числа
        multi *= randomNumber; //  перемножаем сгенерированные числа
        average = sum / 10; //  находим среднее арифметическое
    }
    let numbersString = numbers.join(); //  склеиваем из массива строку для вывода на страницу
    let minimal = Math.min(numbers); //    не работает !!!!!!!!!!!
    let maximum = Math.max(numbers); //    не работает  !!!!!!!!!!!

    document.getElementById('randomResult').innerHTML = numbersString;
    document.getElementById('minItem').innerHTML = minimal;
    document.getElementById('maxItem').innerHTML = maximum;
    document.getElementById('sum').innerHTML = sum;
    document.getElementById('multi').innerHTML = multi;
    document.getElementById('average').innerHTML = average;
})






