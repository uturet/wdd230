const days = document.querySelectorAll('.content .weather > div')
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

async function apiFetch() {
    const api = "https://api.openweathermap.org/data/2.5/forecast?lat=29.985655567836478&lon=-90.13464996489392&appid=47932cfde3bb73e9fa4108c38c1b599d&units=imperial&exclude=daily"
     
    const res = await fetch(api)
    const data = await res.json()

    data.list.forEach((v,i) => {
        if (i % 8 === 0) {
            days[Math.floor(i/8)].innerHTML = `<p>${weekDays[(new Date(v.dt * 1000)).getDay()]}</p><p>${v.main.temp} F</p><p>${v.weather[0].main}</p>`
        }
    })
}
apiFetch()