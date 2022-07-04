
const form  = document.getElementsByTagName('form')[0];
const inputName = document.getElementById('inputName');
const inputSurname = document.getElementById('inputSurname');
const inputMail = document.getElementById('inputMail');
const inputPhone = document.getElementById('inputPhone');
const inputPassword = document.getElementById('inputPassword');

let NameError = document.getElementsByClassName('NameError');
let SurnameError = document.getElementsByClassName('SurnameError');
let PhoneError = document.getElementsByClassName('PhoneError');
let emailError = document.getElementsByClassName('emailError');
let PasswordError = document.getElementsByClassName('PasswordError');

let errors = document.getElementsByClassName("error");

const regBtn = document.getElementById('btn-reg');

