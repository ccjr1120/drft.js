import Drft from '../../src/index'

const canvasEl = document.getElementById('canvasEl') as HTMLCanvasElement
const drft = new Drft({ renderView: canvasEl })
const scene = drft.scene
const shape = drft.element.shape
