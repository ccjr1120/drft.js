import * as draw from './draw/index'
const Drft = () => {
  const setup = async (canvasEl: HTMLCanvasElement) => {
    const { clientWidth: width, clientHeight: height } = canvasEl.parentElement!
    canvasEl.width = width
    canvasEl.height = height
    const adapter = await navigator.gpu.requestAdapter()
    if (!adapter) throw new Error('not support webgpu')
    const device = await adapter.requestDevice()
    const ctx = canvasEl.getContext('webgpu')
    if (!ctx) throw new Error('canvas gpu context is undefined')
    const canvasFormat = navigator.gpu.getPreferredCanvasFormat()
    ctx.configure({ device, format: canvasFormat })
    const encoder = device.createCommandEncoder()
    const pass = encoder.beginRenderPass({
      colorAttachments: [
        {
          view: ctx.getCurrentTexture().createView(),
          loadOp: 'clear',
          clearValue: { r: 0.6, g: 0.8, b: 0.9, a: 1 },
          storeOp: 'store'
        }
      ]
    })
    const vertices = new Float32Array([-0.5, -0.5, 0.5, -0.5, 0.5, 0.5])
    const vertexBuffer = device.createBuffer({
      label: 'Triangle Vertices',
      size: vertices.byteLength,
      usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
    })
    device.queue.writeBuffer(vertexBuffer, /* bufferOffset */ 0, vertices)
    const vertexBufferLayout: GPUVertexBufferLayout = {
      arrayStride: 2 * 4,
      attributes: [
        {
          format: 'float32x2',
          offset: 0,
          shaderLocation: 0
        }
      ]
    }
    const vertexShaderModule = device.createShaderModule({
      label: 'Vertex Shader',
      code: `
        @vertex
        fn vertexMain(@location(0) pos: vec2f) -> @builtin(position) vec4f {
          return vec4f(pos, 0, 1);
        }

        @fragment
        fn fragmentMain() -> @location(0) vec4f {
          return vec4f(1, 0, 0, 1);
        }
      `
    })
    const pipeline = device.createRenderPipeline({
      label: 'pipeline',
      layout: 'auto',
      vertex: {
        module: vertexShaderModule, // 着色器模块,
        entryPoint: 'vertexMain', // 入口函数为 vertexMain
        buffers: [vertexBufferLayout] // 读取缓冲区的方式
      },
      fragment: {
        module: vertexShaderModule,
        entryPoint: 'fragmentMain',
        targets: [
          {
            format: canvasFormat // 输出到 canvas 画布上
          }
        ]
      }
    })
    pass.setPipeline(pipeline)
    pass.setVertexBuffer(0, vertexBuffer)
    pass.draw(vertices.length / 2)
    pass.end() // 完成指令队列的记录
    const commandBuffer = encoder.finish() // 结束编码
    device.queue.submit([commandBuffer]) // 提交给 GPU 命令队列
  }

  return { setup, draw }
}

export default Drft
