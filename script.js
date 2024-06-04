const nav = document.querySelector('.navbar-m')
const ham = document.querySelector('.hamburger')
const close = document.querySelector('.close')

ham.addEventListener('click', () => {
nav.classList.add('show-nav')
nav.classList.remove('close-nav')
})

close.addEventListener('click', () => {
nav.classList.remove('show-nav')
nav.classList.add('close-nav')
})