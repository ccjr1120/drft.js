import Rectangle from '../shapes/Rectangle'
import { SHAPE_PRIMITIVE, Shape } from '../shapes/misc/const'
import WebGpuRenderer from './gpu/WebGPURenderer'

export default class Renderer {
  private gpuRenderer = new WebGpuRenderer()
  private FUNC_MAP = {
    [SHAPE_PRIMITIVE.RECTANGLE]: this.drawRectangle
  }

  draw(shape: Shape) {
    const func = this.FUNC_MAP[shape.type]
    if (!func) throw new Error(`renderer not support ${shape.type}`)
    func(shape)
  }

  drawRectangle(rectangle: Rectangle) {
    console.log(rectangle)
  }

  setup = this.gpuRenderer.setup
}
