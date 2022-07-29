loadNotes();
const submitBtn = document.getElementById('addBtn');
const notes = [];

submitBtn.addEventListener('click', function addNotes(event) {
    event.preventDefault();
    let noteText = document.getElementById('addNote');
    let notesString = localStorage.getItem('notes');

    if(notesString === null){
        notesObj = [];
    } else {
        notesObj = JSON.parse(notesString);
    }

    //Add date
	let now = new Date();
	let dateTime = `${now.getDate()}-${now.getMonth()+1}-${now.getFullYear()} | ${now.getHours()}:${now.getMinutes()}`;

    //pushing into local storage
    let tempObj = { text: addNote.value, time: dateTime };
    notesObj.push(tempObj);
	localStorage.setItem('notes',JSON.stringify(notesObj));
    noteText.value = '';
    loadNotes();
});

// funtion to display data stored in the local storage

function loadNotes() {
    let notesObj;
    let notesString = localStorage.getItem('notes');
    if (notesString == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notesString);
    }
    let html = '';

    notesObj.forEach(function(element,index) {
        html += `
        <div class="card mx-4 my-2 bg-dark text-white thatsMyNote" style="width: 18rem;">
					<div class="card-body">
						<h6>${element.time}</h6>
						<p class="card-text">${element.text.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
						<button id="${index}" onclick=deleteNote(this.id) class="btn btn-danger">Delete</button>
					</div>
				</div>
        `;
    });
	let noteEle = document.getElementById('notes');
	if(notesObj.length != 0){
		noteEle.innerHTML = html;
	}
	else{
		noteEle.innerHTML = '<h3 style="text-align: center; color: grey;">Nothing to display</h3>';
	}
}


//function to delete a note
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
				document.getElementById('noMatches').innerHTML = '<h3 style="text-align: center; color: grey;">No matches found</h3>';
			}
			else{
				document.getElementById('noMatches').innerHTML = '';
			}
		}
	});
	
	//Below code will be executed when the input text matches all the elements.
	if(countNone === 0){
		document.getElementById('noMatches').innerHTML = '';
	}
});

