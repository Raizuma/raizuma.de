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
        <div class="flex items-center justify-center text-center text-2xl leading-[64px] md:h-64 md:w-1/2 md:text-6xl">Yokai Watch 1 (Switch)</div>
        <div class="flex w-1/2 items-center justify-center md:h-64">
            <enhanced:img src="$images/yokai-watch-1-icon.png" alt="Yokai-Watch-1" style="width: 200px; border-radius: 10%;" />
        </div>
    </div>
    <!--Beschreibung-->
    <div class="text-1xl mx-8 md:mx-16 lg:text-2xl">
        <div class="flex w-max items-start justify-center rounded-xl bg-slate-800/75 py-3">
            <a class="text-1xl mx-8 hover:text-sky-400/75 md:mx-16 lg:text-2xl" href="https://gbatemp.net/threads/wip-yo-kai-watch-1-deutsch-version.619087/">Download</a>
        </div>
        Entwickler: Level-5<br />
        Publisher: Level-5 und Nintendo<br /><br />

        Veröffentlicht: 10 Oktober 2019 (Switch)<br />
        Originalsprache: Japanisch<br />
        Altersfreigabe: USK 6<br /><br />

        In diesem Rollenspiel aus dem Hause Level-5, erlebst du die Geschichte von Nathan Adams, oder Katie Forester durch deren Reise durch die Welt der Yo-kai. Auf dieser Reise wirst du verschiedene neue Freunde finden, die nicht alle menschlich zu sein
        scheinen. Freunde dich mit so vielen Yo-kai wie möglich an, kämpfe mit ihnen gegen andere Yo-kai und löse das Geheimnis der Yo-kai World. Erlebe mit der inoffiziellen deutschen Übersetzung von Raizuma das Remake des klassichen 3DS von Yo-kai Watch
        1 noch einmal neu kennen!
    </div>
</div>

<!--Patchnote
<div class="mx-auto my-2 h-auto w-4/5 rounded-2xl border border-neutral-300"></div>
<div class="text-1xl mx-8 rounded-xl bg-slate-800/25 py-3 text-center md:mx-16 lg:text-2xl">
    <button on:click={() => clapaccord('Patch-1.1.1')} class="hover:text-sky-400/75">Patchnotes Ver. 1.1.1</button>
    <div id="Patch-1.1.1" class="">
        <div class="mx-auto my-2 h-auto w-4/5 rounded-2xl border border-neutral-300"></div>
        <ul class="">
            <li>Das Spiel-Icon, Name Version und Author wurden geändert. Einfach in das Switch Menü, wo man das Spiel normal startet.</li>
        </ul>
        <div class="text-[7px] lg:text-sm">WARNUNG: Wer keine Cheats, in der neuen Version, haben will MUSS den Cheats Ordner löschen, oder man fügt unter Atmosphere/config/ die "system_settings.ini" Datei hinzu.</div>
    </div>
</div>

Patchnote
<div class="mx-auto my-2 h-auto w-4/5 rounded-2xl border border-transparent"></div>
<div class="text-1xl mx-8 rounded-xl bg-slate-800/25 py-3 text-center md:mx-16 lg:text-2xl">
    <button on:click={() => clapaccord('Patch-1.1.0')} class="hover:text-sky-400/75">Patchnotes Ver. 1.1.0</button>
    <div id="Patch-1.1.0" class="hidden">
        <div class="mx-auto my-2 h-auto w-4/5 rounded-2xl border border-neutral-300"></div>
        <ul class="">
            <li>Alle Hilfe Bilder wurden hinzugefügt.</li>
            <li>Einige fehlende Sounddateien wurden ergänzt.</li>
            <li>Grafiken und Texte wurden korrigiert.</li>
        </ul>
        <div class="text-[7px] lg:text-sm">WARNUNG: Wer keine Cheats, in der neuen Version, haben will MUSS den Cheats Ordner löschen, oder man fügt unter Atmosphere/config/ die "system_settings.ini" Datei hinzu.</div>
    </div>
</div>

Patchnote
<div class="mx-auto my-2 h-auto w-4/5 rounded-2xl border border-transparent"></div>
<div class="text-1xl mx-8 rounded-xl bg-slate-800/25 py-3 text-center md:mx-16 lg:text-2xl">
    <button on:click={() => clapaccord('Patch-1.0.2')} class="hover:text-sky-400/75">Patchnotes Ver. 1.0.2</button>
    <div id="Patch-1.0.2" class="hidden">
        <div class="mx-auto my-2 h-auto w-4/5 rounded-2xl border border-neutral-300"></div>
        <ul class="">
            <li>Es wurde die aktuelle Patch-Version beim Start Menü hinzugefügt.</li>
            <li>Das Yo-kai Watch 1 Logo wurde überarbeitet.</li>
            <li>Es wurde ein Problem behoben, welches dazu führt, dass Zufällige Spitznamen nicht richtig übernommen wurden.</li>
            <li>Es wurde ein Problem behoben, welches dazu führt, dass die Spitznamen, bei der Bestätigung, nicht richtig angezeigt wurden.</li>
            <li>Es wurde ein Problem, im Posen-Shop, behoben.</li>
            <li>Es wurden einige Quest-Texte überarbeitet.</li>
            <li>Es wurde der Internet Download auf Emulatoren entfernt.</li>
            <li>Es wurde das NFC Scan Menü überarbeitet (führt auf dem Emulator weiterhin zu abstürzen, da er kein NFC-Lesegerät besitzt)</li>
        </ul>
        <div class="text-[7px] lg:text-sm">WARNUNG: Wer keine Cheats, in der neuen Version, haben will MUSS den Cheats Ordner löschen, oder man fügt unter Atmosphere/config/ die "system_settings.ini" Datei hinzu.</div>
    </div>
</div>

Patchnote
<div class="mx-auto my-2 h-auto w-4/5 rounded-2xl border border-transparent"></div>
<div class="text-1xl mx-8 rounded-xl bg-slate-800/25 py-3 text-center md:mx-16 lg:text-2xl">
    <button on:click={() => clapaccord('Patch-1.0.1')} class="hover:text-sky-400/75">Patchnotes Ver. 1.0.1</button>
    <div id="Patch-1.0.1" class="hidden">
        <div class="mx-auto my-2 h-auto w-4/5 rounded-2xl border border-neutral-300"></div>
        <ul class="">
            <li>Es wurde ein Problem behoben, welches dazu führte, dass wenn man den Yo-kaimat benutzen will, das Spiel abstürzt.</li>
            <li>Es wurden fehlende Zielangaben im Kapitel „Lebt wohl, Yo-kai“ hinzugefügt.</li>
            <li>Es wurde ein Problem mit der Zwischensequenz nach dem Kampf mit McKraken behoben.</li>
            <li>Es wurden Cheats hinzugefügt, welche man aktivieren und deaktivieren kann.</li>
            <li>Es wurde ein neues Teamcover hinzugefügt.</li>
        </ul>
    </div>
</div>
-->