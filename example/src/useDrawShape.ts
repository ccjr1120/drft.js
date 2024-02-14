import Drft from '../../src/Drft'
const drawShape = () => {
  const drawRectangle = () => {
    const rectangle = new Drft.Shape.Rectangle(
      { width: 100, height: 100 },
      { x: 200, y: 200 }
    )
    return rectangle
  }

  return { drawRectangle }
}

export default drawShape
