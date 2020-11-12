document.querySelector('[href^="/css"').remove()

moreScripts([
  'https://unpkg.com/scrollreveal'
])

document.addEventListener('AllScriptsLoaded', () => {

  ScrollReveal().reveal('div', {
    distance: '30%',
    interval: 50,
    origin: 'bottom',
  })

})