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
});

