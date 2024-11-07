<script lang="ts">
    import { page } from "$app/stores"
    import { goto } from "$app/navigation"
    import { darkmode } from "$stores/darkmode"
    import { theme, getAllThemes } from "$stores/theme"
    import { SlideToggle } from "@skeletonlabs/skeleton"
    import Icon from 'svelte-awesome/components/Icon.svelte'
    import arrowDown from "svelte-awesome/icons/arrowDown";
    import arrowUp from "svelte-awesome/icons/arrowUp";

    function themeChangeEvent(event: any) {
        $theme = event.target.value
    }

    let buttonCollapsIconData = arrowUp;
    let navigationVisibility: HTMLDivElement;
    let themeVisibility: HTMLDivElement;

    function collapsNav(event: any){
        if(buttonCollapsIconData === arrowDown){
            buttonCollapsIconData = arrowUp;
            navigationVisibility.style.display = "";
            themeVisibility.style.display = "";
        }
        else{
            buttonCollapsIconData = arrowDown;
            navigationVisibility.style.display = "none";
            themeVisibility.style.display = "none";
        }
    }

    function getLinkClasses(path: string): string {
        return ($page.url.pathname === path) ? "active-link" : "inactive-link"
    }
</script>

<div class="w-ful md:h-14 bg-surface-100-800-token px-4 flex flex-col md:flex-row md:place-content-around items-center">
    <button on:click={() => goto("/")}>
        <enhanced:img src="$images/raizuma-logo.png" alt="Raizuma Logo" class="w-40 h-12" />
    </button>
    <div bind:this={themeVisibility} class="text-xl flex-col space-y-3 py-3 flex md:flex-row md:py-0 md:space-y-0">
        {#key $page.url.pathname}
            <button on:click={() => goto("/")} class="{getLinkClasses("/")}">Home</button>
            <button on:click={() => goto("/projects")} class="{getLinkClasses("/projects")}">Projekte</button>
            <button on:click={() => goto("/contact")} class="{getLinkClasses("/contact")}">Kontakt</button>
            <button on:click={() => goto("/about")} class="{getLinkClasses("/about")}">Über uns</button>
        {/key}
    </div>
    <div bind:this={navigationVisibility} class="flex row items-center py-3 space-x-4">
        <select class="select" value="{$theme}" on:change={themeChangeEvent}>
            {#each getAllThemes() as element}
                <option value="{element.key}">{element.name}</option>
            {/each}
        </select>
        <SlideToggle name="slide" bind:checked={$darkmode} />
    </div>
    <button type="button" class="btn variant-filled-surface bg-black/25 md:hidden" on:click={collapsNav}>
        <Icon class="" data={buttonCollapsIconData} />
    </button>
</div>

<style lang="postcss">
    button.active-link {
        @apply mx-4 cursor-default rounded-xl border px-4 variant-filled-surface;
    }

    button.inactive-link {
        @apply mx-4 cursor-pointer rounded-xl border px-4 variant-ghost-surface hover:variant-filled-surface;
    }
</style>
