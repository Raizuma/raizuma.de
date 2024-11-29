<script lang="ts">
    import { Avatar } from "@skeletonlabs/skeleton"
    import type { PageServerData } from "./$types"
    export let data: PageServerData;
    const datas = data.projectData;
</script>
<div>
    <div class="text-4xl text-center">Raizuma - So schnell wie der Blitz</div>
    <div class="text-xl text-center">Das Team der Ewigkeit und deutschen Übersetzungen</div>
</div>
<div>
    <div class="text-4xl text-center">Aktuelle Projekte</div>
    <!-- Letzte Projekte -->
    <div class="flex flex-col md:flex-row text-center content-center items-center justify-around p-4">
        {#if datas}
            {#each datas.slice(0,3) as news}
                <a href={news.plink} class="card card-hover block variant-ghost-surface">
                    <header class="card-header">
                        <enhanced:img src={news.pimg || 'default-image.jpg'} alt={news.palt} style="width: 210px; border-radius: 10%;" />
                    </header>
                    <section class="text-5xl p-4 font-bold">{news.ptitle}</section>
                    <footer class="card-footer text-xs">Zuletzt aktualisiert: {news.ptimp}</footer>
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
        <div class="grid grid-cols-[auto_1fr] gap-2">
            <Avatar src="https://sm.ign.com/t/ign_fr/cover/d/deltarune/deltarune_waw8.1200.jpg" width="w-12" />
            <div class="card p-4 variant-soft rounded-rl space-y-2">
                <header class="flex justify-between items-center">
                    <p class="font-bold">YouTube</p>
                    <small class="opacity-50">22.11.2024 15:12 Uhr</small>
                </header>
                <p>TEXT TEXT TEXT</p>
            </div>
        </div>
        <div class="grid grid-cols-[auto_1fr] gap-2">
            <Avatar src="https://sm.ign.com/t/ign_fr/cover/d/deltarune/deltarune_waw8.1200.jpg" width="w-12" />
            <div class="card p-4 variant-soft rounded-rl-none space-y-2">
                <header class="flex justify-between items-center">
                    <p class="font-bold">YouTube</p>
                    <small class="opacity-50">20.11.2024 15:12 Uhr</small>
                </header>
                <p>TEXT TEXT TEXT</p>
            </div>
        </div>		
     </div>
</div>