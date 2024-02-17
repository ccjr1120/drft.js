import { fragmentShader, vertexShader } from './shader'
import { isNotNull } from '../../utils/shard'

export default class WebGpuRenderer {
  context: GPUCanvasContext | null = null
  adapter: GPUAdapter | null = null
  device: GPUDevice | null = null
  format: GPUTextureFormat | null = null

  private getRendererParams() {
    if (!isNotNull(this.context, this.adapter, this.device, this.format)) {
      throw new Error('The internal variable of the renderer is null')
    }
    return {
      context: this.context!,
      adapter: this.adapter!,
      device: this.device!,
      format: this.format!
    }
  }

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

  render(vertexes: number[]) {
    const { device, context, format } = this.getRendererParams()
    const vertexArray = new Float32Array(vertexes)
    const vertexBuffer = device.createBuffer({
      size: vertexArray.byteLength,
      usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST // 用途
    })
    device.queue.writeBuffer(vertexBuffer, 0, vertexArray)
    const pipeline = device.createRenderPipeline({
      layout: 'auto',
      vertex: {
        buffers: [
          {
            arrayStride: 3 * 4,
            attributes: [{ shaderLocation: 0, format: 'float32x3', offset: 0 }]
          }
        ],
        module: device.createShaderModule({ code: vertexShader }),
        entryPoint: 'main'
      },
      primitive: {
        topology: 'triangle-list'
      },
      fragment: {
        module: device.createShaderModule({ code: fragmentShader }),
        entryPoint: 'main',
        targets: [
          {
            format
          }
        ]
      }
    })
    const commandEncoder = device.createCommandEncoder()
    const renderPass = commandEncoder.beginRenderPass({
      // 配置颜色缓冲区
      colorAttachments: [
        {
          view: context.getCurrentTexture().createView(),
          storeOp: 'store',
          loadOp: 'clear',
          clearValue: { r: 0, g: 0.5, b: 0.5, a: 1.0 }
        }
      ]
    })
    renderPass.setPipeline(pipeline)
    renderPass.setVertexBuffer(0, vertexBuffer)
    renderPass.draw(vertexes.length / 3)
    renderPass.end()
    const commandBuffer = commandEncoder.finish()
    device.queue.submit([commandBuffer])
  }
}
