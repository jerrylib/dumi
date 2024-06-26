import { defineConfig } from 'dumi';

const path = process.env.NODE_ENV === 'production' ? '/dumi/' : '/'

export default defineConfig({
  base: path,
  publicPath: path,
  outputPath: 'docs-dist',
  themeConfig: {
    name: '托斯嘎',
    logo: 'https://natata-api.vercel.app/logo.png'
  },
  favicons: ['https://natata-api.vercel.app/favicon.ico']
});
