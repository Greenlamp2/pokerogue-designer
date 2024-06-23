import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tsconfigPaths from "vite-tsconfig-paths";
import dependencyTsconfig from 'pokerogue/tsconfig.json' assert { type: 'json' };

const alias = Object.entries(dependencyTsconfig.compilerOptions.paths).reduce((acc, [key, value]) => {
  acc[key.replace('/*', '')] = path.resolve(__dirname, 'node_modules/pokerogue/', value[0].replace('/*', ''));
  return acc;
}, {});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      ...alias,
    }
  }
});
