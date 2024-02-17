// 顶点着色器代码
const vertexShader = /* wgsl */ `
@vertex
fn main(@location(0) pos: vec3<f32>) -> @builtin(position) vec4<f32> {
    return vec4<f32>(pos,1.0);
}
`

// 片元着色器代码
const fragmentShader = /* wgsl */ `
@fragment
fn main() -> @location(0) vec4<f32> {
    return vec4<f32>(1.0, 0.0, 0.0, 1.0);
}
`

export { vertexShader, fragmentShader }
