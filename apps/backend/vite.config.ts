import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
    plugins: [tsconfigPaths()],
    test: {
        globals: true,
        environmentMatchGlobs: [['src/tests/controllers/users/**', 'web']] // para qq teste nesse path use o ambiente prisma criado custom
    }
})