// Genera archivos HTML para cada archivo JSX en el directorio "dist"
// vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        colegio: path.resolve(__dirname, 'colegio/index.html'),
        comunicacion: path.resolve(__dirname, 'comunicacion/index.html'),
        comunidad: path.resolve(__dirname, 'comunidad/index.html'),
        deporte: path.resolve(__dirname, 'deporte/index.html'),
        hidroponia: path.resolve(__dirname, 'hidroponia/index.html'),
        isei: path.resolve(__dirname, 'isei/index.html'),
        mediacion: path.resolve(__dirname, 'mediacion/index.html'),
        noticia: path.resolve(__dirname, 'noticia/index.html'),
        sobrenosotros: path.resolve(__dirname, 'sobrenosotros/index.html')
      }
    },
  },
})
