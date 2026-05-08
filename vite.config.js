import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import reactSWC from '@vitejs/plugin-react-swc'

const isCloudflare = process.env.CF_PAGES === '1'

export default defineConfig({
  plugins: isCloudflare
    ? [reactSWC()] // Cloudflare-safe build
    : [
        react(), // your local setup
        babel({})
      ]
})
