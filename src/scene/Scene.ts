import Renderer from '../renderer/Renderer'
import { Shape } from '../shapes/misc/const'

export default class Scene {
  renderer = new Renderer()

  add(shape: Shape) {
    this.renderer.draw(shape)
  }
}
