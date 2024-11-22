<script>

    import { Avatar } from "@skeletonlabs/skeleton";

</script>
<div>
    <div class="text-4xl text-center">Raizuma - So schnell wie der Blitz</div>
    <div class="text-xl text-center">Das Team der Ewigkeit und deutschen Übersetzungen</div>
</div>
<div>
    <div class="text-4xl text-center">Aktuelle Projekte</div>
    <!-- Letzte Projekte -->
    <div class="flex flex-col md:flex-row text-center content-center items-center justify-around p-4">
        <a href="/contact" class="card card-hover block variant-ghost-surface">
            <header class="card-header">
                <enhanced:img src="$images/deltarune.png" alt="Deltarune" style="width: 210px; border-radius: 10%;" />
            </header>
            <section class="text-5xl p-4 font-bold">Deltarune</section>
            <footer class="card-footer text-xs">Zuletzt aktualisiert: 15.11.2024</footer>
        </a>
        <a href="/contact" class="card card-hover block variant-ghost-surface">
            <header class="card-header">
                <enhanced:img src="$images/deltarune.png" alt="Deltarune" style="width: 210px; border-radius: 10%;" />
            </header>
            <section class="text-5xl p-4 font-bold">Deltarune</section>
            <footer class="card-footer text-xs">Zuletzt aktualisiert: 15.11.2024</footer>
        </a>
        <a href="/contact" class="card card-hover block variant-ghost-surface">
            <header class="card-header">
                <enhanced:img src="$images/deltarune.png" alt="Deltarune" style="width: 210px; border-radius: 10%;" />
            </header>
            <section class="text-5xl p-4 font-bold">Deltarune</section>
            <footer class="card-footer text-xs">Zuletzt aktualisiert: 15.11.2024</footer>
        </a>
    </div>	
</div>
<div>
    <div class="text-4xl text-center">News Feed</div>
    <!-- Social Media Feed -->
     <div class="flex flex-col gap-5 p-4">
        <div class="grid grid-cols-[auto_1fr] gap-2">
            <Avatar src="$images/deltarune.png" width="w-12" />
            <div class="card p-4 variant-soft rounded-rl space-y-2">
                <header class="flex justify-between items-center">
                    <p class="font-bold">YouTube</p>
                    <small class="opacity-50">22.11.2024 15:12 Uhr</small>
                </header>
                <p>TEXT TEXT TEXT</p>
            </div>
        </div>
        <div class="grid grid-cols-[auto_1fr] gap-2">
            <Avatar src="$images/deltarune.png" width="w-12" />
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