async function loadLinks() {
    const res = await fetch('data/links.json')
    const data = await res.json()
    const learningActivities = document.querySelector('body > main > section:nth-child(3)')

    data.weeks.forEach(w => {
        const week = document.createElement('span')
        week.classList.add('card-item')
        week.append(`${w.week}: `)
        w.links.forEach((l, i) => {
            const link = document.createElement('a')
            link.href = l.url
            link.textContent = l.title
            week.append(link)
            if (i !== w.links.length-1) {
                week.append(' | ')
            }
        })
        learningActivities.append(week)
    })
}
loadLinks()

