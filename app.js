
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




// carousel script