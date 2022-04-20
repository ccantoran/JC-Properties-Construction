const mainMenu = document.querySelector('.mainMenu')
const openMenu = document.querySelector('.openMenu')
const closeMenu = document.querySelector('.closeMenu')


document.querySelector('.openMenu').addEventListener('click', show);
document.querySelector('.closeMenu').addEventListener('click', close);

function show(){
    mainMenu.style.display = 'flex';
    openMenu.style.display = 'none';
    document.querySelector('.firstli').addEventListener('click', close);
    document.querySelector('.secondli').addEventListener('click', close);
    document.querySelector('.thirdli').addEventListener('click', close);
    document.querySelector('.fourthli').addEventListener('click', close);
    document.querySelector('.fifthli').addEventListener('click', close);
}
function close(){
    mainMenu.style.display = "none";
    openMenu.style.display = "flex";
}




