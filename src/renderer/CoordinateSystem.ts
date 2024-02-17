import { Point, Size } from '../Drft.d'

export default class CoordinateSystem {
  boxSize: Size = {
    width: 0,
    height: 0
  }

  setup(canvasEl: HTMLCanvasElement) {
    this.boxSize = {
      width: canvasEl.width,
      height: canvasEl.height
    }
  }

  private normalizationCoordinate(point: Point) {
    const [x, y] = [
      point[0] / this.boxSize.width,
      point[1] / this.boxSize.height
    ]
    return [x - 0.5, y - 0.5]
  }

  trans(points: Point[]) {
    return points.reduce((pre, cur) => {
      pre.push(...this.normalizationCoordinate(cur), 0.0)
      return pre
    }, [] as number[])
  }
}
