const username = document.querySelector('#username')
function validateUsername(e) {
    if (username.value.length > 4) {
        username.classList.remove('error')
        username.classList.add('valid')
    } else {
        e.target.classList.remove('valid')
        e.target.classList.add('error')
    }
}
username.addEventListener('input', validateUsername)
username.addEventListener('blur', validateUsername)

const email = document.querySelector('#email')
function validateEmail(e) {
    const regex = "[a-zA-Z0-9._%+-]+@byui\.edu$"
    if (e.target.value.match(regex)) {
        e.target.classList.remove('error')
        e.target.classList.add('valid')
    } else {
        e.target.classList.remove('valid')
        e.target.classList.add('error')
    }
}
email.addEventListener('input', validateEmail)
email.addEventListener('blur', validateEmail)

const pass = document.querySelector('#password')
const repPass = document.querySelector('#repeat_password')
function validatePass(e) {
    if (pass.value.length < 4) {
        pass.classList.remove('valid')
        pass.classList.add('error')
    } else {
        pass.classList.remove('error')
        pass.classList.add('valid')
    }
    if (repPass.value !== pass.value || pass.value.length < 4) {
        repPass.classList.remove('valid')
        repPass.classList.add('error')
    } else {
        repPass.classList.remove('error')
        repPass.classList.add('valid')
    }
}
pass.addEventListener('input', validatePass)
pass.addEventListener('blur', validatePass)
repPass.addEventListener('input', validatePass)
repPass.addEventListener('blur', validatePass)


const rating = document.querySelector('#rating')
const ratVal = document.querySelector('.rating-value')
ratVal.textContent = rating.value
rating.addEventListener('input', (e) => {
    ratVal.textContent = e.target.value
})

const submit = document.querySelector('input[type="submit"]')
submit.addEventListener('click', (e) => {
    const errors = document.querySelectorAll('input.error')
    if (errors.length > 0) {
        errors.forEach(el => el.classList.add('bounce'))
        setTimeout(() => errors.forEach(el => el.classList.remove('bounce')), 1000)
        e.preventDefault()
    }
})
