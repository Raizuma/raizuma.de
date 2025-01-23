<script lang="ts">
    import { goto } from "$app/navigation";
    import type { PageServerData } from "./$types";
    export let data: PageServerData;
    const about = data.aboutData;
</script>

<div class="mx-8 mb-4 flex h-auto w-auto items-center justify-center rounded-xl bg-slate-800/90 text-2xl md:mx-16 lg:text-4xl">Über uns</div>
<div class="text-1 mx-8 md:mx-16 lg:text-2xl">
    <br />
    {about.ptext}
</div>
