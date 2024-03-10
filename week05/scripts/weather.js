
const currTemp = document.querySelector('#cur-temp')
const weatherIcon = document.querySelector('#weather-icon')
const captionDesc = document.querySelector('figcaption')

async function apiFetch() {
    const api = "http://api.weatherapi.com/v1/current.json?key=8fb67fc2fa6444ba96633447241003&q=Rexburg"

    const res = await fetch(api)
    const data = await res.json()
    console.log(data.current.temp_f)
    currTemp.textContent = `${data.current.temp_f}`

    weatherIcon.setAttribute('src', data.current.condition.icon)
    weatherIcon.setAttribute('alt', data.current.condition.text)
    captionDesc.textContent = data.current.condition.text
}
apiFetch()