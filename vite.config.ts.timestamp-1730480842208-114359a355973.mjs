// vite.config.ts
import { defineConfig } from "file:///d:/Code/Online%20Projekte/raizuma.de/node_modules/vite/dist/node/index.js";
import { sveltekit } from "file:///d:/Code/Online%20Projekte/raizuma.de/node_modules/@sveltejs/kit/src/exports/vite/index.js";
import { enhancedImages } from "file:///d:/Code/Online%20Projekte/raizuma.de/node_modules/@sveltejs/enhanced-img/src/index.js";
import mkcert from "file:///d:/Code/Online%20Projekte/raizuma.de/node_modules/vite-plugin-mkcert/dist/mkcert.mjs";
var serverConfig = {
  // @ts-ignore
  https: true,
  host: "raizuma.local",
  port: 3e3,
  strictPort: true,
  proxy: {}
};
var vite_config_default = defineConfig({
  server: serverConfig,
  preview: serverConfig,
  plugins: [sveltekit(), enhancedImages(), mkcert()]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJkOlxcXFxDb2RlXFxcXE9ubGluZSBQcm9qZWt0ZVxcXFxyYWl6dW1hLmRlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJkOlxcXFxDb2RlXFxcXE9ubGluZSBQcm9qZWt0ZVxcXFxyYWl6dW1hLmRlXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9kOi9Db2RlL09ubGluZSUyMFByb2pla3RlL3JhaXp1bWEuZGUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiXHJcbmltcG9ydCB0eXBlIHsgQ29tbW9uU2VydmVyT3B0aW9ucyB9IGZyb20gXCJ2aXRlXCJcclxuaW1wb3J0IHsgc3ZlbHRla2l0IH0gZnJvbSBcIkBzdmVsdGVqcy9raXQvdml0ZVwiXHJcbmltcG9ydCB7IGVuaGFuY2VkSW1hZ2VzIH0gZnJvbSBcIkBzdmVsdGVqcy9lbmhhbmNlZC1pbWdcIlxyXG5pbXBvcnQgbWtjZXJ0IGZyb20gXCJ2aXRlLXBsdWdpbi1ta2NlcnRcIlxyXG5cclxuY29uc3Qgc2VydmVyQ29uZmlnOiBDb21tb25TZXJ2ZXJPcHRpb25zID0ge1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgaHR0cHM6IHRydWUsXHJcbiAgICBob3N0OiBcInJhaXp1bWEubG9jYWxcIixcclxuICAgIHBvcnQ6IDMwMDAsXHJcbiAgICBzdHJpY3RQb3J0OiB0cnVlLFxyXG4gICAgcHJveHk6IHt9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgICBzZXJ2ZXI6IHNlcnZlckNvbmZpZyxcclxuICAgIHByZXZpZXc6IHNlcnZlckNvbmZpZyxcclxuICAgIHBsdWdpbnM6IFtzdmVsdGVraXQoKSwgZW5oYW5jZWRJbWFnZXMoKSwgbWtjZXJ0KCldXHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBa1MsU0FBUyxvQkFBb0I7QUFFL1QsU0FBUyxpQkFBaUI7QUFDMUIsU0FBUyxzQkFBc0I7QUFDL0IsT0FBTyxZQUFZO0FBRW5CLElBQU0sZUFBb0M7QUFBQTtBQUFBLEVBRXRDLE9BQU87QUFBQSxFQUNQLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLFlBQVk7QUFBQSxFQUNaLE9BQU8sQ0FBQztBQUNaO0FBRUEsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDeEIsUUFBUTtBQUFBLEVBQ1IsU0FBUztBQUFBLEVBQ1QsU0FBUyxDQUFDLFVBQVUsR0FBRyxlQUFlLEdBQUcsT0FBTyxDQUFDO0FBQ3JELENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
