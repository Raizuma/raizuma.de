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

<div class="w-full h-14 bg-surface-100-800-token px-4">
    <div class="mx-auto w-full max-w-screen-lg h-full flex justify-between items-center">
        <button on:click={() => goto("/")}>
            <enhanced:img src="$images/raizuma-logo.png" alt="Raizuma Logo" class="w-40 h-12" />
        </button>
        <div class="text-xl">
            {#key $page.url.pathname}
                <button on:click={() => goto("/")} class="{getLinkClasses("/")}">Home</button>
                <button on:click={() => goto("/projects")} class="{getLinkClasses("/projects")}">Projekte</button>
                <button on:click={() => goto("/contact")} class="{getLinkClasses("/contact")}">Kontakt</button>
                <button on:click={() => goto("/about")} class="{getLinkClasses("/about")}">Über uns</button>
            {/key}
        </div>
        <!--
            <SlideToggle name="slide" bind:checked={$darkmode} />
            <select class="select" size="3" value="{$theme}" on:change={themeChangeEvent}>
                {#each getAllThemes() as element}
                    <option value="{element.key}">{element.name}</option>
                {/each}
            </select>
            -->
    </div>
</div>

<style lang="postcss">
    button.active-link {
        @apply mx-4 underline cursor-default;
    }

    button.inactive-link {
        @apply mx-4 cursor-pointer;
    }
</style>
