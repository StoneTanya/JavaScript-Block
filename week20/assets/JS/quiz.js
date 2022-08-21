const askButton = document.getElementById('button_ask');
const answerButton = document.getElementById('button_answer');
const answerDiv = document.getElementById('answer');
const questionDiv = document.getElementById('question');

askButton.addEventListener('click', function(event) {
    event.preventDefault();
    fetch("http://jservice.io/api/random?count=1")
        .then(response => response.json())
        .then(task => {
        console.log(task);
        questionDiv.style.display = 'block';
        question.innerText = task[0].question;
        answer.innerText = task[0].answer;
        answerDiv.style.display = 'none';
    })
    .catch(error => console.log(error));
})

answerButton.addEventListener('click', function(event) {
    event.preventDefault();
    answerDiv.style.display = 'block';
    // answerDiv.innerHTML = "";
})



