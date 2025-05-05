import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { resolve } from 'node:path'
import autoprefixer from 'autoprefixer'
import { createHtmlPlugin } from 'vite-plugin-html'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  define: {
    global: 'window',
    'process.env': {}
  },
  plugins: [
    vue({
      script: {
        defineModel: true
      }
    }),
    //自動加入 .js .vue檔名
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      //自動引入import(不需要再加入import { ref } from 'vue')
      imports: [
        'vue',
        'vue-router'
      ]
    }),
    Components({
      //要引入的component路徑(不需再加入import xxx from '@/src/views/layout ...')
      dirs: [
        'src/components',
        'src/views/floor',
        'src/views/layout',
        'src/views/view'
      ],
      extensions: ['vue'],
      deep: true,//搜尋子目錄
      dts: 'src/components.d.ts'
    }),
    createHtmlPlugin({
      minify: false,
      entry: './src/main.js',
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
          overrideBrowserslist: ['last 2 version', '> 1%'],
          grid: true
        })
      ]
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@page': path.resolve(__dirname, './page')
    }
  },
  build: {
    //壓縮js
    minify: 'esbuild',
    //不壓縮css
    cssMinify: false,
    // 小於4k轉換成base64
    assetsInlineLimit: 4096,
    //每次執行清空 dist資料夾
    emptyOutDir: true,
    rollupOptions: {
      input: {
        coffee_vue: resolve(__dirname, './index.html')
      },
      output: {
        //拆分node套件命名為vendor.js
        //有同一頁面的vendor大小、內容不同需將檔名區分(如:vendor2504等)
        manualChunks(id) {
          if (id.includes('node_modules')) return 'vendor';
        },
        entryFileNames: 'js/[name].js',
        chunkFileNames: 'js/[name].js',
        assetFileNames: 'css/[name][extname]'
      }
    }
  }
})
