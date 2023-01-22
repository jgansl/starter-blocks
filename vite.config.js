import { defineConfig, splitVendorChunkPlugin } from 'vite'
import { resolve } from 'path';
import { svelte } from '@sveltejs/vite-plugin-svelte'
//@see https://github.com/Applelo/vite-plugin-browser-sync
import VitePluginBrowserSync from 'vite-plugin-browser-sync'
// import alias from '@rollup/plugin-alias'

// https://vitejs.dev/config/
/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [
    //@see https://github.com/sveltejs/vite-plugin-svelte/blob/main/docs/config.md
    svelte({
      emitCss: false
    }),
    // splitVendorChunkPlugin(),
    VitePluginBrowserSync({
      //@see https://browsersync.io/docs/options
      bs: {
        files: [
          '**/*.php',
          'build/*/*.css',
          'build/*/*.js',
          '!node_modules',
          '!.git',
        ],
        ghostMode: false,
        host: 'localhost',
        // https: {
        // 	key: process.env.HTTPS_KEY ? process.env.HTTPS_KEY :    `${homeDir}/.theme/localhost.key`,
        // 	cert: process.env.HTTPS_CERT ? process.env.HTTPS_CERT : `${homeDir}/.theme/localhost.crt`,
        // },
        logLevel: 'silent',
        notify: false,
        open: "local",
        port: 3000,
        proxy: `http://starter.local`,
        ui: {
          port: 8080
        },
        watch: true
      }
    })
  ],
  build: {
    //     // assetsDir: '',
    //     // cssCodeSplit: false,
    //     // commonjsOptions: {},
    lib: {
      // entry: 'src/index.js',
      entry: resolve(__dirname, 'src/index.js'),
      formats: ['iife'],
      name: 'MyLib',
      fileName: (format) => `my-lib.${format}.js`
      // fileName: 'my-lib'
    },
    //     // minify: "terser",
        outDir: "build",
    rollupOptions: {
      //       external: ['svelte'],
      //       // input: 'src/index.js',
      //       // // output: {
      //       // //   manualChunks: undefined,
      //       // // },
      output: {
        sourcemap: true,
        format: 'iife',
        name: 'app',
        // file: 'build/js/bundle.js',
        //         globals: {
        //           svelte: 'Svelte',
        //           // lozad: 'lozad'
        //         },
        //       },
        //     // sourcemap: true,
        //     // terserOptions: {},
        //     // watch: {
        //     //   // https://rollupjs.org/guide/en/#watch-options
      },
    }
  },
  // resolve: {
  //   alias: {
  //     "@": resolve(projectRootDir, "src"),
  //   },
  // },
})
