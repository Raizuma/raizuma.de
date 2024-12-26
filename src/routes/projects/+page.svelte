<script lang="ts">
    import { goto } from "$app/navigation";
    import type { PageServerData } from "./$types";
    export let data: PageServerData;
    let projects = data.projectData;
</script>

<div class="mb-4 h-auto w-auto rounded-xl bg-slate-800/90 text-center text-2xl sm:mx-8 md:mx-16 lg:text-4xl">Projekte</div>
<div class="flex flex-col md:flex-row text-center content-center items-center justify-around p-4">
    {#if projects}
        {#each projects as project}
            <button on:click={() => goto("/projects/" + project.pname)} class="card card-hover block variant-ghost-surface">
                <header class="card-header">
                    <enhanced:img src={project.pimg || ""} alt={project.palt} style="width: 300px; border-radius: 10%;" />
                    </header>
                    <section class="text-5xl p-4 font-bold break-word">{project.ptitle}</section>
            </button>
        {/each}
    {:else}
        <p></p>
    {/if}
</div>


