import Drft from '../src/index'

const drft = new Drft()

const canvasEl = document.getElementById('drft') as HTMLCanvasElement

drft.setup({ el: canvasEl })
