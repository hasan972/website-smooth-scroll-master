const menu = document.querySelector('#mobile-menu'); //for id
const menuLinks = document.querySelector('.navbar-menu')//for class

//Display Mobile menu
const mobileMenu = () =>{
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click',mobileMenu);
