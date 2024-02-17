import Drft from '../../src/Drft'
const drawShape = () => {
  const drawRectangle = () => {
    const rectangle = new Drft.Shape.Rectangle(
      [Math.random() * 700 + 10, Math.random() * 700 + 10],
      {
        width: Math.random() * 39 + 100,
        height: Math.random() * 59 + 200
      }
    )
    return rectangle
  }

  return { drawRectangle }
}

export default drawShape
