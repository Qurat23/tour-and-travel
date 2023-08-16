let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let registerBtn = document.querySelector('#register-btn');
let lregisterBtn = document.querySelector('.register-btn');
let RegisterForm = document.querySelector('.registration-form-container');
let registerClose = document.querySelector('#form-close');
let registrationClose = document.querySelector('#registration-close');
let booklogin = document.querySelector('.book');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let bookclick1 = document.querySelector('#plane');
let bookclick2 = document.querySelector('#train');
let bookclick3 = document.querySelector('#bus');
let bookclick4 = document.querySelector('#taxi');
let bookclick5 = document.querySelector('#ship');
let bookclick6 = document.querySelector('#hotel');
let bookClose = document.querySelector('#book-close');
let videoBtn = document.querySelectorAll('.vid-btn');

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    RegisterForm.classList.remove('active');
    booklogin.classList.remove('active');
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});


formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});

lregisterBtn.addEventListener('click', () =>{
  loginForm.classList.remove('active');
});

registerBtn.addEventListener('click', () =>{
  RegisterForm.classList.add('active');
});

lregisterBtn.addEventListener('click', () =>{
  RegisterForm.classList.add('active');
});

registrationClose.addEventListener('click', () =>{
  RegisterForm.classList.remove('active');
});

bookclick1.addEventListener('click', () =>{
  booklogin.classList.add('active');
});
bookclick2.addEventListener('click', () =>{
  booklogin.classList.add('active');
});
bookclick3.addEventListener('click', () =>{
  booklogin.classList.add('active');
});
bookclick4.addEventListener('click', () =>{
  booklogin.classList.add('active');
});
bookclick5.addEventListener('click', () =>{
  booklogin.classList.add('active');
});
bookclick6.addEventListener('click', () =>{
  booklogin.classList.add('active');
});

bookClose.addEventListener('click', () =>{
  booklogin.classList.remove('active');
})



videoBtn.forEach(btn =>{
  btn.addEventListener('click', ()=>{
      document.querySelector('.controls .active').classList.remove('active');
      btn.classList.add('active');
      let src = btn.getAttribute('data-src');
      document.querySelector('#video-slider').src = src;
  });
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  loop:true,
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  },
  breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
  },
});

var swiper = new Swiper(".brand-slider", {
  spaceBetween: 20,
  loop:true,
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  },
  breakpoints: {
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      },
    },
});