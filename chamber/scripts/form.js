
const position = document.querySelector('#position')
function validatePosition(e) {
    const regex = "^[a-zA-Z\- ]{7,}$"
    if (position.value.match(regex)) {
        position.classList.remove('error')
        position.classList.add('valid')
    } else {
        position.classList.remove('valid')
        position.classList.add('error')
    }
}
position.addEventListener('input', validatePosition)
position.addEventListener('blur', validatePosition)


const memberships = [
    ["NP Membership is for non profit organizations", "Free", "Non-profit organizations can access networking opportunities and resources tailored to their sector, supporting their missions without financial burden."],
    ["Bronze Membership", "$250 - $500 per year", "Enjoy access to chamber events, business referrals, and promotional opportunities, ideal for small businesses seeking to expand their network."],
    ["Silver Membership", "$500 - $1,000 per year", "Enhance your visibility with increased marketing opportunities, exclusive access to workshops, and priority listing in chamber directories, perfect for businesses aiming for broader exposure."],
    ["Gold Membership", "$1,000 - $2,500+ per year", "Unlock premium benefits such as VIP event invitations, personalized business consultations, and prominent sponsorship opportunities, providing unparalleled support for ambitious enterprises."],
]

const memLevel = document.querySelector('#mem_level')
const titleEl = document.querySelector('.membership h3')
const priceEl = document.querySelector('.membership .price')
const descEl = document.querySelector('.membership .description')
memLevel.addEventListener('input', (e) => {
    const val = parseInt(mem_level.value)
    if (isNaN(val)) {
        titleEl.textContent = ''
        priceEl.textContent = ''
        descEl.textContent = ''
    } else {
        titleEl.textContent = memberships[val][0]
        priceEl.textContent = memberships[val][1]
        descEl.textContent = memberships[val][2]
    }
        
})

const submit = document.querySelector('input[type="submit"]')
submit.addEventListener('click', (e) => {
    validatePosition()

    const errors = document.querySelectorAll('input.error')
    if (errors.length > 0) {
        errors.forEach(el => {
            el.classList.add('bounce')
            const errMsg = el.parentElement.parentElement.querySelector('.err-message')
            if (errMsg) {
                errMsg.classList.add('show')
            }
        })
        setTimeout(() => errors.forEach(el => el.classList.remove('bounce')), 1000)
        e.preventDefault()
    }
})

