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
    let cat = new Cat(function);
    
})