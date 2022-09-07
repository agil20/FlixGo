
const menuBtn = document.querySelector('.menu-btn');
let count=0;
const closeright =document.querySelector('.close_right');
const burgerright =document.querySelector('.burger_right');
let menyubugers=document.querySelector(".menyu-bugers");
let searchicon = document.querySelector('.search_icon');
let searchcontainer=document.querySelector('.search_container');

let openemu = false;
searchicon.addEventListener('click',() => {
   if(!openemu) {
      searchcontainer.style.visibility = "visible";
      searchcontainer.style.transition = "duration(0s)" 
      searchcontainer.style.transform = "translatey(0px)"
      searchcontainer.style.opacity="1" 
      
      openemu = true;
   }
   else {
      searchcontainer.style.visibility="hidden";
      searchcontainer.style.transition = "duration(1s)" 
      searchcontainer.style.opacity="0" 
      searchcontainer.style.transform = "translatey(-50px)"
      openemu = false;
   }
});

menuBtn.addEventListener('click', (e) => {
   count++; 
  
 if (count%2==1)
 {
    closeright.classList.remove('hidden_menu');
   
    burgerright.classList.add('hidden_menu');
    menyubugers.classList.remove('d-none');


 }
 else
 {
    closeright.classList.add('hidden_menu');
    burgerright.classList.remove('hidden_menu');
    menyubugers.classList.add('d-none');
 }
 
  });
  $(document).ready(function(){
   $('.owl-carousel').owlCarousel({
       loop:true,
       margin:10,
       nav:true,
       center: true,
       responsive:{
           0:{
               items:1
           },
           600:{
               items:3
           },
           1000:{
               items:5
           }
       }
   });
 });
 

  