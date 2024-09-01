import { defineConfig } from "vite";

module.exports = {
  build: {
    outDir: './build',
    emptyOutDir: true, // also necessary
  }
}

export default defineConfig({
  base: ''
})