document.querySelector('[href^="/css"').remove()

moreScripts([
  'https://unpkg.com/scrollreveal'
])

document.addEventListener('AllScriptsLoaded', () => {

  const revealThese = [
    'h1',
    '.navbar-menu .navbar-item',
    '.tabs li',
    '.card',
    '.footer p',
    'h2',
    'input',
    'button'
  ]
  ScrollReveal().reveal(revealThese.join(','), {
    cleanup: true,
    distance: '48px',
    interval: 100,
    origin: 'bottom',
  })

})