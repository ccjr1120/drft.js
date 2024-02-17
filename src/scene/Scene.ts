import RendererManage from '../renderer/RendererManage'
import { Shape } from '../shapes/misc/const'

export default class Scene {
  renderer = RendererManage.getRenderer()

  add(shape: Shape) {
    this.renderer.draw(shape)
  }
}
