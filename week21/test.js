class Test {
    constructor(questions, results) {
        this.questions = questions;     //Массив с вопросами
        this.results = results;  //массив с результатами       
        this.score = "";      //Количество набранных очков
        this.result = 0;     //Номер результата из массива
        this.current = 0;    //Номер текущего вопроса
    }

    Click(index) {
        //Добавляем очки
        let value = this.questions[this.current].Click(index);
        this.score += value;
        console.log(this.score);
        this.Next();
    }
    
    //Переход к следующему вопросу
    Next() {
        this.current++;
        if (this.current >= this.questions.length) {
            this.End();
        }
    }

    //Если вопросы кончились, проверка результата 
    End() {
        for (let i = 0; i < this.results.length; i++) {
            if (this.results[i].Check(this.score)) {
                this.result = i;
            }
        }
    }
}


//Класс, представляющий вопрос
class Question {
    constructor(text, answers) {
        this.text = text;
        this.answers = answers;
    }
    Click(index) {
        return this.answers[index].value;
    }
}

//Класс, представляющий ответ
class Answer {
    constructor(text, value) {
        this.text = text;
        this.value = value;
    }
}

//Класс, представляющий результат
class Result {
    constructor(text, value) {
        this.text = text;
        this.value = value;
    }

    Check(value) {
        if (this.value === value) {
            return true;
        }
        else {
            return false;
        }
    }
}

//Массив с результатами
const results =
    [
        new Result("Вам подойдут персональные тренировки онлайн или заочное сопровождение в тренажерном зале. Так вы сможете заниматься из любой точки мира, не прерывая процесс.", "11"),
        new Result("Отдайте предпочтение онлайн персональным тренировкам: только вы и тренер в удобное время и в любом месте.", "10"),
        new Result("Идеальный вариант — очные занятия с тренером в тренажерном зале. И технику поставите, и над дисциплиной поработаете.", "01"),
        new Result("Вы можете попробовать заниматься очно или выбрать заочное сопровождение в тренажерном зале. Легче всего прогрессировать за счет увеличения рабочего веса. Дома вы быстро упретесь в «потолок».", "00")
    ];

//Массив с вопросами
const questions =
    [
        new Question("Часто ли вы путешествуете и/или переезжаете?",
            [
                new Answer("Да, я часто в разъездах", "1"),
                new Answer("Нет, я веду оседлый образ жизни", "0")
            ]),
        new Question("Комфортно ли вам тренироваться в присутствии других людей?",
            [
                new Answer("Да, мне безразлично присутствие других людей", "1"),
                new Answer("Нет, я стесняюсь в присутствии других людей", "0")
            ])
    ];

//Экземпляр теста
const test = new Test(questions, results);

Update();

//Обновление теста
function Update() {
    const headElem = document.getElementById('head');
    const buttonsElem = document.getElementById('buttons');
    const pagesElem = document.getElementById('pages');
    //Проверяем, есть ли ещё вопросы
    if (test.current < test.questions.length) {

        //Если есть, меняем вопрос в заголовке
        headElem.innerHTML = test.questions[test.current].text;

        //Удаляем старые варианты ответов
        buttonsElem.innerHTML = "";
        //Создаём кнопки для новых вариантов ответов
        for (let i = 0; i < test.questions[test.current].answers.length; i++) {
            let btn = document.createElement("button");
            btn.className = "button";
            btn.innerHTML = test.questions[test.current].answers[i].text;
            btn.setAttribute("index", i);
            buttonsElem.appendChild(btn);
        }

        //Выводим номер текущего вопроса
        pagesElem.innerHTML = (test.current + 1) + " / " + test.questions.length;

        //Вызываем функцию, которая прикрепит события к новым кнопкам
        Init();
    }
    else {
        //Если это конец, то выводим результат
        buttonsElem.innerHTML = "";
        headElem.innerHTML = test.results[test.result].text;
        pagesElem.innerHTML = "Очки: " + test.score;
    }
}

function Init() {
    //Находим все кнопки
    let btns = document.getElementsByClassName("button");

    for (let i = 0; i < btns.length; i++) {
        //Прикрепляем событие для каждой отдельной кнопки
        //При нажатии на кнопку будет вызываться функция Click()
        btns[i].addEventListener("click", function (e) { Click(e.target.getAttribute("index")); });
    }
}

function Click(index) {
    //Получаем номер правильного ответа
    let correct = test.Click(index);

    //Ждём секунду и обновляем тест
    setTimeout(Update, 1000);
}