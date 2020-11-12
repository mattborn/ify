const sites = [
  'z19r.pw'
]

// localStorage.setItem('ify', JSON.stringify({src:location.origin}))

const π = JSON.parse(localStorage.getItem('ify'))
const u = π ? π.src : 'https://rawcdn.githack.com/mattborn/ify/main'
const h = location.hostname
const f = sites.includes(h) ? h : 'any'

function getURL(ext) { return `${u}/sites/${f}.${ext}?v=${Date.now()}` }

// inject styles
const c = document.createElement('link')
c.href = getURL('css')
c.rel = 'stylesheet'
document.querySelector('head').appendChild(c)

// inject scripts
const z = document.getElementsByTagName('script')[0]
const j = createScript(getURL('js'))
z.parentNode.insertBefore(j,z)

function createScript(src) {
  const s = document.createElement('script')
  s.defer = true
  s.src = src
  return s
}

function moreScripts(scripts) {
  const scriptsLoaded = []
  for (script of scripts) {
    const j = createScript(script)
    j.onload = () => {
      scriptsLoaded.push(script)
      if (scripts.length === scriptsLoaded.length) document.dispatchEvent(new Event('AllScriptsLoaded'))
    }
    document.body.appendChild(j)
  }
}