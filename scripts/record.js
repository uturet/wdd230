function setData() {
    const urlParams = new URLSearchParams(window.location.search);
    const username = document.querySelector('#username')
    const email = document.querySelector('#email')

    if (urlParams.has('username') && username) {
        username.textContent = urlParams.get('username')
    }
    if (urlParams.has('email') && email) {
        email.textContent = urlParams.get('email')
    }
}
setData()