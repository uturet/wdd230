const burgerMenu = document.querySelector('.hamburger_menu')
const navigation = document.querySelector('.navigation')

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('open')
    navigation.classList.toggle('open')
})