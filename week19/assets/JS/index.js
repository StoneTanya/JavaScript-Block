// class Employee {
//     constructor(name, surname, rate, days) {
//     this.name = name,
//     this.surname = surname,
//     this.rate = rate,
//     this.days = days
//     }
//     getSalary() {
//        console.log(this.rate * this.days);
//     }
// }

// let employee = new Employee('Татьяна', 'Каменева', 5000, 31);
// console.log(employee.name); 
// console.log(employee.surname); 
// console.log(employee.rate); 
// console.log(employee.days); 
// getSalary(); 



let user = {
    name: "Cersei",
    surname: "Lannister",

    get fullName() {
        return `${this.name} ${this.surname}`;
    },

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    }
};

// set fullName запустится с данным значением
user.fullName = "Lena Headey";

alert(user.name);      // Lena
alert(user.surname);   // Headey









// //вопрос 4 
// function bike() {
//     console.log(this.name)
// }

// var name = 'ninja'
// var obj1 = {name: "pomidor", bike: bike}
// var obj2 = {name: "site", bike: bike}

// bike()             //ninja
// obj1.bike()        //pomidor
// obj2.bike()        //site
// //bike здесь - это функция - конструктор, через которую создаются объекты, и их свойство name выводится в консоль. 
// //this — это ссылка на некий объект, к свойствам которого можно получить доступ внутри вызова функции

// //вопрос 7 
// class Person {
//     constructor(name) {
//     this.name = name;
//     }
// }
// const member = new Person("John")
// console.log(typeof member)               //object
// // Person - конструктор (класс), member - объект, который создали на основе существующего класса Person с параметром (name="John"). Поэтому выводится тип объекта member - object


// //вопрос 8

// const person = {
//     name: "Valera",
//     age: 23
// }
// let city = person.city
// city = "Amsterdam"
// console.log(person) 
// // {name: 'Valera', age: 23}
// // age: 23
// // name: "Valera"
// // свойство city со значением "Amsterdam" не попало в объект, так как запись неверная. Верно так: 
// const person = {
//     name: "Valera",
//     age: 23
// }
// person.city = "Amsterdam"
// console.log(person) 