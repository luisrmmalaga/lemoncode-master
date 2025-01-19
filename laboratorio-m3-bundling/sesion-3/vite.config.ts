import typescript from '@rollup/plugin-typescript';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';

export default defineConfig({
    plugins: [
        checker({typescript: true}), react()
    ],
    build: {
        sourcemap: true,
        rollupOptions: {
            plugins: [typescript()]
        },
        modulePreload: {
            polyfill: false
        }
    }
});