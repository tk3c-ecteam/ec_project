import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { resolve } from 'node:path'
import autoprefixer from 'autoprefixer'
import { createHtmlPlugin } from 'vite-plugin-html'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      script: {
        defineModel: true
      }
    }),
    createHtmlPlugin({
      minify: true,
      entry: 'src/main.js'
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        //加入 scss 共用
        @import "@/assets/sass/module/base";
        `
      }
    },
    modules: {
      localsConvention: 'camelCase'
    },
    postcss: {
      plugins: [
        autoprefixer({
          //自動加入css -webkit
          overrideBrowserslist: ['last 2 version', '> 1%']
        })
      ]
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    //不壓縮js
    minify: 'esbuild',
    //不壓縮css
    cssMinify: false,
    // 小於4k轉換成base64
    assetsInlineLimit: 4096,
    rollupOptions: {
      input: {
        double12: resolve(__dirname, './index.html')
      },
      output: {
        /* manualChunks(id) {
           //將資料夾是 node_modules 拆分出來
           if (id.includes('node_modules')) {
             return 'vendor'
           }
         },*/
        entryFileNames: 'js/[name].js',
        chunkFileNames: 'js/[name].js',
        assetFileNames: 'css/[name].[ext]'
      }
    }
  }
})
