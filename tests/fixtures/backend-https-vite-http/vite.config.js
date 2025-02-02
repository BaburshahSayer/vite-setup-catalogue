import { defineConfig } from 'vite'
import dns from 'dns'

dns.setDefaultResultOrder('verbatim')

export default defineConfig({
  server: {
    port: 7001,
    strictPort: true,
    hmr: {
      protocol: 'ws'
    },
    // for consistency
    watch: {
      usePolling: true,
      interval: 100
    }
  }
})
