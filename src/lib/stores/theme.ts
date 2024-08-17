import { browser } from "$app/environment"
import { writable } from "svelte/store"
import type { Writable } from "svelte/store"

function loadFromLocalStorage(): Theme {
    const defaultValue: Theme = "skeleton"

    if (!browser) return defaultValue

    const value: string | null = localStorage.getItem("theme")
    if (value === null) return defaultValue

    if (value === "skeleton" || value === "modern" || value === "gold-nouveau") return value as Theme
    return defaultValue
}

function saveToLocalStorage(value: Theme): void {
    if (!browser) return
    localStorage.setItem("theme", value)
}

type Theme = "skeleton" | "modern" | "gold-nouveau"
const theme: Writable<Theme> = writable<Theme>(loadFromLocalStorage())
theme.subscribe(saveToLocalStorage)

function getAllThemes(): { name: string, key: string }[] {
    return [
        { name: "Skeleton", key: "skeleton" },
        { name: "Modern", key: "modern" },
        { name: "Gold Nouveau", key: "gold-nouveau" }
    ]
}

export { theme, getAllThemes }
export type { Theme }
