import { defineConfig } from 'vite'

export default defineConfig({
    test: {
        environment: 'jsdom',
        isolate: false,
        globals: true,
        setupFiles: './test/setupTests.js',
        // setupFiles: [
        //     './test/angular.js',
        //     './test/angular-mocks.js',
        // ]
    }
})