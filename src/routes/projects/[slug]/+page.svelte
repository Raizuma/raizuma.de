<script lang="ts">
    import type { PageServerData } from "./$types"
    export let data: PageServerData
</script>

<div class="h-auto w-auto text-left md:mx-16">
    <!--Head-->
    <div class="flex h-auto w-auto items-start justify-center">
        <div class="flex items-center justify-center text-center text-2xl py-5 md:w-1/2 md:text-5xl">{data.projectData.title}</div>
    </div>
    <!--Beschreibung-->
    <div class="text-1xl mx-8 md:mx-16 lg:text-2xl">
        <div class="flex items-center justify-center text-center w-max items-start justify-center rounded-xl bg-slate-800/75 py-3">
            <a class="text-1xl mx-8 hover:text-sky-400/75 md:mx-16 lg:text-2xl" href={data.projectData.downloadlink}>Download</a>
        </div>
        <div> 
            <div class="flex h-auto w-auto items-start justify-center">
                <div>
                    Entwickler: {data.projectData.developer}<br />
                    Publisher:  {data.projectData.publisher}<br /><br />
            
                    Veröffentlicht:  {data.projectData.date}<br />
                    Originalsprache:  {data.projectData.orglanguage}<br />
                    Altersfreigabe:  {data.projectData.usk}<br /><br />
                </div>
                <div class="flex w-1/2 items-center justify-center md:h-63">
                    <img src={data.projectData.pimage} style="width: 200px; border-radius: 10%;" />
                </div>
            </div>
            <div>
                {data.projectData.description}
            </div>
        </div>
    </div>
</div>