let error = document.getElementById("error");
let regBtn = document.getElementById('btn-reg');

const Name = document.getElementById('inputName');
const Surname = document.getElementById('inputSurname');
const Mail = document.getElementById('inputMail');
const Phone = document.getElementById('inputPhone');
const Password = document.getElementById('inputPassword');

regBtn.addEventListener('click', function () {

    error.innerHTML = "";

    if (Name.value === '') {
        error.innerHTML += "Имя не заполнено<br>";
        regBtn.disabled = true;
    } 
    else if (Name.value.match(letters)) {
        error.innerHTML += "";
        regBtn.disabled = false;
} else {
error.innerHTML += "Недопустимые значения в поле Имя<br>";
regBtn.disabled = true;
}

    let letters = /^[A-Za-z]+$/;
    if (Surname.value === ''|| Surname.value.length >= 15 || Surname.value.length < 3 ) {
        error.innerHTML += "Фамилия не заполнена<br>";
        regBtn.disabled = true;

}
        else if (Surname.value.match(letters)) {
                error.innerHTML += "";
        } else {
    error.innerHTML += "Недопустимые значения в поле Фамилия<br>";
    regBtn.disabled = true;
        }

    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (Mail.value === '') {
        error.innerHTML += "email не заполнен<br>";
        regBtn.disabled = true;
    } 
    else if (Mail.value.match(mailformat))  {
        error.innerHTML += "";
        regBtn.disabled = false;
        }
        else {
        error.innerHTML += "Вы ввели некорректный email<br>";
        regBtn.disabled = true;
}

    let numbers = /^[0-9]+$/;
    if (Phone.value === '') {
        error.innerHTML += "Телефон не заполнен<br>";
        regBtn.disabled = true;

    } 
    else if (Phone.value.match(numbers)) {
        error.innerHTML += "";
        regBtn.disabled = false;
    }
        else {
            error.innerHTML += "Вы ввели некорректный номер телефона<br>";
        regBtn.disabled = true;
        }


    if (Password.value === '') {
        error.innerHTML += "Пароль не указан<br>";
        regBtn.disabled = true;
    }
    else if (Password.value.length<=8) {
    error.innerHTML += "пароль слишком короткий<br>";
    regBtn.disabled = true;}
    else {
        regBtn.disabled = false;
    }

    welcome();
});


