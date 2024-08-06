import { writable } from "svelte/store"
import type { Writable } from "svelte/store"

type Theme = "skeleton"
const theme: Writable<Theme> = writable<Theme>("skeleton")

function getAllThemes(): { name: string, key: string }[] {
    return [
        { name: "Skeleton", key: "skeleton" }
    ]
}

export { theme, getAllThemes }
export type { Theme }
