
const inputName = document.getElementById('inputName')
const saveBtn = document.getElementById('saveBtn')
const nameAlert = document.getElementById('nameAlert')
const namesOutput = document.getElementById('names')

const alerts = {
    "alert-info": "Input your name",
    "alert-danger" : "It is impossible name",
    "alert-primary": "You can save your name",
    "alert-success" : "Your name was saved",
}

let currentAlert = "alert-info"
let names = ""

function setAlert(newAlert, specialText="") {
    nameAlert.classList.remove(currentAlert)
    currentAlert = newAlert
    nameAlert.classList.add(currentAlert)
    nameAlert.innerText = specialText !== "" ? specialText : alerts[currentAlert]
}

function saveName() { 
    names += names === "" ? inputName.value : `, ${inputName.value}`
    namesOutput.innerText = names
    inputName.value = ""
    saveBtn.disabled = true
    setAlert("alert-success")
}

inputName.addEventListener('keyup', (e) => {
    console.log(e)
    let keyValue = e.key

    if (inputName.value === ""){
        saveBtn.disabled = true
        setAlert("alert-info")
    } else if (inputName.value.length < 3) {
        saveBtn.disabled = true
        setAlert("alert-danger", "Your name too short!")
    } else {
        saveBtn.disabled = false
        setAlert("alert-primary")
    }
    if (keyValue === 'Enter' && inputName.value.length >= 3) {
        saveName()
    }   
})
saveBtn.addEventListener('click', (e) => {
    console.log(e)
    saveName()
})

//// Hoisting - всплытие https://developer.mozilla.org/ru/docs/Glossary/Hoisting

// sum(5, 6)
// varSum(5, 6)

// function sum(a, b) {
//     console.log(a, b)
//     console.log(a + b)
// }

// var varSum = function(a, b) {
//     console.log(a, b)
//     console.log(a + b)
// }

// sum(a, b)
// varSum(a, b)

// var a = 3
// var b = 2

// sum(a, b)
// varSum(a, b)

// // sum(x, y)

// let x = 5
// let y = 6

// sum(x, y)

//// Области видимости https://habr.com/ru/post/517338/

// var varGlobalName = "var global name,"
// let letGlobalName = "let global name,"
// const global = "global,"

// function newNames() {
//     const detail = "function new names,"
//     var varFunctionName = "var function name,"
//     console.log(detail, varGlobalName, letGlobalName)
//     varGlobalName = "new var global name,"
//     letGlobalName = "new let global name,"
//     console.log(detail, varGlobalName, letGlobalName)
//     console.log(detail, varFunctionName)
// }

// // console.log(global, varFunctionName)
// console.log(global, varGlobalName, letGlobalName)
// newNames()
// // console.log(global, varFunctionName)
// console.log(global, varGlobalName, letGlobalName)

// function varLetTest() {
//     var a = 'var a - 1'
//     var b = 'var b - 1'
//     let x = 'let x - 1'
//     let y = 'let y - 1'
//     if (true) {
//         var a = 'var a - 2'
//         b = 'var b - 2'
//         let x = 'let x - 2'
//         y = 'let y - 2'
//         console.log("if", a, b, x, y)
//     }
//     console.log("after", a, b, x, y)
// }
// varLetTest()

/* 
Рекомендации:

1. Имена переменных должны максимально отражать суть того, что они содержат. Рекомендации по именам переменных https://learn.javascript.ru/variable-names
2. Имена переменных внутри функции не должны пересекаться с именами переменных из уровней выше
3. Явное лучше неявного (это из питона). Лучше не менять значение глобальной переменной внутри функции

*/

// let result;

// function divide(a, b) {
//     result = a / b // вот так делать плохо, это неявное изменение переменной
//     return a / b // лучше сделать так
// }

// let response = divide(12, 4) // и вот здесь присвоить значение в нужную переменную, это явное получение результата
// console.log(result, response) // в итоге результат будет и там и там одинаковый
