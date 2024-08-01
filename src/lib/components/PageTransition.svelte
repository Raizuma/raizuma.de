<script lang="ts">
    import { page } from "$app/stores"
    import { fly } from "svelte/transition"

    const duration: number = 400 // ms
    const delay: number = 400 // ms
    const x: number = -75 // px
    const y: number = 0 // px
</script>

{#key $page.url}
    <div
        in:fly={{ x: x, y: y, duration: duration, delay: delay }}
        out:fly={{ x: x, y: y, duration: duration }}
    >
        <slot />
    </div>
{/key}
