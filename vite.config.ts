import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import svgr from 'vite-plugin-svgr';
import imp from 'vite-plugin-imp';
import {visualizer} from 'rollup-plugin-visualizer';

export default defineConfig(({mode}) => {
  const isProduction = mode === 'production';
  const baseUrl = isProduction ? '/budgetapp/' : '/';

  return {
    plugins: [
      svgr({
        include: '**/*.svg',
        svgrOptions: {
          exportType: 'default',
        },
      }),
      react(),
      imp({
        libList: [
          {
            libName: 'antd',
            style: (name: string) => `antd/es/${name}/style`,
          },
        ],
      }),
      isProduction &&
        visualizer({
          open: false,
          gzipSize: true,
          brotliSize: true,
        }),
    ],
    base: baseUrl,
    define: {
      __APP_BASE_URL__: JSON.stringify(baseUrl),
    },
    server: {
      host: true,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        app: path.resolve(__dirname, './src/app'),
        entities: path.resolve(__dirname, './src/entities'),
        pages: path.resolve(__dirname, './src/pages'),
        shared: path.resolve(__dirname, './src/shared'),
        assets: path.resolve(__dirname, './src/assets'),
        styles: path.resolve(__dirname, './src/styles'),
        widgets: path.resolve(__dirname, './src/widgets'),
        features: path.resolve(__dirname, './src/features'),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          additionalData: `
            @use 'assets/variables/variables' as *;
            @use 'assets/styles/mixins' as *;
          `,
        },
      },
      modules: {
        generateScopedName: isProduction
          ? '[hash:base64:8]'
          : '[name]__[local]__[hash:base64:5]',
      },
    },
    build: {
      outDir: 'dist',
      sourcemap: false,
      minify: 'esbuild',
      chunkSizeWarningLimit: 1000,
      assetsDir: 'assets',
      cssCodeSplit: true,
    },
    optimizeDeps: {
      include: [
        'preact/compat',
        'preact/hooks',
        'preact',
        'preact-render-to-string',
        'mobx',
        'mobx-react-lite',
        'antd',
      ],
    },
  };
});
