import Drft from '../../src/Drft'
import useDrawShape from './useDrawShape.ts'

const canvasEl = document.getElementById('canvasEl') as HTMLCanvasElement
const drft = new Drft()
drft.setup(canvasEl).then(() => {
  const draw = useDrawShape()
  console.time('1')
  for (let i = 0; i < 10000; i++) {
    const rect = draw.drawRectangle()
    drft.scene.add(rect)
  }
  console.timeEnd('1')
})
