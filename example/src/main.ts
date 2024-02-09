import Drft from '../../src/index'
import useDrawShape from './useDrawShape.ts'

const canvasEl = document.getElementById('canvasEl') as HTMLCanvasElement
const drft = Drft()
drft.setup(canvasEl).then(() => {
  const draw = useDrawShape(drft)
  draw.drawLine()
})
