import Drft from '../../src/Drft'
import useDrawShape from './useDrawShape.ts'

const canvasEl = document.getElementById('canvasEl') as HTMLCanvasElement
const drft = new Drft()
drft.setup(canvasEl).then(() => {
  const draw = useDrawShape()
  const rect = draw.drawRectangle()
  drft.scene.add(rect)
})
