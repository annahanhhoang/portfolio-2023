// vite.config.ts
import vue from "file:///Users/annavip/work/repo/portfolio-2023/.yarn/__virtual__/@vitejs-plugin-vue-virtual-fad8d9d877/0/cache/@vitejs-plugin-vue-npm-5.2.1-25d60c16d1-60edb926bf.zip/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vuetify, { transformAssetUrls } from "file:///Users/annavip/work/repo/portfolio-2023/.yarn/__virtual__/vite-plugin-vuetify-virtual-548b54c033/0/cache/vite-plugin-vuetify-npm-2.1.0-b6a10f878e-8dd7b007ea.zip/node_modules/vite-plugin-vuetify/dist/index.mjs";
import basicSsl from "vite-plugin-basic-ssl";
import { defineConfig, searchForWorkspaceRoot } from "file:///Users/annavip/work/repo/portfolio-2023/.yarn/__virtual__/vite-virtual-4b7b2557e3/0/cache/vite-npm-5.4.14-4903607bfe-ce382f4059.zip/node_modules/vite/dist/node/index.js";
import { fileURLToPath, URL } from "node:url";
var __vite_injected_original_import_meta_url = "file:///Users/annavip/work/repo/portfolio-2023/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true,
      styles: {
        configFile: "src/styles/settings.scss"
      }
    }),
    basicSsl()
  ],
  define: { "process.env": {} },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    },
    extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".vue"]
  },
  server: {
    port: 3e3,
    fs: {
      allow: [
        // search up for workspace root
        searchForWorkspaceRoot(process.cwd()),
        // your custom rules
        ".yarn/"
      ]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYW5uYXZpcC93b3JrL3JlcG8vcG9ydGZvbGlvLTIwMjNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9hbm5hdmlwL3dvcmsvcmVwby9wb3J0Zm9saW8tMjAyMy92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvYW5uYXZpcC93b3JrL3JlcG8vcG9ydGZvbGlvLTIwMjMvdml0ZS5jb25maWcudHNcIjsvLyBQbHVnaW5zXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSc7XG5pbXBvcnQgdnVldGlmeSwgeyB0cmFuc2Zvcm1Bc3NldFVybHMgfSBmcm9tICd2aXRlLXBsdWdpbi12dWV0aWZ5JztcbmltcG9ydCBiYXNpY1NzbCBmcm9tICd2aXRlLXBsdWdpbi1iYXNpYy1zc2wnO1xuLy8gVXRpbGl0aWVzXG5pbXBvcnQgeyBkZWZpbmVDb25maWcsIHNlYXJjaEZvcldvcmtzcGFjZVJvb3QgfSBmcm9tICd2aXRlJztcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGgsIFVSTCB9IGZyb20gJ25vZGU6dXJsJztcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoe1xuICAgICAgdGVtcGxhdGU6IHsgdHJhbnNmb3JtQXNzZXRVcmxzIH0sXG4gICAgfSksXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3Z1ZXRpZnlqcy92dWV0aWZ5LWxvYWRlci90cmVlL25leHQvcGFja2FnZXMvdml0ZS1wbHVnaW5cbiAgICB2dWV0aWZ5KHtcbiAgICAgIGF1dG9JbXBvcnQ6IHRydWUsXG4gICAgICBzdHlsZXM6IHtcbiAgICAgICAgY29uZmlnRmlsZTogJ3NyYy9zdHlsZXMvc2V0dGluZ3Muc2NzcycsXG4gICAgICB9LFxuICAgIH0pLFxuICAgIGJhc2ljU3NsKCksXG4gIF0sXG4gIGRlZmluZTogeyAncHJvY2Vzcy5lbnYnOiB7fSB9LFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgIH0sXG4gICAgZXh0ZW5zaW9uczogWycuanMnLCAnLmpzb24nLCAnLmpzeCcsICcubWpzJywgJy50cycsICcudHN4JywgJy52dWUnXSxcbiAgfSxcbiAgc2VydmVyOiB7XG4gICAgcG9ydDogMzAwMCxcbiAgICBmczoge1xuICAgICAgYWxsb3c6IFtcbiAgICAgICAgLy8gc2VhcmNoIHVwIGZvciB3b3Jrc3BhY2Ugcm9vdFxuICAgICAgICBzZWFyY2hGb3JXb3Jrc3BhY2VSb290KHByb2Nlc3MuY3dkKCkpLFxuICAgICAgICAvLyB5b3VyIGN1c3RvbSBydWxlc1xuICAgICAgICAnLnlhcm4vJyxcbiAgICAgIF0sXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLE9BQU8sU0FBUztBQUNoQixPQUFPLFdBQVcsMEJBQTBCO0FBQzVDLE9BQU8sY0FBYztBQUVyQixTQUFTLGNBQWMsOEJBQThCO0FBQ3JELFNBQVMsZUFBZSxXQUFXO0FBTm1KLElBQU0sMkNBQTJDO0FBU3ZPLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxNQUNGLFVBQVUsRUFBRSxtQkFBbUI7QUFBQSxJQUNqQyxDQUFDO0FBQUE7QUFBQSxJQUVELFFBQVE7QUFBQSxNQUNOLFlBQVk7QUFBQSxNQUNaLFFBQVE7QUFBQSxRQUNOLFlBQVk7QUFBQSxNQUNkO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFDRCxTQUFTO0FBQUEsRUFDWDtBQUFBLEVBQ0EsUUFBUSxFQUFFLGVBQWUsQ0FBQyxFQUFFO0FBQUEsRUFDNUIsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxJQUN0RDtBQUFBLElBQ0EsWUFBWSxDQUFDLE9BQU8sU0FBUyxRQUFRLFFBQVEsT0FBTyxRQUFRLE1BQU07QUFBQSxFQUNwRTtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sSUFBSTtBQUFBLE1BQ0YsT0FBTztBQUFBO0FBQUEsUUFFTCx1QkFBdUIsUUFBUSxJQUFJLENBQUM7QUFBQTtBQUFBLFFBRXBDO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
