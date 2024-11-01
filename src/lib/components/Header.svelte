<script lang="ts">
    import { page } from "$app/stores"
    import { goto } from "$app/navigation"
    import { darkmode } from "$stores/darkmode"
    import { theme, getAllThemes } from "$stores/theme"
    import { SlideToggle } from "@skeletonlabs/skeleton"

    function themeChangeEvent(event: any) {
        $theme = event.target.value
    }

    function getLinkClasses(path: string): string {
        return ($page.url.pathname === path) ? "active-link" : "inactive-link"
    }
</script>

<div class="w-full md:h-14 bg-surface-100-800-token px-4 flex flex-col md:flex-row md:place-content-around items-center">
    <button on:click={() => goto("/")}>
        <enhanced:img src="$images/raizuma-logo.png" alt="Raizuma Logo" class="w-40 h-12" />
    </button>
    <div class="text-xl flex-col flex py-2 space-y-2 md:flex-row md:py-0 md:space-y-0">
        {#key $page.url.pathname}
            <button on:click={() => goto("/")} class="{getLinkClasses("/")}">Home</button>
            <button on:click={() => goto("/projects")} class="{getLinkClasses("/projects")}">Projekte</button>
            <button on:click={() => goto("/contact")} class="{getLinkClasses("/contact")}">Kontakt</button>
            <button on:click={() => goto("/about")} class="{getLinkClasses("/about")}">Über uns</button>
        {/key}
    </div>
</div>

<!--
    <SlideToggle name="slide" bind:checked={$darkmode} />
    <select class="select" size="3" value="{$theme}" on:change={themeChangeEvent}>
        {#each getAllThemes() as element}
            <option value="{element.key}">{element.name}</option>
        {/each}
    </select>
-->

<style lang="postcss">
    button.active-link {
        @apply mx-4 cursor-default rounded-xl border px-4 bg-white/25;
    }

    button.inactive-link {
        @apply mx-4 cursor-pointer rounded-xl border px-4 bg-black/25 hover:bg-white/25;
    }
</style>
