const btn = document.querySelector('.btn');

// btn.addEventListener('click', (e) => {

//     // prvent default action
//     e.preventDefault();

//     // go to results page
//     window.location.href = 'cropresult.html';
// });


const apiKey = "b1e5a61d20f4424799a9f39cab3e0772";
const apiUrl = `https://newsapi.org/v2/everything?q=agriculture+india&sortBy=publishedAt&apiKey=${apiKey}`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // process the data and create HTML elements for each slide


        console.log(data.articles);
        // for(let i=0; i<data.ar; i++) {
        //     const article = data.articles[i];
        //     console.log(article);
        // }
    })
.catch(error => console.error(error));