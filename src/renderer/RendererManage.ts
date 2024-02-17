import Renderer from './Renderer'

export default class RendererManage {
  private static _renderer: Renderer | null = null
  public static getRenderer() {
    if (this._renderer) return this._renderer
    this._renderer = new Renderer()
    return this._renderer
  }

  public static async loadRenderer(canvasEl: HTMLCanvasElement) {
    if (!this._renderer) this._renderer = new Renderer()
    await this._renderer.setup(canvasEl)
  }
}
