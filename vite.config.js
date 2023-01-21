import { defineConfig, splitVendorChunkPlugin } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), splitVendorChunkPlugin()],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.js'),
      name: 'Bundle',
      // the proper extensions will be added
      fileName: 'bundle',
    },
    rollupOptions: {
      
    },
    watch: {
      // https://rollupjs.org/guide/en/#watch-options
    },
  }
})
