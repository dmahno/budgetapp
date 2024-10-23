import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import babel from '@rollup/plugin-babel';

export default defineConfig(({mode}) => {
  const isProduction = mode === 'production';
  return {
    plugins: [
      react(),

      isProduction &&
        babel({
          plugins: [
            [
              'babel-plugin-styled-components',
              {displayName: false, pure: true, fileName: false},
            ],
          ],
          babelHelpers: 'bundled',
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          include: ['src/**/*'],
        }),
    ].filter(Boolean),

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
    build: {
      sourcemap: false,
      minify: false,
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
    },
    optimizeDeps: {
      cacheDir: 'node_modules/.vite_cache',
      include: [
        'react',
        'react-dom',
        'mobx',
        'mobx-react-lite',
        'styled-components',
        'antd',
      ],
    },
  };
});
