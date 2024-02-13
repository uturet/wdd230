const burgerMenu = document.querySelector('.hamburger_menu')
const navigation = document.querySelector('.navigation')

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('open')
    navigation.classList.toggle('open')
})

const visitsDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `0`;
}
numVisits++;
localStorage.setItem("numVisits-ls", numVisits);
