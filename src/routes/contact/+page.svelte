<script lang="ts">
    import type { PageServerData } from "./$types";
    export let data: PageServerData;
    const contacts = data;
</script>

<div class="mx-8 mb-4 h-auto w-auto rounded-xl bg-slate-800/90 text-center text-2xl md:mx-16 lg:text-4xl">Kontakt</div>
<div class="mx-auto h-auto w-fit text-left">
    {#if contacts}
        {#each contacts as contact}
            <div class="pt-2 text-center text-2xl underline">{contact.ptitle}</div>
            <div class="mx-auto h-auto w-fit">
                <div class="my-2">{contact.psubtitle}<a href={contact.plink} target="_blank" rel="noopener noreferrer" class="ml-1 rounded-xl border px-4 hover:bg-black/25">{contact.ptext}</a></div>
            </div>
        {/each}
    {:else}
        <p></p>
    {/if}
    <!--
    <div class="text-center text-2xl underline">Raizuma</div>
    <div class="mx-auto h-auto w-fit">
        <div class="my-2">YouTube: <a href="https://www.youtube.com/@Raizuma" target="_blank" rel="noopener noreferrer" class="ml-1 rounded-xl border px-4 hover:bg-black/25">Öffnen</a></div>
    </div>
    <div class="pt-2 text-center text-2xl underline">Yokai Watch Deutschland</div>
    <div class="mx-auto h-auto w-fit">
        <div class="my-2">YouTube: <a href="https://www.youtube.com/@YokaiWatchDeutschland" target="_blank" rel="noopener noreferrer" class="ml-1 rounded-xl border px-4 hover:bg-black/25">Öffnen</a></div>
        <div class="my-2">Discord: <a href="https://discord.com/invite/D8QcHPbjES" target="_blank" rel="noopener noreferrer" class="ml-1 rounded-xl border px-4 hover:bg-black/25">Tritt bei</a></div>
        <div class="my-2">Twitter: <a href="https://twitter.com/YokaiWatch_DE_" target="_blank" rel="noopener noreferrer" class="ml-1 rounded-xl border px-4 hover:bg-black/25">Öffnen</a></div>
        <div class="my-2">Bluesky: <a href="https://bsky.app/profile/yokaiwatchgermany.bsky.social" target="_blank" rel="noopener noreferrer" class="ml-1 rounded-xl border px-4 hover:bg-black/25">Öffnen</a></div>
    </div>
    <div class="pt-2 text-center text-2xl underline">Deltarune Deutschland</div>
    <div class="mx-auto h-auto w-fit">
        <div class="my-2">YouTube: <a href="https://www.youtube.com/channel/UCs5x1raxLiXGdePZ2jWIsQg" target="_blank" rel="noopener noreferrer" class="ml-1 rounded-xl border px-4 hover:bg-black/25">Öffnen</a></div>
        <div class="my-2">Discord: <a href="https://discord.com/invite/D8QcHPbjES" target="_blank" rel="noopener noreferrer" class="ml-1 rounded-xl border px-4 hover:bg-black/25">Tritt bei</a></div>
        <div class="my-2">Twitter: <a href="https://twitter.com/Deltarune_DE" target="_blank" rel="noopener noreferrer" class="ml-1 rounded-xl border px-4 hover:bg-black/25">Öffnen</a></div>
    </div>
    -->
</div>
