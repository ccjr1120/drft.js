export default class WebGpuRenderer {
  context: GPUCanvasContext | null = null
  adapter: GPUAdapter | null = null
  device: GPUDevice | null = null
  format: GPUTextureFormat | null = null

  async setup(el: HTMLCanvasElement) {
    // 获取上下文
    this.context = el.getContext('webgpu')
    if (!this.context) throw new Error('canvas gpu context is undefined')
    // 获取适配器
    this.adapter = await navigator.gpu.requestAdapter()
    if (!this.adapter) throw new Error('not support WebGPU')
    // 获取GPU驱动
    this.device = await this.adapter.requestDevice()
    // 获取浏览器预设颜色格式
    this.format = navigator.gpu.getPreferredCanvasFormat()
    // 绑定视图
    this.context.configure({
      device: this.device,
      format: this.format
    })
  }
}
