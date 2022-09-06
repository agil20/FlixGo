const menuBtn = document.querySelector('.menu-btn');
let count=0;
const closeright =document.querySelector('.close_right');
const burgerright =document.querySelector('.burger_right');
let menyubugers=document.querySelector(".men");
menuBtn.addEventListener('click', (e) => {
   count++; 
  
 if (count%2==1)
 {
    closeright.classList.remove('hidden_menu');

    burgerright.classList.add('hidden_menu');
  //  menyubugers.classList.remove('invisible');

 }
 else
 {
    closeright.classList.add('hidden_menu');
    burgerright.classList.remove('hidden_menu');

 }
 
  
 

  });