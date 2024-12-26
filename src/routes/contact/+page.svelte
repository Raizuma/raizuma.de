<script lang="ts">
    import type { PageServerData } from "./$types";
    export let data: PageServerData;
    const contacts = data.contactData;
</script>

<div class="mx-8 mb-4 h-auto w-auto rounded-xl bg-slate-800/90 text-center text-2xl md:mx-16 lg:text-4xl">Kontakt</div>
<div class="mx-auto h-auto w-fit text-left">
    {#if contacts}
        {#each contacts as contact}
            <div class="pt-2 text-center text-2xl underline">{contact.ptitle}</div>
            {#each contact.pbody as social}
                <div class="mx-auto h-auto w-fit">
                    <div class="my-2">{social.psubtitle}:<a href={social.plink} target="_blank" rel="noopener noreferrer" class="ml-1 rounded-xl border px-4 hover:bg-black/25">{social.ptext}</a></div>
                </div>
            {/each}
        {/each}
    {:else}
        <p></p>
    {/if}
</div>
