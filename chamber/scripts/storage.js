function storage() {
    const visit = JSON.parse(localStorage.getItem('visit')) ?? {
        "lastVisit": Date.now(),
        "VisitCount": 0,

    }

    visit.VisitCount = visit.VisitCount + 1

    let message

    if (visit.VisitCount == 1) {
        message = "Welcome! Let us know if you have any questions."
    }
    else if ((Date.now() - visit.lastVisit) < 3600000 ) {
        message = "Back so soon! Awesome!"
    } else {
        const days = Math.floor((Date.now() - visit.lastVisit) / 3600000)
        message = `You last visited ${days} days ago.`
    }

    const userVisits = document.querySelector('.user-visits')
    userVisits.textContent = message

    visit.lastVisit = Date.now()

    localStorage.setItem('visit', JSON.stringify(visit))
}
storage()