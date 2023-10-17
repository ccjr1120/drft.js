/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import CanvasKitInit from 'canvaskit-wasm/bin/canvaskit.js'
// @ts-ignore
import CanvasKitWasm from 'canvaskit-wasm/bin/canvaskit.wasm?url'
// @ts-ignore
import DrftRenderer from '../DrftRenderer'
import {
  CanvasKit,
  Surface,
} from '../../../node_modules/canvaskit-wasm/types/index'
import { RenderSetupOptions } from '../index.d'

class CanvasKitRenderer extends DrftRenderer {
  renderDom: HTMLCanvasElement
  CanvasKit: CanvasKit
  surface: Surface

  async setup(options: RenderSetupOptions) {
    this.renderDom = options.renderDom
    this.CanvasKit = await CanvasKitInit({
      locateFile: () => CanvasKitWasm,
    })
    this.surface = this.CanvasKit.MakeWebGLCanvasSurface(this.renderDom)
    this.example()
  }

  example(): () => void {
    const paint = new this.CanvasKit.Paint()
    paint.setColor(this.CanvasKit.Color4f(0.9, 0, 0, 1.0))
    paint.setStyle(this.CanvasKit.PaintStyle.Stroke)
    paint.setAntiAlias(true)
    const rr = this.CanvasKit.RRectXY(
      this.CanvasKit.LTRBRect(10, 60, 210, 260),
      25,
      15,
    )
    function draw(canvas) {
      // canvas.clear(this.CanvasKit.WHITE)
      canvas.drawRRect(rr, paint)
    }
    this.surface.drawOnce(draw)
    return undefined
  }
}

export default CanvasKitRenderer
