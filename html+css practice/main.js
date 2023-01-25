const btn = document.querySelector('.nav-btn');
const menu = document.querySelector('.nav-menu');
const icons = document.querySelector('.nav-icons');


btn.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});