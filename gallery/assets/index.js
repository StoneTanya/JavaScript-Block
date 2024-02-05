// переменные и функции для вывода содержимого input  на страницу
let message = document.querySelector('.hello-message');
let form = document.querySelector('.hello');
let name = document.querySelector('.hello-name');


const btn_prev = document.getElementById("prev");
const btn_next = document.getElementById("next");
const images = document.querySelectorAll(".mySlade");
let i = 0;                           //  текущая (активная) картинка

btn_next.onclick = function () {             //функция при клике на кнопку "вперед" 
images[i].style.display = 'none';      // прячем текущую картинку
i++;                                    // увеличиваем переменную i на единицу, т.е. к следующей картинке
if (i >= images.length) {                // пишем правило, если номер картинки станет больше общего кол-ва картинок (5), то i=0 (т.е. возвращаемся к активной картинке)
    i = 0;                              // переменная i равна 0
}
images[i].style.display = 'block';         // делаем видимой каждую следующую картинку
}

btn_prev.onclick = function () {                  //функция при клике на кнопку "назад" - все наоборот, уменьшаем на единицу
    images[i].style.display = 'none';
    i = i - 1;
    if (i < 0) {
        i = images.length - 1;
    }
    images[i].style.display = 'block';
}