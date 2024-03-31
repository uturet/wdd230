
async function loadData() {
    const businessesEl = document.querySelector('#businesses')
    const res = await fetch('data/members.json')
    const data = await res.json()
    let text = ''
    
    let companies = getRandCompanies(data.companies)

    companies.forEach(s => {
        text += `<div class="card">
        <h2>${s.name}</h2>
        <img src="${s.image}" alt="logo ${s.url}" />
        <p>${s.description}</p>
        <p>${s.address}</p>
        <p>${s.phoneNumber}</p>
        <a href="${s.url}">${s.url}</a>
        <p>${s.membershipLevel}</p>
      </div>`
    })

    businessesEl.innerHTML = text
}
loadData()

function getRandCompanies(companies) {
    const selected = []

    while (selected.length < 2) {
        const s = companies[Math.floor(Math.random() * companies.length)]
        if (s.membershipLevel === 'bronze' || selected.some(v => v.name === s.name)) continue
        selected.push(s)
    }
    return selected
}

const banner = document.querySelector('#banner')
const closeBanner = document.querySelector('#banner .close')

function showBanner() {
    const today = new Date();
    const dayOfWeek = today.getDay();

    if (dayOfWeek >= 1 && dayOfWeek <= 3) {
        banner.classList.remove('hidden')
    }
}
showBanner()

closeBanner.addEventListener('click', (e) => {
    banner.classList.add('hidden')
})