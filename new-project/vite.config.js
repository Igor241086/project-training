import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  const isDevelopment = mode === 'development';
  const enableSourceMap = isDevelopment && process.env.VITE_ENABLE_SOURCEMAP_IN_DEV === 'true';
   
  const port = env.VITE_APP_PORT || 3000

  return {
    plugins: [react({ include: /\.(mdx|js|jsx|ts|tsx)$/ })],
    server: {
      port
    },
    css: {
      devSourcemap: enableSourceMap,
    },
    build: {
      sourcemap: isDevelopment ? enableSourceMap : false,
    },
    esbuild: {
      sourcemap: enableSourceMap,
      loader: 'jsx',
      include: /src\/.*\.jsx?$/,
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '@hooks': resolve(__dirname, 'src/hooks'),
        '@components': resolve(__dirname, 'src/components'),
        '@ui': resolve(__dirname, 'src/components/UI'),
        '@assets': resolve(__dirname, 'src/assets'),
        '@context': resolve(__dirname, 'src/context'),
        '@pages': resolve(__dirname, 'src/pages'),
      },
    },
  };
});
