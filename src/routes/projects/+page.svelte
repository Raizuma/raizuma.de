<script lang="ts">
    import { goto } from "$app/navigation";
    import type { PageServerData } from "./$types";
    export let data: PageServerData;
    let projects = data.projectData;
</script>

<div class="mb-4 h-auto w-auto rounded-xl bg-slate-800/90 text-center text-2xl sm:mx-8 md:mx-16 lg:text-4xl">Projekte</div>
<div class="grid grid-cols-1 md:grid-cols-3 text-center content-center items-stretch justify-items-center p-4">
    {#if projects}
        {#each projects as project, index}
            <button on:click={() => goto("/projects/" + project.pname)} class="card card-hover block variant-ghost-surface md:mb-10" style="width: 250px;">
                <header class="card-header">
                    <enhanced:img src="data:image/png;base64,{project.pimg}" alt={project.palt} style="border-radius: 10%;" />
                    </header>
                    <section class=" p-4 font-bold break-all {project.ptitle.length > 9 ? 'text-4xl' : 'text-5xl'}">{project.ptitle}</section>
            </button>
        {/each}
    {:else}
        <p></p>
    {/if}
</div>


