/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    setupFiles: ['tests/setupTests.ts'],
    environment: 'jsdom',
    coverage: {
      reporter: ['html'],
    },
    ...(process.env.CI && {
      minThreads: 4,
      maxThreads: 4,
    }),
  },
})
