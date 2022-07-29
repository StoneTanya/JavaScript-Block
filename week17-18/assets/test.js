let comments = [];
let addComment = document.getElementById('comment-add');
let commentBody = document.getElementById('comment-body');
let commentName = document.getElementById('comment-name');
let commentAvatar = document.getElementById('comment-avatar');

//loadComments();
addComment.addEventListener('click', function addComments(event) {
    event.preventDefault();
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
        out += `<p class ="alert alert-primary"> <img src="${item.photo}" style="width:100px"> ${item.name}</p>`;
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

// function checkSpam() {
//     //const spamWords = ['xxx', 'viagra'];
//     const commentBodyString = comments.filter(item => {
//         return item.body.includes('xxx');
//         });
//     console.log(commentBodyString);
// };


// commentBodyString.forEach(function (item) {
//     out += `<p class ="alert alert-success">${item.body}</p>`;
// });


// function checkSpam() {
//     const spamWords = ['xxx', 'viagra'];
//     const commentBodyString = comments.map(el => el.body);
//     console.log(commentBodyString);
//     // const commentBodyWords = commentBodyString.split(' ');
//     // console.log(commentBodyWords);

//     for (const word of commentBodyString) {
//         for (const spamWord of spamWords) {
//             if (word === spamWord) {
//                 let filteredString = commentBodyString.replace(spamWord, '***');
//                 return(filteredString);
//             }
//         }
//     }
//     let filteredString = commentBodyString;
//     return(filteredString);
// }
