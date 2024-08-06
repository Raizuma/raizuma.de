<script lang="ts">
    import { page } from "$app/stores"
    import { goto } from "$app/navigation"

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
                <button on:click={() => goto("/test")} class="{getLinkClasses("/test")}">Test</button>
                <button on:click={() => goto("/yw4")} class="{getLinkClasses("/test")}">YW4</button>
            {/key}
        </div>
    </div>
</div>

<style>
    button.active-link {
        @apply mx-4 underline cursor-default;
    }

    button.inactive-link {
        @apply mx-4 cursor-pointer;
    }
</style>
