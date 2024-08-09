<script>
    function clapaccord(elementid) {
        const nav = document.getElementById(elementid)
        if (nav?.classList.contains('hidden')) {
            nav?.classList.remove('hidden')
        } else {
            nav?.classList.add('hidden')
        }
    }
</script>

<div class="h-auto w-auto text-left md:mx-16">
    <!--Head-->
    <div class="flex h-auto w-auto items-start justify-center">
        <div class="flex items-center justify-center text-center text-2xl leading-[64px] md:h-64 md:w-1/2 md:text-6xl">Yokai Watch 4++ (Switch)</div>
        <div class="flex w-1/2 items-center justify-center md:h-64">
            <enhanced:img src="$images/yokai-watch-4-icon.png" alt="Yokai-Watch-4" style="width: 200px; border-radius: 10%;" />
        </div>
    </div>
    <!--Beschreibung-->
    <div class="text-1xl mx-8 py-3 md:mx-16 lg:text-2xl">
        <div class="flex w-max items-start justify-center rounded-xl bg-slate-800/75 py-3">
            <a class="text-1xl mx-8 hover:text-sky-400/75 md:mx-16 lg:text-2xl" href="https://gbatemp.net/threads/yo-kai-watch-4-plusplus-deutsch-patch.626418/">Download</a>
        </div>
        Entwickler: Level-5<br />
        Publisher: Level-5<br /><br />

        Veröffentlicht: 20 Juni 2019 (Switch)<br />
        Originalsprache: Japanisch<br />
        Altersfreigabe: USK 6<br /><br />

        In Yo-kai Watch 4++ kannst du die neuste Geschichte von Nathan, Jibanyan, Whisper und co erleben. Triff allseits beliebte und bekannte Charaktere im neuen Gewand und lerne gleichzeitig auch neue Charaktere durch drei verschiedene Zeitlinien.
        Diesmal kannst du eine Geschichte erlben, die sowohl in Vergangenheit, Gegenwart und Zukunft spielt und dort dich mit neuen Yo-kai anfreunden. Erlebe ein völlig neues aktives Echtzeitkampfsystem, in dem du sowohl die Yo-kai, als auch Menschen
        selbst frei steuern kannst. Raizuma arbeitet noch aktiv daran, eine gute inoffizielle deutsche Version des Spiels zu ermöglichen! Viel Spaß damit und seid auf weiteren Updates gespannt!
    </div>
    <!--Patchnote
    <div class="mx-auto my-2 h-auto w-4/5 rounded-2xl border border-neutral-300"></div>
    <div class="text-1xl mx-8 rounded-xl bg-slate-800/25 py-3 text-center md:mx-16 lg:text-2xl">
        <button on:click={() => clapaccord('Patch-0.3')} class="hover:text-sky-400/75">Patchnotes Ver. 0.3</button>
        <div id="Patch-0.3" class="">
            <div class="mx-auto my-2 h-auto w-4/5 rounded-2xl border border-neutral-300"></div>
            <ul class="">
                <li>Das Spiel-Icon, Name Version und Author wurden geändert. Einfach in das Switch Menü, wo man das Spiel normal startet.</li>
                <li>Namen werden absofort zusammen geschrieben.</li>
            </ul>
        </div>
    </div>
    Patchnote
    <div class="mx-auto my-2 h-auto w-4/5 rounded-2xl border border-transparent"></div>
    <div class="text-1xl mx-8 rounded-xl bg-slate-800/25 py-3 text-center md:mx-16 lg:text-2xl">
        <button on:click={() => clapaccord('Patch-0.2-Hot')} class="hover:text-sky-400/75">Patchnotes Ver. 0.2 Hotfix</button>
        <div id="Patch-0.2-Hot" class="hidden">
            <div class="mx-auto my-2 h-auto w-4/5 rounded-2xl border border-neutral-300"></div>
            <ul class="">
                <li>Hilfetexte wurden übersetzt.</li>
                <li>Es wurde die Quest "Ein neugeborenes Fahrrad" übersetzt.</li>
                <li>Es wurden Menüs übersetzt.</li>
                <li>Es wurden einige System-Texte korrigiert.</li>
                <li>Es wurden ein paar Texte aus der Story geändert.</li>
                <li>Die Spieldauer wurde übersetzt.</li>
                <li>Kampftexte wurden übersetzt.</li>
                <li>Charaktertexte wurden übersetzt.</li>
            </ul>
        </div>
    </div>
    Patchnote
    <div class="mx-auto my-2 h-auto w-4/5 rounded-2xl border border-transparent"></div>
    <div class="text-1xl mx-8 rounded-xl bg-slate-800/25 py-3 text-center md:mx-16 lg:text-2xl">
        <button on:click={() => clapaccord('Patch-0.1-Hot')} class="hover:text-sky-400/75">Patchnotes Ver. 0.1 Hotfix</button>
        <div id="Patch-0.1-Hot" class="hidden">
            <div class="mx-auto my-2 h-auto w-4/5 rounded-2xl border border-neutral-300"></div>
            <ul class="">
                <li>Es wurden einige Charakter-Namen korrigiert.</li>
                <li>Es wurden einige System-Texte korrigiert.</li>
                <li>Es wurden ein paar Texte aus der Story geändert.</li>
            </ul>
        </div>
    </div>
    Patchnote
    <div class="mx-auto my-2 h-auto w-4/5 rounded-2xl border border-transparent"></div>
    <div class="text-1xl mx-8 rounded-xl bg-slate-800/25 py-3 text-center md:mx-16 lg:text-2xl">
        <button on:click={() => clapaccord('Patch-0.0.1-Hot')} class="hover:text-sky-400/75">Patchnotes Ver. 0.0.1 Hotfix</button>
        <div id="Patch-0.0.1-Hot" class="hidden">
            <div class="mx-auto my-2 h-auto w-4/5 rounded-2xl border border-neutral-300"></div>
            <ul class="">
                <li>Es wurden einige Textgrößen angepasst.</li>
                <li>Es wurden einige Item-Namen hinzugefügt.</li>
                <li>Es wurden die Kampftexte geändert.</li>
                <li>Es wurden ein paar Texte aus der Story geändert.</li>
            </ul>
        </div>
    </div> -->
</div>
