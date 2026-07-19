import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  test: {
    // permite usar describe, it, expect sin importarlos en cada archivo
    globals: true,
    // simula el navegador para probar componentes React
    environment: 'jsdom',
    // ejecuta la configuración global antes de cada suite de pruebas
    setupFiles: ['./src/test/setup.ts'],
    // evita problemas al importar archivos CSS en componentes
    css: true,
    // genera reportes de cobertura en consola y HTML
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      reportsDirectory: './coverage',
    },
  },
})
