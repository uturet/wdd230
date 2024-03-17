const controls = document.querySelectorAll('section span.ctr-btn')
const main = document.querySelector('main')

let curControl = 'order'
controls.forEach(e => {
    e.addEventListener('click', event => {
        controls.forEach(btn => btn.classList.remove('active'))
        e.classList.add('active')
        curControl = e.dataset.ctr

        main.classList.remove('list')
        main.classList.remove('order')

        main.classList.add(curControl)
    })
})

async function loadData() {
    const res = await fetch('data/members.json')
    const data = await res.json()
    let companies = ''
    data.companies.forEach(s => {
        companies += `<section class="company-card">
        <h2>${s.name}</h2>
    
        <div class="image-wrapper">
          <img src="${s.image}" alt="logo ${s.url}" />
        </div>
        <div>
          <p>${s.description}</p>
          <p>${s.address}</p>
          <p>${s.phoneNumber}</p>
          <a href="${s.url}">${s.url}</a>
          <p>${s.membershipLevel}</p>
        </div>
      </section>`
    })

    main.innerHTML = companies
}
loadData()

