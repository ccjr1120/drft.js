import { ShapePrimitive } from './ShapePrimitive'
import { POINT, SHAPE_PRIMITIVE, SIZE } from './misc/const'

export default class Rectangle implements ShapePrimitive {
  type: SHAPE_PRIMITIVE = SHAPE_PRIMITIVE.RECTANGLE
  size: SIZE
  center: POINT

  constructor(size: SIZE, center: POINT) {
    this.size = size
    this.center = center
  }
}
