let error = document.getElementById("error");
let regBtn = document.getElementById('btn-reg');

const success = document.querySelector('form');
const Name = document.getElementById('inputName');
const Surname = document.getElementById('inputSurname');
const Mail = document.getElementById('inputMail');
const Phone = document.getElementById('inputPhone');
const Password = document.getElementById('inputPassword');


const inputData = [
    {
        html: Name,
        errors: {
            notValue: "Имя не заполнено<br>",
            invalidValue: "Недопустимые значения в поле Имя<br>"
        },
        template: /^[A-Za-z]+$/
    },
    {
        html: Surname,
        errors: {
            notValue: "Фамилия не заполнена<br>",
            invalidValue:  "Недопустимые значения в поле Фамилия<br>"
        },
        template: letters = /^[A-Za-z]{4,}$/
    },
    {
        html: Mail,
        errors: {
            notValue: "email не заполнен<br>",
            invalidValue: "Вы ввели некорректный email<br>"
        },
        template: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
    {
        html: Phone,
        errors: {
            notValue: "Телефон не заполнен<br>",
            invalidValue: "Вы ввели некорректный номер телефона<br>"
        },
        template: /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/
    },
    {
        html: Password,
        errors: {
            notValue: "Пароль не указан<br>",
            invalidValue: "пароль слишком короткий<br>" 
        },
        template: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    }
]

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

regBtn.addEventListener('click', function () {
    error.innerHTML = "";
    for (let i = 0; i < inputData.length; i++) {
        let input = inputData[i]
        checkValue(input.html.value, input.template, input.errors)
    }
    success();
});

for (let i = 0; i < inputData.length; i++) {
    let input = inputData[i]
    input.html.addEventListener('input', () => {
        error.innerHTML = "";
        checkValue(input.html.value, input.template, input.errors);
    })
}

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
