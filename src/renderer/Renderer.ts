import Rectangle from '../shapes/Rectangle'
import { SHAPE_PRIMITIVE, Shape } from '../shapes/misc/const'
import CoordinateSystem from './CoordinateSystem'
import WebGpuRenderer from './gpu/WebGPURenderer'

export default class Renderer {
  private gpuRenderer = new WebGpuRenderer()
  private coordinateSystem = new CoordinateSystem()

  private FUNC_MAP = {
    [SHAPE_PRIMITIVE.RECTANGLE]: this.drawRectangle.bind(this)
  }

  async setup(el: HTMLCanvasElement) {
    await this.gpuRenderer.setup(el)
    this.coordinateSystem.setup(el)
  }

  draw(shape: Shape) {
    const func = this.FUNC_MAP[shape.type]
    if (!func) throw new Error(`renderer not support ${shape.type}`)
    func(shape)
  }

  drawRectangle(rectangle: Rectangle) {
    const originalVertexes = rectangle.getVertexes()
    const transVertexes = this.coordinateSystem.trans(originalVertexes)
    this.gpuRenderer.render(transVertexes)
  }
}
