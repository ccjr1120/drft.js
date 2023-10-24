import { defineConfig } from 'vite'

export default defineConfig(() => {
  return {
    server: {
      port: 7373,
      open: true,
    },
  }
})
