<script lang="ts">
    import "../app.css"
    import "@fontsource/nunito"
    import Header from "$components/Header.svelte"
    import PageTransition from "$components/PageTransition.svelte"
</script>

<custom-theming-element data-theme="skeleton" class="dark">
    <div class="top-0 left-0 w-screen h-screen text-surface-900-50-token bg-surface-50-900-token overflow-x-hidden overflow-y-scroll absolute">
        <Header />
        <PageTransition>
            <div class="w-full h-auto p-4">
                <div class="alert variant-filled-warning mx-auto mb-4 w-96">
                    <div class="alert-message w-full">
                        <div class="w-full text-xl font-bold text-center">Warning</div>
                        <div class="w-full text-center">This website is currently under construction.</div>
                    </div>
                </div>
                <div class="mx-auto w-full max-w-screen-lg bg-surface-100-800-token rounded-xl p-4">
                    <slot />
                </div>
                <div class="mt-3 w-full h-auto flex justify-end items-center">
                    <div>&copy; 2024 by Raizuma. All rights reserved.</div>
                </div>
            </div>
        </PageTransition>
    </div>
    <!--
    <slot />
    -->
</custom-theming-element>
