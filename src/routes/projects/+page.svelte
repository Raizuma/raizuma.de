<script lang="ts">
    import { page } from "$app/stores"
    import { goto } from "$app/navigation"

    function getLinkClasses(path: string): string {
        return ($page.url.pathname === path) ? "active-link" : "inactive-link"
    }
</script>

<div class="mb-4 h-auto w-auto rounded-xl bg-slate-800/90 text-center text-2xl sm:mx-8 md:mx-16 lg:text-4xl">Projekte</div>
<div class="text-center">
    <button on:click={() => goto("/projects/yokai_watch_1_switch")}>
        <enhanced:img src="$images/yokai-watch-1-icon.png" alt="Yokai-Watch-1" style="width: 300px; border-radius: 10%;"/>
    </button>
    <button on:click={() => goto("/projects/yokai_watch_4")}>
        <enhanced:img src="$images/yokai-watch-4-icon.png" alt="Yokai-Watch-2" style="width: 300px; border-radius: 10%;"/>
    </button>
    <button on:click={() => goto("/projects/deltarune")}>
        <enhanced:img src="$images/deltarune.png" alt="Deltarune" style="width: 300px; border-radius: 10%;"/>
    </button>
</div>
