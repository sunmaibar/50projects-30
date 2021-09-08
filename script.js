const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')

const text = `觀自在菩薩，行深般若波羅蜜多時，照見五蘊皆空，度一切苦厄。

舍利子！色不異空，空不異色；色即是空，空即是色，受想行識亦復如是。

舍利子！是諸法空相，不生不滅，不垢不淨，不增不減。

`

let idx = 1
let speed = 300 / speedEl.value

writeText()

function writeText() {
  textEl.innerText = text.slice(0, idx)
  idx++
  if (idx > text.length) {
    idx = 1
  }
  setTimeout(writeText, speed)
}

speedEl.addEventListener('input', (e) => (speed = 300 / e.target.value))
