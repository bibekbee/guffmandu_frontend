import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@Components': path.resolve(__dirname, './src/components'),
      '@Icons': path.resolve(__dirname, './src/components/Icons'),
      '@Fetchers':path.resolve(__dirname, './src/fetchers'),
      '@ReduxStore':path.resolve(__dirname, './src/reduxStore/features'),
      '@Utilities':path.resolve(__dirname, './src/utilities'),
      '@CustomHooks':path.resolve(__dirname, './src/customHooks'),
      '@Sounds':path.resolve(__dirname, './src/sounds'),
    },
  },
});
