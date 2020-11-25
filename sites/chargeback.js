(() => {

const q = document.querySelectorAll.bind(document)

// remove all styles
q('[href*=assets]').forEach(l => l.remove())
render()

// keep removing styles b/c JSS
const observer = new MutationObserver((mutations, observer) => {
  for (const mutation of mutations) {
    if (mutation.target.id == 'root') render()
  }
})
observer.observe(document.body, { childList: true, subtree: true })

function render() {
  removeStyles()
  addPlaceholders()
}

function removeStyles() { q('style').forEach(s => s.remove()) }

function addPlaceholders() {
  q('[type=text], [type=password]').forEach(el => {
    el.placeholder = el.nextElementSibling.textContent
  })
}

})()