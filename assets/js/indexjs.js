const observer = new IntersectionObserver(entries => {
    Array.from(entries).forEach(entry => {
        if (entry.intersectionRatio >= .5) {
            entry.target.classList.add('iniciarVisivel')
        }
    })
},{
    threshold: [0, .5, 1]
})

Array.from(document.querySelectorAll('.iniciarEscondido')).forEach(element => {
    observer.observe(element)
})