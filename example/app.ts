import Drft from '../src/index'

const canvasEl = document.getElementById('drft') as HTMLCanvasElement
const drft = new Drft({ target: canvasEl })
setTimeout(() => {
  drft.example()
}, 1000)
