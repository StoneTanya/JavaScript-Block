let error = document.getElementById("error");
let regBtn = document.getElementById('btn-reg');

const Form = document.querySelector('form');
const Name = document.getElementById('inputName');
const Surname = document.getElementById('inputSurname');
const Mail = document.getElementById('inputMail');
const Phone = document.getElementById('inputPhone');
const Password = document.getElementById('inputPassword');


const inputData = [
    {
        html: Name,
        errors: {
            notValue: "Вы не можете оставить поле пустым<br>",
            invalidValue: "Недопустимые значения в поле Имя<br>"
        },
        template: letters = /^[a-zA-Zа-яА-Я]+$/
    },
    {
        html: Surname,
        errors: {
            notValue: "Вы не можете оставить поле пустым<br>",
            invalidValue: "Недопустимые значения в поле Фамилия<br>"
        },
        template: letters = /^[a-zA-Zа-яА-Я]+$/
    },
    {
        html: Mail,
        errors: {
            notValue: "Вы не можете оставить поле email пустым<br>",
            invalidValue: "Пожалуйста, введите данные в корректном формате<br>"
        },
        template: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
    {
        html: Phone,
        errors: {
            notValue: "Вы не можете оставить поле пустым<br>",
            invalidValue: "Пожалуйста, введите данные в корректном формате<br>"
        },
        template: /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/
    },
    {
        html: Password,
        errors: {
            notValue: "Пароль не указан<br>",
            invalidValue: "Некорректный пароль. Длина пароля должна быть от 7 до 12 символов и включать, как минимум, одну заглавную и одну строчную буквы, один символ (!@#$%^&*_=+-), и одну цифру.<br>"
        },
        template: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{7,12}$/
    }
]

// At least 1 Uppercase
// At least 1 Lowercase
// At least 1 Number
// At least 1 Symbol, symbol allowed --> !@#$%^&*_=+-
// Min 8 chars and Max 12 chars

function checkValue(value, matchTemplate, errors) {
    // console.log('check input', value, matchTemplate, errors)
    if (value === '') {
        error.innerHTML += errors.notValue;
        regBtn.disabled = true;
    } else if (value.match(matchTemplate)) {
        error.innerHTML += "";
        regBtn.disabled = false;
    } else {
        error.innerHTML += errors.invalidValue;
        regBtn.disabled = true;
    }
}

Form.addEventListener('submit', function success(e) {
    error.innerHTML = "";
    let welcome = document.getElementById('welcome');
    e.preventDefault();
    welcome.innerHTML = "";

    if (regBtn.disabled == false) {

        welcome.innerHTML += "Добро пожаловать," + " " + Name.value + "!";
        Form.style.display = 'none';

        let hiddens = document.getElementsByClassName('hidden_content');
        for (let i = 0; i < hiddens.length; i++) {            // проходим циклом по всем элементам объекта
            hiddens[i].style.display = 'none';
        }
    }
});

for (let i = 0; i < inputData.length; i++) {
    let input = inputData[i]
    input.html.addEventListener('input', () => {
        error.innerHTML = "";
        checkValue(input.html.value, input.template, input.errors);
    })
}

regBtn.addEventListener('click', function () {
    error.innerHTML = "";
    for (let i = 0; i < inputData.length; i++) {
        let input = inputData[i]
        checkValue(input.html.value, input.template, input.errors)
    }
    success();
});
