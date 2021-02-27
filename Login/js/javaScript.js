//Hare is all of the javascript code

const box =       document.querySelector('.box');
const container = document.querySelector('.container');
const head =      document.querySelector('#head');
const man =       document.querySelector('#man');
const you =       document.querySelector('#you');
const form =      document.querySelector('#form');

container.addEventListener("mousemove", (e) =>{
  let horizontal = (window.innerWidth / 2 - e.pageX) / 10;
  let verticle = (window.innerHeight / 2 - e.pageY) / 10;
  box.style.transform = `rotateX(${verticle}deg) rotateY(${horizontal}deg)`;
});


//hare is the another javascript code for rotate the login form or object smoothly and this time the login form looking more beautifull
container.addEventListener("mouseenter", (e)=>{
  box.style.transition = ".1s";
  head.style.transform = "translateZ(120px)";
  man.style.transform =  "translateZ(150px)";
  you.style.transform =  "translateZ(130px)";
  form.style.transform = "translateZ(100px)";
  head.style.color ="blue";
});

 container.addEventListener("mouseleave", (e)=>{
   box.style.transition = ".1s";
   //login form get main position for this line
   box.style.transform = "rotateY(0deg) rotateX(0deg)";
   head.style.transform = "translateZ(0px)";
   man.style.transform = "translateZ(0px)";
   you.style.transform = "translateZ(0px)";
   form.style.transform = "translateZ(opx)";
   head.style.color ="white";
 });
