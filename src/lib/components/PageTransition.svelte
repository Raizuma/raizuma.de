<script lang="ts">
    import { page } from "$app/stores"
    import { fade } from "svelte/transition"

    const duration: number = 250 // ms
    const delay: number = 250 // ms
</script>

{#key $page.url}
    <div
        in:fade={{duration: duration, delay: delay}}
        out:fade={{ duration: duration}}
    >
        <slot />
    </div>
{/key}
