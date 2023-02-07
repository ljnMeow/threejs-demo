/*
 * @Author: 林进南 linjinnan1998@sina.com
 * @Date: 2023-02-06 09:33:44
 * @LastEditors: 林进南 linjinnan1998@sina.com
 * @LastEditTime: 2023-02-07 10:16:07
 * @FilePath: \threejs-demo\vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './'
})
