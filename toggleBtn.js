const toggleBtn = document.querySelector('.menu_toggleBtn');
const side_bar = document.querySelector('.side_menu_bar');
const main = document.querySelector('.main');
const link = document.querySelector('.menu_link');
const logo = document.querySelector('.menu_logo');
const menu = document.querySelector('.menu');
const str = document.querySelectorAll('.string');

toggleBtn.addEventListener('click',()=>{
  toggleBtn.classList.toggle('active');
  side_bar.classList.toggle('active');
  main.classList.toggle('active');
  link.classList.toggle('active');
  logo.classList.toggle('active');
  menu.classList.toggle('active');
  for(const element of str){
    element.classList.toggle('active')
  }
  
})