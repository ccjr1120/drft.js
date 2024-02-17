import { Point, Size } from '../Drft.d'
import { ShapePrimitive } from './ShapePrimitive'
import { SHAPE_PRIMITIVE } from './misc/const'

export default class Rectangle implements ShapePrimitive {
  type: SHAPE_PRIMITIVE = SHAPE_PRIMITIVE.RECTANGLE
  size: Size
  leftTop: Point

  constructor(leftTop: Point, size: Size) {
    this.size = size
    this.leftTop = leftTop
  }

  getVertexes() {
    const { width, height } = this.size
    const [x, y] = this.leftTop
    const [rightTop, rightBottom, leftBottom] = [
      [x + width, y],
      [x + width, y + height],
      [x, y + height]
    ] as [number, number][]
    const vertex: Point[] = [
      this.leftTop,
      rightTop,
      leftBottom,
      leftBottom,
      rightTop,
      rightBottom
    ]
    return vertex
  }
}
