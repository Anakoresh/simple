const menulist = document.querySelector('.menu-list');
const burgermenu = document.querySelector('.burger-menu');
const closemenu = document.querySelector('.close-menu');
const menusections = document.querySelectorAll('.burger-menu .menu-section');

menulist.addEventListener('click', () => {
    burgermenu.classList.add('pos-fixed');
    burgermenu.style.display = "block";
})

closemenu.addEventListener('click', () => {
    burgermenu.classList.remove('pos-fixed');
    burgermenu.style.display = "none";
})

for (const menusection of menusections) {
    menusection.addEventListener('click', () => {
        burgermenu.classList.remove('pos-fixed');
        burgermenu.style.display = "none";
    })
}