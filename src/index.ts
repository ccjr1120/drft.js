import Scene from '@/scene/Scene'
import Element from '@/element/Element'

export default class Drft {
  renderView: HTMLCanvasElement
  scene = new Scene()
  element = new Element()
  constructor(options: { renderView: HTMLCanvasElement }) {
    this.renderView = options.renderView
  }
}
