<script lang="ts">
    import { darkmode } from "$stores/darkmode"
    import { theme, getAllThemes } from "$stores/theme"
    import { SlideToggle } from "@skeletonlabs/skeleton"

    function themeChangeEvent(event: any) {
        $theme = event.target.value
    }
</script>

<div class="text-4xl text-center">Raizuma - So schnell wie der Blitz</div>
<div class="text-xl text-center">Das Team der Ewigkeit und deutschen Übersetzungen</div>
<SlideToggle name="slide" bind:checked={$darkmode} />
<select class="select" size="4" value="{$theme}" on:change={themeChangeEvent}>
    {#each getAllThemes() as element}
        <option value="{element.key}">{element.name}</option>
    {/each}
</select>
