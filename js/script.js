// * mobile menu 
const burgerBtn = document.querySelector('.burger-menu__btn')
const burgerIcon = document.querySelector('.burger-menu__icon')
const menuLinks = document.querySelectorAll('.menu__link').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('menu--open')
    burgerIcon.classList.remove('burger-menu__icon-active')
  })
})
const menu = document.querySelector('.navbar__menu')
burgerBtn.addEventListener('click', function () {
  burgerIcon.classList.toggle('burger-menu__icon-active')
  menu.classList.toggle('menu--open')
})

