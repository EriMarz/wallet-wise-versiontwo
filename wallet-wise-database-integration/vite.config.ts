/// <reference types="vitest/config" /> 
// for Vitest type definitions

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    globals: true, // lets us use test functions like describe, it, expect without importing them
    environment: 'jsdom'
    // setupFiles: './src/tests/setupTests.ts',
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
