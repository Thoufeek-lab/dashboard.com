let hamburger = document.querySelector('#nav-toggle');
let sidebar = document.querySelector('.sidebar');
let header = document.querySelector('.header');
let mainContent = document.querySelector('.main-content');


hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('showenu');
    header.classList.toggle("mystyle");    
    mainContent.classList.toggle("mystyle2")
})
