<script lang="ts">
    import type { PageServerData } from "./$types"
    export let data: PageServerData;
    const person = data.projectDataPerson;
</script>

<div class="flex justify-center">
    {#if person}
    <div class="card block variant-ghost-surface flex justify-center flex-col" style="width: 700px;">
        <header class="card-header">
           <img src="data:image/png;base64,{person.pimage}" alt={person.palt} style="border-radius: 10%;" />
        </header>
        <section class="text-5xl p-4 font-bold break-word">{person.ptitle}</section>
        <section class="p-4">{person.pdescription}</section>
    </div>
    {:else}
    <p></p>
    {/if}
</div>