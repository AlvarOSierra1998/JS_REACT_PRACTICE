import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

//para iniciar otra vez el localhost ddebemos entrar en el proyecto con el comando "cd + nombre del proyecto" y luego ejecutar el run dev

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
