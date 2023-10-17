import Drft from '../src/index'

const canvasEl = document.getElementById('drft') as HTMLCanvasElement
const drft = new Drft()

await drft.setup({ target: canvasEl })
