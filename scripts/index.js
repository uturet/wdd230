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
    const api = "https://api.openweathermap.org/data/2.5/weather?lat=43.824683&lon=-111.782721&appid=47932cfde3bb73e9fa4108c38c1b599d&units=imperial"

    const res = await fetch(api)
    const data = await res.json()
    currTemp.textContent = `${data.main.temp}`
    captionDesc.textContent = data.weather[0].main
}
apiFetch()
