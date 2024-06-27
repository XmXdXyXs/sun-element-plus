import path from 'path'
import { fileURLToPath } from 'url'
import { defineConfig, build } from 'vite'
import vue from '@vitejs/plugin-vue'
import fsExtra from 'fs-extra'
import fs from 'fs'
import { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
// 打包文件夹入口
const entryDir = path.resolve(__dirname, '../packages')
// 出口文件
const outDir = path.resolve(__dirname, '../lib')

// vite基础配置
// configFile 在 Vite 的配置文件 vite.config.js 中，configFile 是一个用于指定自定义 Vite 配置文件路径的选项。通常情况下，Vite 默认会在项目根目录下寻找 vite.config.js 文件，但如果你需要将配置文件放在其他位置或使用不同的配置文件名，可以使用 configFile 选项来指定其路径。
// publicDir 在 Vite 的配置文件 vite.config.js 中，publicDir 选项用于指定静态资源目录。这个目录中的所有文件会在构建时被直接拷贝到输出目录（通常是 dist 目录）中，不会经过任何处理或变动。该选项的默认值是 public，表示默认情况下会使用项目根目录下的 public 文件夹作为静态资源目录。
const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  plugins: [vue()]
})

// rollup配置
const rollupOptions = {
  external: ['vue', 'vue-router'], // 这两个不打包
  output: {
    // umd 暴露出的全局实例名字
    globals: {
      vue: 'Vue'
    }
  }
}

// 全量打包方法
const buildAll = async () => {
  await build({
    ...baseConfig,
    build: {
      rollupOptions,
      lib: {
        entry: path.resolve(entryDir, 'index.ts'),
        name: 'index',
        fileName: 'index',
        formats: ['es', 'umd']
      },
      outDir
    }
  })
}
// 单组件打包构建
// name: 组件名称
const buildSingle = async name => {
  await build({
    ...baseConfig,
    build: {
      rollupOptions,
      lib: {
        entry: path.resolve(entryDir, name),
        name: 'index',
        fileName: 'index',
        formats: ['es', 'umd']
      },
      outDir: path.resolve(outDir, name)
    }
  })
}

// 每个组件单独生成package.json
const createPackageJson = name => {
  const fileStr = `{
    "name":"${name}",
    "main": "index.umd.cjs",
    "module": "index.js",
    "style": "style.css"
  }`
  // 输出
  fsExtra.outputFile(path.resolve(outDir, `${name}/package.json`), fileStr, 'utf-8')
}

// 打包成库
const buildLib = async () => {
  await buildAll()
  // 获取组件名称的数组
  const components = fs.readdirSync(entryDir).filter(name => {
    const componentDir = path.resolve(entryDir, name)
    const isDir = fs.statSync(componentDir).isDirectory()
    return name !== 'utils' && isDir && fs.readdirSync(componentDir).includes('index.ts')
  })

  // 循环构建
  for (const name of components) {
    await buildSingle(name)
    createPackageJson(name)
  }
}

buildLib()
