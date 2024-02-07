import Drft from '../../src/index'
const drawShape = (drft: ReturnType<typeof Drft>) => {
  const drawLine = () => {
    drft.setup()
  }

  return { drawLine }
}

export default drawShape
