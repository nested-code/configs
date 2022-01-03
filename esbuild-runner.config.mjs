export default {
  type: 'bundle',
  esbuild: {
    format: 'esm',
    platform: 'node',
    target: 'esnext'
  }
}
