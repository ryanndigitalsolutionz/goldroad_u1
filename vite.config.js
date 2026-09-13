import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tanstackRouter } from '@tanstack/router-plugin/vite'

export default defineConfig({
  plugins: [
    tanstackRouter({
      target: 'react',
      routesDirectory: './gold/routes',
      generatedRouteTree: './gold/routeTree.gen.js',
      disableTypes: true,
      autoCodeSplitting: true,
    }),
    react(),
    
  ],
})
