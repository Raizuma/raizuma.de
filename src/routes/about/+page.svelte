<script lang="ts">
    import { goto } from "$app/navigation";
    import type { PageServerData } from "./$types";
    export let data: PageServerData;
    const about = data.aboutData;
    const persons = data.aboutPerson;
</script>

<div class="mx-8 mb-4 flex h-auto w-auto items-center justify-center rounded-xl bg-slate-800/90 text-2xl md:mx-16 lg:text-4xl">Raizuma</div>
<div class="text-1 mx-8 md:mx-16 lg:text-2xl">
    {#if about.ptext}
        {#each about.ptext as text}
            {text}
            <br><br>
        {/each}
    {:else}
        <p></p>
    {/if}
</div>


<div class="mx-8 mb-4 flex h-auto w-auto items-center justify-center rounded-xl bg-slate-800/90 text-2xl md:mx-16 lg:text-4xl">Teammitglieder</div>
<div class="text-1 mx-8 md:mx-16 lg:text-2xl flex md:justify-between justify-center flex-wrap">
    {#if persons}
        {#each persons as person}
            <button on:click={() => goto("/about/" + person.pname)} class="card card-hover block variant-ghost-surface md:mb-10" style="width: 150px;">
                <header class="card-header">
                    <enhanced:img src={person.pimg || ""} alt={person.palt} style="border-radius: 10%;" />
                    </header>
                    <section class="font-bold break-all text-2xl mt-1">{person.ptitle}</section>
            </button>
        {/each}
    {:else}
        <p></p>
    {/if}
</div>