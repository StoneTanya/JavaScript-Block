let error = document.getElementById("error");
let regBtn = document.getElementById('btn-reg');

const success = document.querySelector('form');
const Name = document.getElementById('inputName');
const Surname = document.getElementById('inputSurname');
const Mail = document.getElementById('inputMail');
const Phone = document.getElementById('inputPhone');
const Password = document.getElementById('inputPassword');


let letters = /^[A-Za-z]+$/;
let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let numbers = /^[0-9]+$/;


regBtn.addEventListener('click', function () {
error.innerHTML = "";

    if (Name.value === ''  || Name.value.length >= 15 || Name.value.length < 2) {
        error.innerHTML += "Имя не заполнено<br>";
        regBtn.disabled = true;
    } else if (Name.value.match(letters)) {
        error.innerHTML += "";
    } else {
        error.innerHTML += "Недопустимые значения в поле Имя<br>";
        regBtn.disabled = true;
    }

    if (Surname.value === '' || Surname.value.length >= 15 || Surname.value.length < 3) {
        error.innerHTML += "Фамилия не заполнена<br>";
        regBtn.disabled = true;

    } else if (Surname.value.match(letters)) {
        error.innerHTML += "";
    } else {
        error.innerHTML += "Недопустимые значения в поле Фамилия<br>";
        regBtn.disabled = true;
    }

    if (Mail.value === '') {
        error.innerHTML += "email не заполнен<br>";
        regBtn.disabled = true;
    } else if (Mail.value.match(mailformat)) {
        error.innerHTML += "";
    } else {
        error.innerHTML += "Вы ввели некорректный email<br>";
        regBtn.disabled = true;
    }

    if (Phone.value === '') {
        error.innerHTML += "Телефон не заполнен<br>";
        regBtn.disabled = true;

    } else if (Phone.value.match(numbers)) {
        error.innerHTML += "";
    } else {
        error.innerHTML += "Вы ввели некорректный номер телефона<br>";
        regBtn.disabled = true;
    }

    if (Password.value === '') {
        error.innerHTML += "Пароль не указан<br>";
        regBtn.disabled = true;
    } else if (Password.value.length <= 8) {
        error.innerHTML += "Пароль слишком короткий<br>";
        regBtn.disabled = true;
    } else {
        regBtn.disabled = false;
    }
});

Name.addEventListener('keyup', function () {
    error.innerHTML = "";
        if (Name.value.match(numbers)) {
            error.innerHTML += "Недопустимые значения в поле Имя<br>";
            regBtn.disabled = true;
        } else {
            error.innerHTML += "";
            regBtn.disabled = false;
        }
    });

    
success.addEventListener('submit', function(e) {
    error.innerHTML = "";
    let welcome = document.getElementById ('welcome');
    e.preventDefault();
    welcome.innerHTML = "";

    if (regBtn.disabled == false) {
        
        welcome.innerHTML += "Добро пожаловать," + " " + Name.value + "!";
        success.style.display = 'none';
        
        let hiddens = document.getElementsByClassName('hidden_content');
        for( let i = 0; i < hiddens.length; i++){            // проходим циклом по всем элементам объекта
            hiddens[i].style.display = 'none';                  
        }		
    } 
});








