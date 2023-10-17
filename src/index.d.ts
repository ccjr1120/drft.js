import { RenderMode } from './constant'
import DrftRenderer from './renderer/DrftRenderer'

export type SetupOptions = {
  target: HTMLCanvasElement
  renderer?: DrftRenderer
  renderMode?: RenderMode
}
