
const askButton = document.getElementById('button_ask');
const answerButton = document.getElementById('button_answer');

askButton.addEventListener('click', function(event) {
    fetch("http://jservice.io/api/random?count=1").then(response => response.json()).then(task => {
        console.log(task);
        let questionDiv = document.getElementById('question');
        questionDiv.style.display = 'block';
        question.innerText = task[0].question;
        answer.innerText = task[0].answer;
    })
    .catch(error => console.log(error));
})

answerButton.addEventListener('click', function(event) {
        let answerDiv = document.getElementById('answer');
        answerDiv.style.display = 'block';
        // answerDiv.innerHTML = "";
    })



