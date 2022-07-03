
const form  = document.getElementsByTagName('form')[0];
const inputName = document.getElementById('inputName');
const inputSurname = document.getElementById('inputSurname');
const inputMail = document.getElementById('inputMail');
const inputTel = document.getElementById('inputTel');
const inputPassword = document.getElementById('inputPassword');
const emailError = document.getElementsByClassName('emailError')



inputMail.addEventListener("input", function () {
            if (inputMail.validity.typeMismatch) {
                inputMail.setCustomValidity("I am expecting an e-mail address!");
            } else {
                inputMail.setCustomValidity("");
            }
        });


        inputMail.addEventListener('input', function () {
  // Каждый раз, когда пользователь что-то вводит,
  // мы проверяем, являются ли поля формы валидными

    if (inputMail.validity.valid) {
    // Если на момент валидации какое-то сообщение об ошибке уже отображается,
    // если поле валидно, удаляем сообщение
    emailError.textContent = ''; // Сбросить содержимое сообщения
    emailError.className = 'error'; // Сбросить визуальное состояние сообщения
} else {
    // Если поле не валидно, показываем правильную ошибку
    showError();
}
});

form.addEventListener('submit', function (event) {
  // Если поле email валдно, позволяем форме отправляться

    if(!inputMail.validity.valid) {
    // Если поле email не валидно, отображаем соответствующее сообщение об ошибке
    showError();
    // Затем предотвращаем стандартное событие отправки формы
    event.preventDefault();
}
});

function showError() {
  if(inputMail.validity.valueMissing) {
    // Если поле пустое,
    // отображаем следующее сообщение об ошибке
    emailError.textContent = 'You need to enter an e-mail address.';
  } else if(inputMail.validity.typeMismatch) {
    // Если поле содержит не email-адрес,
    // отображаем следующее сообщение об ошибке
    emailError.textContent = 'Entered value needs to be an e-mail address.';
  } else if(inputMail.validity.tooShort) {
    // Если содержимое слишком короткое,
    // отображаем следующее сообщение об ошибке
    emailError.textContent = `Email should be at least ${ inputMail.minLength } characters; you entered ${ inputMail.value.length }.`;
  }

  // Задаём соответствующую стилизацию
  emailError.className = 'error active';
}


