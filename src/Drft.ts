import RendererManage from './renderer/RendererManage'
import Scene from './scene/Scene'
import ShapeMap from './shapes/ShapeMap'
export default class Drft {
  static Shape = ShapeMap

  scene = new Scene()

  async setup(canvasEl: HTMLCanvasElement) {
    const { clientWidth: width, clientHeight: height } = canvasEl.parentElement!
    canvasEl.width = width
    canvasEl.height = height
    await RendererManage.getRenderer().setup(canvasEl)
  }
}
