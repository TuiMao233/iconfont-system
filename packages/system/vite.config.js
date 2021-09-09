import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import WindiCSS from 'vite-plugin-windicss'
import ViteComponents, { NaiveUiResolver } from 'vite-plugin-components'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    WindiCSS(),
    ViteComponents({
      dirs: ['src/components'],
      extensions: ['vue'],
      deep: true,
      customComponentResolvers: [NaiveUiResolver()]
    })
  ],
  build: {
    outDir: './dist/public'
  }
})
