const observerEsquerda = new IntersectionObserver(entries => {
    Array.from(entries).forEach(entry => {
        if (entry.intersectionRatio >= .4) {
            entry.target.classList.add('iniciarVisivelEsquerda')
        }
    })
},{
    threshold: [0, .5, 1]
})

const observerDireita = new IntersectionObserver(entries => {
    Array.from(entries).forEach(entry => {
        if (entry.intersectionRatio >= .4) {
            entry.target.classList.add('iniciarVisivelDireita')
        }
    })
},{
    threshold: [0, .5, 1]
})

Array.from(document.querySelectorAll('.iniciarEscondidoEsquerda')).forEach(element => {
    observerEsquerda.observe(element)
})

Array.from(document.querySelectorAll('.iniciarEscondidoDireita')).forEach(element => {
    observerDireita.observe(element)
})