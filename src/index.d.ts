import { RenderMode } from './constant'
import DrftRenderer from './renderer/DrftRenderer'

export type Options = {
  el: string | HTMLCanvasElement
  renderer?: DrftRenderer
  renderMode?: RenderMode
}
