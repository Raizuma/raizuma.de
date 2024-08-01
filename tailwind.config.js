import { skeleton } from "@skeletonlabs/tw-plugin"
import { join as joinPath } from "node:path"

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
        "./src/app.html",
        "./src/routes/**/*.svelte",
        "./src/lib/components/**/*.svelte",
        joinPath(
            require.resolve("@skeletonlabs/skeleton"),
            "../**/*.{html,js,ts,svelte}"
        )
    ],
    theme: {
        extend: {}
    },
    plugins: [
        skeleton({
            themes: {
                preset: ["skeleton"]
            }
        })
    ]
}
