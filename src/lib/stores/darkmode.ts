import { browser } from "$app/environment"
import { writable } from "svelte/store"
import type { Writable } from "svelte/store"

function loadFromLocalStorage(): boolean {
    const defaultValue: boolean = true

    if (!browser) return true

    const rawValue: string | null = localStorage.getItem("darkmode")
    
    if (rawValue === null) return defaultValue
    if (rawValue === "true" || rawValue === "false") return rawValue === "true"
    return defaultValue
}

function saveToLocalStorage(value: boolean): void {
    if (!browser) return
    localStorage.setItem("darkmode", value.toString())
}

const darkmode: Writable<boolean> = writable<boolean>(loadFromLocalStorage())
darkmode.subscribe(saveToLocalStorage)

export { darkmode }
