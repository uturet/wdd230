const burgerMenu = document.querySelector('.hamburger_menu')
const navigation = document.querySelector('.navigation')

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('open')
    navigation.classList.toggle('open')
})

function countVisited() {
    const visitsDisplay = document.querySelector(".visits");
    if (visitsDisplay === null) return
    let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
    if (numVisits !== 0) {
        visitsDisplay.textContent = numVisits;
    } else {
        visitsDisplay.textContent = `0`;
    }
    numVisits++;
    localStorage.setItem("numVisits-ls", numVisits);
}
countVisited()


const currTemp = document.querySelector('#cur-temp')
const captionDesc = document.querySelector('#weather-desc')

async function apiFetch() {
    const api = "http://api.weatherapi.com/v1/current.json?key=8fb67fc2fa6444ba96633447241003&q=Rexburg"

    const res = await fetch(api)
    const data = await res.json()
    currTemp.textContent = `${data.current.temp_f}`
    captionDesc.textContent = data.current.condition.text
}
apiFetch()

