import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import svgr from 'vite-plugin-svgr';

export default defineConfig(({mode}) => {
  const isProduction = mode === 'production';
  return {
    plugins: [
      svgr({
        include: '**/*.svg',
        svgrOptions: {
          exportType: 'default',
        },
      }),
      ,
      react(),
    ],

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
          additionalData: `@use 'assets/variables/variables' as *;`,
        },
      },
      modules: {
        generateScopedName: isProduction
          ? '[hash:base64:8]'
          : '[name]__[local]__[hash:base64:5]',
      },
    },

    build: {
      sourcemap: false,
      minify: true,
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('react') || id.includes('mobx')) {
                return 'react-vendor';
              }
              if (id.includes('antd') || id.includes('@ant-design')) {
                return 'ant-design-vendor';
              }
              return 'vendor';
            }
          },
        },
      },
      assetsDir: 'assets',
      cssCodeSplit: true,
    },

    optimizeDeps: {
      include: ['react', 'react-dom', 'mobx', 'mobx-react-lite', 'antd'],
    },
  };
});
