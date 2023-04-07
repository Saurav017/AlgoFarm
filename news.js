const news = document.querySelector('.row');

window.onload = function() {
    displayNews();
}
const apiKey = "b1e5a61d20f4424799a9f39cab3e0772";
const apiUrl = `https://newsapi.org/v2/everything?q=agriculture+india&sortBy=publishedAt&apiKey=${apiKey}`;


const displayNews = async () => {

    const response = await fetch(apiUrl);
    const data = await response.json();

    data.articles.forEach(article => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');
        newsItem.innerHTML = `
        <div class="news-item">
            <div class="news-img">
                <img src="${article.urlToImage}" alt="news image">
            </div>
            <div class="news-content">
                <h3>${article.title}</h3>
                <p>${article.description}</p>
                <a href="${article.url}" target="_blank">Read more</a>
            </div>
        </div>
        `;
        news.appendChild(newsItem);
    });
}


const icon = document.querySelector('.toggle-btn');


// dark mode toggle
icon.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        icon.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        icon.innerHTML = '<i class="fas fa-moon"></i>';
    }
});