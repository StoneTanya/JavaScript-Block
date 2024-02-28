loadNotes();
const submitBtn = document.getElementById('addBtn');
const notes = [];

// функция создания заметки и помещение ее в Local storage
submitBtn.addEventListener('click', function addNotes(event) {
    event.preventDefault();
    let noteText = document.getElementById('addNote');
    let notesString = localStorage.getItem('notes');

	 //дата создания заметки
	let now = new Date();
	let dateTime = `${now.getDate()}-${now.getMonth()+1}-${now.getFullYear()} | ${now.getHours()}:${now.getMinutes()}`;

   //создаем объект и отправляем данные (заметку и время) в local storage
    let tempObj = {
		text: addNote.value,
		time: dateTime
	};
	
    if(notesString === null){
        notesObj = [];
    } else {
        notesObj = JSON.parse(notesString);
    }

    notesObj.push(tempObj);
	localStorage.setItem('notes', JSON.stringify(notesObj));
    noteText.value = '';
    loadNotes();
});

// функция выгрузки заметок из local storage
function loadNotes() {
    let notesObj;
    let notesString = localStorage.getItem('notes');
    if (notesString === null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notesString);
    }
    let out = '';

    notesObj.forEach(function(element,index) {
        out += `
        <div class="card mx-4 my-2 text-bg-info p-3 thatsMyNote" style="width: 18rem;">
					<div class="card-body">
						<h6>${element.time}</h6>
						<p class="card-text">${element.text.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
						<button id="${index}" onclick=deleteNote(this.id) class="btn text-bg-light p-3">Delete</button>
					</div>
				</div>
        `;
    });
	let noteField = document.getElementById('notes');    // вывод заметок в html, если нет заметок - показывать текст, что заметки отсутствуют
	if(notesObj.length != 0){
		noteField.innerHTML = out;
	} else {
		noteField.innerHTML = '<h3 style="text-align: center; color: grey;">Нет ни одной заметки</h3>';
	}
}

//функция удаления заметок после выполнения
function deleteNote(index){
	let notesObj;
	let notesString = localStorage.getItem('notes');
	if(notesString == null){
		notesObj = [];
	}
	else{
		notesObj = JSON.parse(notesString);
	}
	notesObj.splice(index,1);
	localStorage.setItem('notes',JSON.stringify(notesObj));
	loadNotes();
}


//функция поиска заметок
let search = document.getElementById('search');
search.addEventListener('input',function(e){
	let inputText = search.value;
	//below statement will be executed when the search bar is emptied using backspace
	if(inputText == ''){
		document.getElementById('noMatches').innerHTML = '';
	}
	var countNone = 0;
	let cards = document.getElementsByClassName('thatsMyNote');
	
	Array.from(cards).forEach(function(elem){
		let cardText = elem.getElementsByTagName('p')[0].innerText;
		if(cardText.includes(inputText)){
			elem.style.display = 'block';
		}
		else{
			elem.style.display = 'none';
			countNone++;
			if(countNone === cards.length){
				document.getElementById('noMatches').innerHTML = '<h3 style="text-align: center; color: grey;">Не найдено</h3>';
			}
			else{
				document.getElementById('noMatches').innerHTML = '';
			}
		}
	});
	
	if(countNone === 0){
		document.getElementById('noMatches').innerHTML = '';
	}
});

