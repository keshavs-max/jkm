import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        products: resolve(__dirname, 'products.html'),
        'custom-solutions': resolve(__dirname, 'custom-solutions.html'),
        projects: resolve(__dirname, 'projects.html'),
        contact: resolve(__dirname, 'contact.html')
      }
    }
  }
})