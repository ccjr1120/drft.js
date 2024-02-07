import Drft from '../../src/index'
import useDrawShape from './useDrawShape.ts'

const drft = Drft()
drft.setup()
const draw = useDrawShape(drft)
draw.drawLine()
