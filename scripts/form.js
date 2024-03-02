const username = document.querySelector('#username')
function validateUsername(e) {

    if (username.value.length > 3) {
        username.classList.remove('error')
        username.classList.add('valid')
    } else {
        username.classList.remove('valid')
        username.classList.add('error')
    }
}
username.addEventListener('input', validateUsername)
username.addEventListener('blur', validateUsername)

const email = document.querySelector('#email')
function validateEmail(e) {
    const regex = "[a-zA-Z0-9._%+-]+@byui\.edu$"
    if (email.value.match(regex)) {
        email.classList.remove('error')
        email.classList.add('valid')
    } else {
        email.classList.remove('valid')
        email.classList.add('error')
    }
}
email.addEventListener('input', validateEmail)
email.addEventListener('blur', validateEmail)

const pass = document.querySelector('#password')
const repPass = document.querySelector('#repeat_password')
function validatePass(e) {
    const isValidPass = pass.value.length > 4 && pass.value.length < 13 && pass.value.match("\\d")
    console.log(isValidPass)
    if (isValidPass) {
        pass.classList.remove('error')
        pass.classList.add('valid')
    } else {
        pass.classList.remove('valid')
        pass.classList.add('error')
    }
    if (repPass.value === pass.value && isValidPass) {
        repPass.classList.remove('error')
        repPass.classList.add('valid')
    } else {
        repPass.classList.remove('valid')
        repPass.classList.add('error')
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
        validateUsername()
        validateEmail()
        validatePass()
        e.preventDefault()
    }
})
