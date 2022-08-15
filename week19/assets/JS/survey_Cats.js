class Cat {
    constructor(CatName, HolderName, HolderSurname, breed, feed, gender, age, description, photo) {
        this.CatName = CatName
        this.HolderName = HolderName
        this.HolderSurname = HolderSurname
        this.breed = breed
        this.feed = feed
        this.gender = gender
        this.age = age
        this.description = description
        this.photo = photo
    }
}

const submitBtn = document.getElementById('submitButton')

submitBtn.addEventListener('click', function(event) {
    event.preventDefault();
    let inputNameOfCat = document.getElementById("patsName").value;
    let inputHolderName = document.getElementById("firstName").value;
    let inputHolderSurname = document.getElementById("secondName").value;
    let inputBreed = document.querySelector('#breed').value;
    let checkboxFeed = document.querySelectorAll('input[name="food"]');
    let radioGender = document.querySelectorAll('input[name="gender"]');
    let inputAge = document.getElementById("age").value;
    let inputDescription = document.getElementById("comments").value;
    let inputPhoto = document.getElementById("photo").value;
    
    for (const radio of radioGender) {
        if (radio.checked) {
            radioGender = radio.value;
        }
    }

    for (const checkbox of checkboxFeed) {
        if (checkbox.checked) {
            checkboxFeed = checkbox.value;
        }
    }

    let cat1 = new Cat(inputNameOfCat, inputHolderName, inputHolderSurname, inputBreed, checkboxFeed, radioGender, inputAge, inputDescription, inputPhoto);
    console.log(cat1);
})

