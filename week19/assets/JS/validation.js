// // задание № 1
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
employee.getSalary();



// ЗАДАНИЕ № 4 - вариант без static

let error = document.getElementById("error");
const regBtn = document.getElementById('btn-reg');

class Validator {
    constructor(date, phone, mail, domain) {
        this.date = date;
        this.phone = phone;
        this.mail = mail;
        this.domain = domain;
    }

    isDate() {
        if (this.date.value === '') {
            return false;
        } else if (this.date.match(/^(((0[1-9]|[12][0-9]|3[01])[- /.](0[13578]|1[02])|(0[1-9]|[12][0-9]|30)[- /.](0[469]|11)|(0[1-9]|1\d|2[0-8])[- /.]02)[- /.]\d{4}|29[- /.]02[- /.](\d{2}(0[48]|[2468][048]|[13579][26])|([02468][048]|[1359][26])00))$/)) {
            return true;
        } else {
            return false;
        }
    }

    isPhone() {
        if (this.phone.value === '') {
            return false;
        } else if (this.phone.match(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/)) {
            return true;
        } else {
            return false;
        }
    }

    isEmail() {
        if (this.mail.value === '') {
            return false;
        } else if (this.mail.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            return true;
        } else {
            return false;
        }
    }

    isDomain() {
        if (this.domain.value === '') {
            return false;
        } else if (this.domain.match(/([a-z0-9A-Z]\.)*[a-z0-9-]+\.([a-z0-9]{2,24})+(\.co\.([a-z0-9]{2,24})|\.([a-z0-9]{2,24}))*/g)) {
            return true;
        } else {
            return false;
        }
    }
};

regBtn.addEventListener('click', function (event) {
    event.preventDefault();
    const inputDate = document.getElementById('inputDate').value;
    const inputPhone = document.getElementById('inputPhone').value;
    const inputMail = document.getElementById('inputMail').value;
    const inputDomain = document.getElementById('inputDomain').value;

    let validator = new Validator(inputDate, inputPhone, inputMail, inputDomain);

    console.log(validator);
    console.log(validator.isDate(inputDate));
    console.log(validator.isPhone(inputPhone));
    console.log(validator.isEmail(inputMail));
    console.log(validator.isDomain(inputDomain));
});




// ЗАДАНИЕ № 4 - вариант STATIC МЕТОД

// let error = document.getElementById("error");
// const regBtn = document.getElementById('btn-reg');

// class staticValidator {
//     constructor(date, phone, mail, domain) {
//         this.date = date;
//         this.phone = phone;
//         this.mail = mail;
//         this.domain = domain;
//     }

//     static isDate(date) {
//         if (date.value === '') {
//             return false;
//         } else if (date.match(/^(((0[1-9]|[12][0-9]|3[01])[- /.](0[13578]|1[02])|(0[1-9]|[12][0-9]|30)[- /.](0[469]|11)|(0[1-9]|1\d|2[0-8])[- /.]02)[- /.]\d{4}|29[- /.]02[- /.](\d{2}(0[48]|[2468][048]|[13579][26])|([02468][048]|[1359][26])00))$/)) {
//             return true;
//         } else {
//             return false;
//         }
//     }

//     static isPhone(phone) {
//         if (phone.value === '') {
//             return false;
//         } else if (phone.match(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/)) {
//             return true;
//         } else {
//             return false;
//         }
//     }

//     static isEmail(mail) {
//         if (mail.value === '') {
//             return false;
//         } else if (mail.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
//             return true;
//         } else {
//             return false;
//         }
//     }

//     static isDomain(domain) {
//         if (domain.value === '') {
//             return false;
//         } else if (domain.match(/([a-z0-9A-Z]\.)*[a-z0-9-]+\.([a-z0-9]{2,24})+(\.co\.([a-z0-9]{2,24})|\.([a-z0-9]{2,24}))*/g)) {
//             return true;
//         } else {
//             return false;
//         }
//     }
// };

// regBtn.addEventListener('click', function (event) {
//     event.preventDefault();
//     const inputDate = document.getElementById('inputDate').value;
//     const inputPhone = document.getElementById('inputPhone').value;
//     const inputMail = document.getElementById('inputMail').value;
//     const inputDomain = document.getElementById('inputDomain').value;

//     let validator = new staticValidator(inputDate, inputPhone, inputMail, inputDomain);

//     console.log(validator);
//     console.log(staticValidator.isDate(inputDate));
//     console.log(staticValidator.isPhone(inputPhone));
//     console.log(staticValidator.isEmail(inputMail));
//     console.log(staticValidator.isDomain(inputDomain));
// });