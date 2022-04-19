const mainMenu = document.querySelector('.mainMenu')
const openMenu = document.querySelector('.openMenu')


document.querySelector('.openMenu').addEventListener('click', show);
document.querySelector('.closeMenu').addEventListener('click', close);
document.querySelector('.firstli').addEventListener('click', close);
document.querySelector('.secondli').addEventListener('click', close);
document.querySelector('.thirdli').addEventListener('click', close);
document.querySelector('.fourthli').addEventListener('click', close);

function show(){
    mainMenu.style.display = 'block';
    openMenu.style.display = 'none';
}
function close(){
    mainMenu.style.display = 'none';
    openMenu.style.display = 'flex'
}



