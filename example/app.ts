import Drft from '../src/index'

const canvasEl = document.getElementById('drft') as HTMLCanvasElement
const drft = new Drft()

type PenType = 'pen' | 'clear'
// await drft.setup({ target: canvasEl })
const penList = ['pen', 'clear']
let type: PenType = 'pen'
const setType = (value: PenType) => {
  type = value
  for (const item of penList) {
    document.getElementById(item).className = 'bar-item'
  }
  document.getElementById(value).className = 'bar-item active'
}

for (const item of penList) {
  document.getElementById(item).addEventListener('click', () => {
    setType(item as PenType)
  })
}
