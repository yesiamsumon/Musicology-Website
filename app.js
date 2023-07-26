let open_menu = document.querySelector('#open-menu');
let navbar_list = document.querySelector('nav');
let close_menu = document.querySelector('.fa-xmark');

open_menu.addEventListener('click',()=>{
    navbar_list.classList.add('active')
})
close_menu.addEventListener('click',()=>{
    navbar_list.classList.remove('active')
})