function setLastModified(){
    const elem = document.querySelector('#last-modified')
    elem.textContent = document.lastModified.split(' ')[0]
}

function setCurYear(){
    const elem = document.querySelector('#year')
    elem.textContent = (new Date).getFullYear()
}

addEventListener("DOMContentLoaded", (event) => {
    
    setLastModified()
    setCurYear()

    setTimeout(() => {
        const body = document.querySelector('body')
        body.classList.remove('loading')
    }, 2000)
});
