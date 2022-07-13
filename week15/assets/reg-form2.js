let error = document.getElementById("error");
let regBtn = document.getElementById('btn-reg');

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
        template: /^[0-9]+$/
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


function welcome() {
    console.log("result")
}

regBtn.addEventListener('click', function () {
    error.innerHTML = "";
    for (let i = 0; i < inputData.length; i++) {
        let input = inputData[i]
        checkValue(input.html.value, input.template, input.errors)
    }
    welcome();
});

for (let i = 0; i < inputData.length; i++) {
    let input = inputData[i]
    input.html.addEventListener('input', () => {
        error.innerHTML = "";
        checkValue(input.html.value, input.template, input.errors);
    })
}


