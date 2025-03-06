
<script lang="ts">
    import { Avatar } from "@skeletonlabs/skeleton"
    import type { PageServerData } from "./$types"
    export let data: PageServerData;

    const newProjects = data.projectDataNewProjects;
    const newsFeed = data.projectDataNewsFeed;
    
</script>

<div>
    <div class="text-4xl text-center">Raizuma - So schnell wie der Blitz</div>
    <div class="text-xl text-center">Das Team der Ewigkeit und deutschen Übersetzungen</div>
</div>
<div>
    <div class="text-4xl text-center">Aktuelle Projekte</div>
    <!-- Letzte Projekte -->
    <div class="flex flex-col md:flex-row text-center content-center items-center justify-around p-4">
        {#if newProjects}
            {#each newProjects.slice(0,3) as project}
                <a href={project.plink} class="card card-hover block variant-ghost-surface" style="width: 250px;">
                    <header class="card-header">
                        <img src="data:image/png;base64,{project.pimg}" alt={project.palt} style="border-radius: 10%;" />
                    </header>
                    <section class="text-5xl p-4 font-bold break-word">{project.ptitle}</section>
                    <footer class="card-footer text-xs">Zuletzt aktualisiert: {project.ptimp}</footer>
                </a>
            {/each}
        {:else}
            <p></p>
        {/if}
    </div>	
</div>
<div>
    <div class="text-4xl text-center">News Feed</div>
    <!-- Social Media Feed -->
     <div class="flex flex-col gap-5 p-4">
        {#if newsFeed}
            {#each newsFeed as news}
                <div class="grid grid-cols-[auto_1fr] w-full gap-2">
                    <Avatar src="data:image/png;base64,{news.nimg}" width="w-12" />
                    <div class="card p-4 variant-soft rounded-rl space-y-2">
                        <header class="flex justify-between items-center">
                            <p class="font-bold">{news.ntitle}</p>
                            <small class="opacity-50">{news.ntimp}</small>
                        </header>
                        <p class="break-all">{news.ntext}</p>
                    </div>
                </div>
            {/each}
        {:else}
            <p></p>
        {/if}
     </div>
</div>
