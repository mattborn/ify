const sites = [
  'z19r.pw'
]

// localStorage.setItem('ify', JSON.stringify({src:location.origin}))

const π = JSON.parse(localStorage.getItem('ify'))
const u = π ? π.src : 'https://raw.githack.com/mattborn/ify/main'
const h = location.hostname
const f = sites.includes(h) ? h : 'any'

function getURL(ext) { return `${u}/sites/${f}.${ext}?v=${Date.now()}` }

// inject styles
const c = document.createElement('link')
c.href = getURL('css')
c.rel = 'stylesheet'
document.querySelector('head').appendChild(c)

// inject scripts
const s = document.getElementsByTagName('script')[0]
const j = document.createElement('script')
j.defer = true
j.src = getURL('js')
s.parentNode.insertBefore(j,s)