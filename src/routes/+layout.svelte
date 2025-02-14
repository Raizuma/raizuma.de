<script lang="ts">
    import "../app.css"
    import "@fontsource/nunito"
    import Header from "$components/Header.svelte"
    import PageTransition from "$components/PageTransition.svelte"
    import { darkmode } from "$stores/darkmode"
    import { theme } from "$stores/theme"
    import { goto } from "$app/navigation";
</script>

<custom-theming-element data-theme="{$theme}" class="{$darkmode ? 'dark' : 'light'}">
    <div class="top-0 left-0 w-screen h-screen text-surface-900-50-token bg-surface-50-900-token overflow-x-hidden absolute">
        <Header />
        <PageTransition>
            <div class="w-full h-auto p-4">
                <div class="mx-auto w-full max-w-screen-lg">
                    <div class="bg-surface-100-800-token rounded-xl p-4">
                        <slot />
                    </div>
                    <div class="mt-3 w-full h-auto flex justify-end items-center">
                        <div>
                            &copy; 2024 von Raizuma. Alle Rechte vorberhalten.
                                <br>
                            <button class="ml-1 rounded-xl border px-4 hover:bg-black/25" on:click={() => goto("/legal")}>Rechtliche Inhalte</button>
                        </div>
                    </div>
                </div>
            </div>
        </PageTransition>
    </div>
</custom-theming-element>
