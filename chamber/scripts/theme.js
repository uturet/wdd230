const themeEl = document.querySelector('.theme-toggle')
themeEl.addEventListener('click', (e) => {
    document.body.classList.toggle('dark')
    const theme = {
        "theme": document.body.classList.contains('dark') ? 'dark': ''
    }
    localStorage.setItem('theme', JSON.stringify(theme))
})

function setTheme() {
    const theme = JSON.parse(localStorage.getItem('theme')) ?? {
        "theme": '',
    }
    document.body.classList.add(theme.theme)
}
setTheme()