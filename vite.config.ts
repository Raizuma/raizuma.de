import { defineConfig, loadEnv } from "vite"
import type { CommonServerOptions } from "vite"
import { sveltekit } from "@sveltejs/kit/vite"
import { enhancedImages } from "@sveltejs/enhanced-img"
import mkcert from "vite-plugin-mkcert"

const currentMode = process.env.NODE_ENV || 'development'; 
const currentHost = (currentMode === "production") ? "0.0.0.0" : "127.0.0.1";

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd())

    const serverConfig: CommonServerOptions = {
        // @ts-ignore
        https: true,
        host: currentHost,
        port: 3000,
        strictPort: true,
        proxy: {}
    }

    return {
        server: serverConfig,
        preview: serverConfig,
        plugins: [sveltekit(), enhancedImages(), mkcert()]
    }
})