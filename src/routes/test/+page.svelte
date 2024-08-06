<script lang="ts">
    import { ProgressBar, ProgressRadial } from "@skeletonlabs/skeleton"
</script>

<div>Just a Test Page.</div>
<br />
<br />

<div class="text-lg font-bold">Yokai Watch 4++</div>
<ol>
    <li>Items (70%)</li>
    <li>Erfolge (20%)</li>
</ol>
<br />
<br />

<div class="w-8/12">
    <div class="ml-4 w-full h-auto flex justify-center items-center">
        <span class="mr-2">Items:</span>
        <ProgressBar min={0} max={100} value={70} />
    </div>
    <div class="ml-4 w-full h-auto flex justify-center items-center">
        <span class="mr-2">Erfolge:</span>
        <ProgressBar min={0} max={100} value={20} />
    </div>
</div>
<div class="w-80 flex justify-between items-center">
    <ProgressRadial value={70} stroke={100} meter="stroke-primary-500" track="stroke-primary-500/30" strokeLinecap="butt">Items</ProgressRadial>
    <ProgressRadial value={20} stroke={100} meter="stroke-secondary-500" track="stroke-secondary-500/30" strokeLinecap="butt">Erfolge</ProgressRadial>
</div>
