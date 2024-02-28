


//  КОММЕНТАРИИ со спам фильтром и загрузкой в local storage
let comments = [];
let addComment = document.getElementById('comment-add');
loadComments();

addComment.addEventListener('click', function addComments(event) {
    event.preventDefault();
    let commentBody = document.getElementById('comment-body');
    let commentName = document.getElementById('comment-name');
    let commentAvatar = document.getElementById('comment-avatar');
    let comment = {
        name: commentName.value,
        photo: commentAvatar.value,
        body: commentBody.value,
        time: Math.floor(Date.now() / 1000)
    }
    commentBody.value = '';
    commentName.value = '';
    commentAvatar.value = '';
    comments.push(comment);
    saveComments();
    showComments();
});

function saveComments() {
    localStorage.setItem('comments', JSON.stringify(comments));
}

function loadComments() {
        if (localStorage.getItem('comments')) comments = JSON.parse(localStorage.getItem('comments'));
        showComments();
}

function showComments() {
    let commentField = document.getElementById('comment-field');
    let out = '';
    comments.forEach(function (item) {
        out += `<p class ="text-right small">${timeConverter(item.time)}</p>`;
        out += `<p class ="alert alert-primary"> <img src="${item.photo}" style="width:100px"> ${nameValidation(item.name)}</p>`;
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

function nameValidation(name) {
    if (!!name) {
        return name[0].toUpperCase() + name.slice(1).toLowerCase();
    }
}

function checkSpam(comments) {
    return comments.replace(/viagra|xxx/gi, '***');
}


// задание № 3 - ВЫВОД ДАТЫ В ОТФОРМАТИРОВАННОМ ВИДЕ

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



