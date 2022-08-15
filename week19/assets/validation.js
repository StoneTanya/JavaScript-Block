// задание № 1
class Employee {
    constructor(name, surname, rate, days) {
    this.name = name,
    this.surname = surname,
    this.rate = rate,
    this.days = days
    }
    getSalary() {
       console.log(this.rate * this.days);
    }
}

let employee = new Employee('Татьяна', 'Каменева', 5000, 31);
console.log(employee.name); 
console.log(employee.surname); 
console.log(employee.rate); 
console.log(employee.days); 
console.log(employee.getSalary());


// задание № 4 

class Validator {
    constructor(date, phone, email, domain) {
    this.date = date,
    this.phone = phone,
    this.email = email,
    this.domain = domain
    }
    inputData = [
        {
            html: date,
            errors: {
                notValue: "Дата не заполнена<br>",
                invalidValue:  "Недопустимые значения в поле Дата<br>"
            },
            template: letters = /^[A-Za-z]{4,}$/
        },
        {
            html: mail,
            errors: {
                notValue: "email не заполнен<br>",
                invalidValue: "Вы ввели некорректный email<br>"
            },
            template: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        },
        {
            html: phone,
            errors: {
                notValue: "Телефон не заполнен<br>",
                invalidValue: "Вы ввели некорректный номер телефона<br>"
            },
            template: /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/
        },
        {
            html: domain,
            errors: {
                notValue: "Домен не указан<br>",
                invalidValue: "Вы ввели некорректный домен<br>" 
            },
            template: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
        }
    ]

    isDate(date) {
        checkValue(date);
    }

    isPhone(phone) {
        checkValue(phone);
    }

    isEmail(email) {
        checkValue(email);
    }

    isDomain(domain) {
        checkValue(domain);
    }

    checkValue(value, matchTemplate, errors) {
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
}

let error = document.getElementById("error");
const regBtn = document.getElementById('btn-reg');
const success = document.querySelector('form');
const inputDate = document.getElementById('inputDate');
const inputPhone = document.getElementById('inputPhone');
const inputMail = document.getElementById('inputMail');
const inputDomain = document.getElementById('inputDomen');


success.addEventListener('submit', function() {
    let validator = new Validator(inputDate.value, inputPhone.value, inputMail.value, inputDomain.value);
    console.log(validator.isEmail(inputDate.value)); 
    console.log(validator.isDomain(inputPhone.value)); 
    console.log(validator.isDate(inputMail.value)); 
    console.log(validator.isPhone(inputDomain.value)); 
});




