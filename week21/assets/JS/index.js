
const resultField = document.getElementById('result');
const searchButton = document.getElementById('searchBtn');

// searchButton.addEventListener('click', function (event) {
//     event.preventDefault();
//     let gif = document.getElementById('search').value;
//     fetch("https://api.giphy.com/v1/gifs/search?api_key=WhQL37B91AT1cVHUj5hMAtydYiWHmJpE&limit=1&offset=0&rating=g&lang=en&q=" + gif)
//         .then(response => response.json())
//         .then(gifImg => {
//             resultField.innerHTML = JSON.parse(gifImg);
//             console.log(gifImg);
//             // resultField.src = gifImg.data.url;
//         })
//         .catch(error => console.log(error));
// })

searchButton.addEventListener('click', async function getGif (event) {
    event.preventDefault();
    try {
    let gif = document.getElementById('search').value;
    let response = await fetch("https://api.giphy.com/v1/gifs/search?api_key=WhQL37B91AT1cVHUj5hMAtydYiWHmJpE&limit=1&offset=0&rating=g&lang=en&q=" + gif);
    let data = await response.json();
    console.log(data);
    resultField.innerHTML = data;
    } catch(error) {
        console.log('error', response.status);
    }
})