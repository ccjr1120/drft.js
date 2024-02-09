import Drft from '../../src/index'
const drawShape = (drft: ReturnType<typeof Drft>) => {
  const drawCircle = () => {
    drft.draw.circle()
  }

  return { drawCircle }
}

export default drawShape
