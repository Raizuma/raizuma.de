<script lang="ts">
    import { goto } from "$app/navigation";
    import { TreeView, TreeViewItem } from "@skeletonlabs/skeleton";
</script>

<div class="md:py-3">
    <TreeView class="variant-ghost py-3 rounded-xl ">
        <TreeViewItem>
            <h1 class="h1">Impressum</h1>
            <svelte:fragment slot="children">
                <TreeViewItem class="pointer-events-none">
                    <h2 class="h2">Team</h2>
                    <br>
                    Raizuma

                    <br><br>
                    <h2 class="h2">Kontaktmöglichkeiten</h2>
                    <br>
                    <button class="ml-1 rounded-xl border px-4 pointer-events-auto" on:click={() => goto("contact")}>Hier klicken</button>

                    <br><br>
                    <h2 class="h2">Audiovisuelle Mediendienste</h2>
                    <br>
                    Sitzland: Deutschland.
                    <br>
                    Zuständige Regulierungs-, bzw. Aufsichtsbehörde: Landesanstalt für Medien NRW, https://www.medienanstalt-nrw.de/

                    <br><br>
                    <h2 class="h2">Social Media und andere Onlinepräsenzen</h2>
                    Dieses Impressum gilt auch für die folgenden Social-Media-Präsenzen und Onlineprofile:
                    <br>
                    <button class="ml-1 rounded-xl border px-4 pointer-events-auto" on:click={() => goto("contact")}>Hier klicken</button>

                    <br><br>
                    <a href="https://datenschutz-generator.de/">Erstellt mit kostenlosem Datenschutz-Generator.de von Dr. Thomas Schwenke</a>
                </TreeViewItem>
            </svelte:fragment>
        </TreeViewItem>
        <TreeViewItem>
            <h1 class="h1">Datenschutzerklärung</h1>
            <svelte:fragment slot="children">
                <TreeViewItem class="pointer-events-none">
                    Stand: 14. Februar 2025
                    <br><br>
                    <h1 class="h1">Inhaltsübersicht</h1>
                    <br>
                    Verantwortlicher<br>
                    Übersicht der Verarbeitungen<br>
                    Maßgebliche Rechtsgrundlagen<br>
                    Bereitstellung des Onlineangebots und Webhosting<br>
                    Präsenzen in sozialen Netzwerken (Social Media)<br>

                    <br><br>
                    <h1 class="h1">Verantwortliches Team</h1>
                    <br>
                    Raizuma

                    <br><br>
                    <h1 class="h1">Übersicht der Verarbeitungen</h1>
                    <br>
                    Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer Verarbeitung zusammen und verweist auf die betroffenen Personen.

                    <br><br>
                    <h2 class="h1">Arten der verarbeiteten Daten</h2>
                    <br>
                    Meta-, Kommunikations- und Verfahrensdaten.<br>
                    Protokolldaten.

                    <br><br>
                    <h2 class="h1">Kategorien betroffener Personen</h2>
                    <br>
                    Nutzer.

                    <br><br>
                    <h2 class="h1">Zwecke der Verarbeitung</h2>
                    <br>
                    Sicherheitsmaßnahmen.<br>
                    Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.<br>
                    Informationstechnische Infrastruktur.<br>

                    <br><br>
                    <h1 class="h1">Maßgebliche Rechtsgrundlagen</h1>
                    <br>
                    Maßgebliche Rechtsgrundlagen nach der DSGVO: Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der DSGVO, auf deren Basis wir personenbezogene Daten verarbeiten. Bitte nehmen Sie zur Kenntnis, dass neben den Regelungen der DSGVO nationale Datenschutzvorgaben in Ihrem bzw. unserem Wohn- oder Sitzland gelten können. Sollten ferner im Einzelfall speziellere Rechtsgrundlagen maßgeblich sein, teilen wir Ihnen diese in der Datenschutzerklärung mit.
                    <br><br>
                    <ul class="list-disc">
                       <li>
                            Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO) - die Verarbeitung ist zur Wahrung der berechtigten Interessen des Verantwortlichen oder eines Dritten notwendig, vorausgesetzt, dass die Interessen, Grundrechte und Grundfreiheiten der betroffenen Person, die den Schutz personenbezogener Daten verlangen, nicht überwiegen.
                       </li>
                    </ul>
                    <br><br>
                    Nationale Datenschutzregelungen in Deutschland: Zusätzlich zu den Datenschutzregelungen der DSGVO gelten nationale Regelungen zum Datenschutz in Deutschland. Hierzu gehört insbesondere das Gesetz zum Schutz vor Missbrauch personenbezogener Daten bei der Datenverarbeitung (Bundesdatenschutzgesetz – BDSG). Das BDSG enthält insbesondere Spezialregelungen zum Recht auf Auskunft, zum Recht auf Löschung, zum Widerspruchsrecht, zur Verarbeitung besonderer Kategorien personenbezogener Daten, zur Verarbeitung für andere Zwecke und zur Übermittlung sowie automatisierten Entscheidungsfindung im Einzelfall einschließlich Profiling. Ferner können Landesdatenschutzgesetze der einzelnen Bundesländer zur Anwendung gelangen.
                    <br><br>
                    Hinweis auf Geltung DSGVO und Schweizer DSG: Diese Datenschutzhinweise dienen sowohl der Informationserteilung nach dem Schweizer DSG als auch nach der Datenschutzgrundverordnung (DSGVO). Aus diesem Grund bitten wir Sie zu beachten, dass aufgrund der breiteren räumlichen Anwendung und Verständlichkeit die Begriffe der DSGVO verwendet werden. Insbesondere statt der im Schweizer DSG verwendeten Begriffe „Bearbeitung" von „Personendaten", "überwiegendes Interesse" und "besonders schützenswerte Personendaten" werden die in der DSGVO verwendeten Begriffe „Verarbeitung" von „personenbezogenen Daten" sowie "berechtigtes Interesse" und "besondere Kategorien von Daten" verwendet. Die gesetzliche Bedeutung der Begriffe wird jedoch im Rahmen der Geltung des Schweizer DSG weiterhin nach dem Schweizer DSG bestimmt.

                    <br><br>
                    <h1 class="h1">Bereitstellung des Onlineangebots und Webhosting</h1>
                    <br>
                    Wir verarbeiten die Daten der Nutzer, um ihnen unsere Online-Dienste zur Verfügung stellen zu können. Zu diesem Zweck verarbeiten wir die IP-Adresse des Nutzers, die notwendig ist, um die Inhalte und Funktionen unserer Online-Dienste an den Browser oder das Endgerät der Nutzer zu übermitteln.
                    <br> <br>
                    <ul class="list-disc">
                        <li>
                            Verarbeitete Datenarten: Nutzungsdaten (z. B. Seitenaufrufe und Verweildauer, Klickpfade, Nutzungsintensität und -frequenz, verwendete Gerätetypen und Betriebssysteme, Interaktionen mit Inhalten und Funktionen); Meta-, Kommunikations- und Verfahrensdaten (z. B. IP-Adressen, Zeitangaben, Identifikationsnummern, beteiligte Personen). Protokolldaten (z. B. Logfiles betreffend Logins oder den Abruf von Daten oder Zugriffszeiten.).
                        </li>
                        <li>
                            Betroffene Personen: Nutzer (z. B. Webseitenbesucher, Nutzer von Onlinediensten).
                        </li>
                        <li>
                            Zwecke der Verarbeitung: Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit; Informationstechnische Infrastruktur (Betrieb und Bereitstellung von Informationssystemen und technischen Geräten (Computer, Server etc.)). Sicherheitsmaßnahmen.
                        </li>
                        <li>
                            Aufbewahrung und Löschung: Löschung entsprechend Angaben im Abschnitt "Allgemeine Informationen zur Datenspeicherung und Löschung".
                        </li>
                        <li>
                            Rechtsgrundlagen: Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).
                        </li>
                    </ul>
                    <br> <br>
                    Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:
                    <br> <br>
                    <ul class="list-disc">
                        <li>
                            Erhebung von Zugriffsdaten und Logfiles: Der Zugriff auf unser Onlineangebot wird in Form von sogenannten "Server-Logfiles" protokolliert. Zu den Serverlogfiles können die Adresse und der Name der abgerufenen Webseiten und Dateien, Datum und Uhrzeit des Abrufs, übertragene Datenmengen, Meldung über erfolgreichen Abruf, Browsertyp nebst Version, das Betriebssystem des Nutzers, Referrer URL (die zuvor besuchte Seite) und im Regelfall IP-Adressen und der anfragende Provider gehören. Die Serverlogfiles können zum einen zu Sicherheitszwecken eingesetzt werden, z. B. um eine Überlastung der Server zu vermeiden (insbesondere im Fall von missbräuchlichen Angriffen, sogenannten DDoS-Attacken), und zum anderen, um die Auslastung der Server und ihre Stabilität sicherzustellen; Rechtsgrundlagen: Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO). Löschung von Daten: Logfile-Informationen werden für die Dauer von maximal 30 Tagen gespeichert und danach gelöscht oder anonymisiert. Daten, deren weitere Aufbewahrung zu Beweiszwecken erforderlich ist, sind bis zur endgültigen Klärung des jeweiligen Vorfalls von der Löschung ausgenommen.
                        </li>
                        <li>
                            STRATO: Leistungen auf dem Gebiet der Bereitstellung von informationstechnischer Infrastruktur und verbundenen Dienstleistungen (z. B. Speicherplatz und/oder Rechenkapazitäten); Dienstanbieter: STRATO AG, Pascalstraße 10,10587 Berlin, Deutschland; Rechtsgrundlagen: Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO); Website: https://www.strato.de; Datenschutzerklärung: https://www.strato.de/datenschutz/. Auftragsverarbeitungsvertrag: Wird vom Dienstanbieter bereitgestellt.
                        </li>
                        <li>
                            Cloudflare: Leistungen auf dem Gebiet der Bereitstellung von Netzwerksicherheits- und Leistungsdiensten (z. B. Content Delivery Network, DDoS-Schutz); Dienstanbieter: Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, USA; Rechtsgrundlagen: Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO); Website: https://www.cloudflare.com; Datenschutzerklärung: https://www.cloudflare.com/privacypolicy/. Auftragsverarbeitungsvertrag: Wird vom Dienstanbieter bereitgestellt.    
                        </li>
                    </ul>
                    
                    <br><br>
                    <h1 class="h1">Präsenzen in sozialen Netzwerken (Social Media)</h1>
                    <br>
                    Wir unterhalten Onlinepräsenzen innerhalb sozialer Netzwerke und verarbeiten in diesem Rahmen Nutzerdaten, um mit den dort aktiven Nutzern zu kommunizieren oder Informationen über uns anzubieten.
                    <br><br>
                    Wir weisen darauf hin, dass dabei Nutzerdaten außerhalb des Raumes der Europäischen Union verarbeitet werden können. Hierdurch können sich für die Nutzer Risiken ergeben, weil so zum Beispiel die Durchsetzung der Nutzerrechte erschwert werden könnte.
                    <br><br>
                    Ferner werden die Daten der Nutzer innerhalb sozialer Netzwerke im Regelfall für Marktforschungs- und Werbezwecke verarbeitet. So können beispielsweise anhand des Nutzungsverhaltens und sich daraus ergebender Interessen der Nutzer Nutzungsprofile erstellt werden. Letztere finden möglicherweise wiederum Verwendung, um etwa Werbeanzeigen innerhalb und außerhalb der Netzwerke zu schalten, die mutmaßlich den Interessen der Nutzer entsprechen. Daher werden im Regelfall Cookies auf den Rechnern der Nutzer gespeichert, in denen das Nutzungsverhalten und die Interessen der Nutzer gespeichert werden. Zudem können in den Nutzungsprofilen auch Daten unabhängig der von den Nutzern verwendeten Geräten gespeichert werden (insbesondere, wenn sie Mitglieder der jeweiligen Plattformen und dort eingeloggt sind).
                    <br><br>
                    Für eine detaillierte Darstellung der jeweiligen Verarbeitungsformen und der Widerspruchsmöglichkeiten (Opt-out) verweisen wir auf die Datenschutzerklärungen und Angaben der Betreiber der jeweiligen Netzwerke.
                    <br><br>
                    Auch im Fall von Auskunftsanfragen und der Geltendmachung von Betroffenenrechten weisen wir darauf hin, dass diese am effektivsten bei den Anbietern geltend gemacht werden können. Nur Letztere haben jeweils Zugriff auf die Nutzerdaten und können direkt entsprechende Maßnahmen ergreifen und Auskünfte geben. Sollten Sie dennoch Hilfe benötigen, dann können Sie sich an uns wenden.
                    <br><br>
                    <ul class="list-disc">
                        <li>
                            Verarbeitete Datenarten: Kontaktdaten (z. B. Post- und E-Mail-Adressen oder Telefonnummern); Inhaltsdaten (z. B. textliche oder bildliche Nachrichten und Beiträge sowie die sie betreffenden Informationen, wie z. B. Angaben zur Autorenschaft oder Zeitpunkt der Erstellung). Nutzungsdaten (z. B. Seitenaufrufe und Verweildauer, Klickpfade, Nutzungsintensität und -frequenz, verwendete Gerätetypen und Betriebssysteme, Interaktionen mit Inhalten und Funktionen).
                        </li>
                        <li>
                            Betroffene Personen: Nutzer (z. B. Webseitenbesucher, Nutzer von Onlinediensten).
                        </li>
                        <li>
                            Zwecke der Verarbeitung: Kommunikation; Feedback (z. B. Sammeln von Feedback via Online-Formular). Öffentlichkeitsarbeit.    
                        </li>
                        <li>
                            Aufbewahrung und Löschung: Löschung entsprechend Angaben im Abschnitt "Allgemeine Informationen zur Datenspeicherung und Löschung".    
                        </li>
                        <li>
                            Rechtsgrundlagen: Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).    
                        </li>
                    </ul>
                    <br><br>

                    Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:
                    <br><br>
                    <ul class="list-disc">
                        <li>
                            X: Soziales Netzwerk; Dienstanbieter: Twitter International Company, One Cumberland Place, Fenian Street, Dublin 2 D02 AX07, Irland; Rechtsgrundlagen: Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO); Website: https://x.com. Datenschutzerklärung: https://x.com/de/privacy.    
                        </li>
                        <li>
                            YouTube: Soziales Netzwerk; Dienstanbieter: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland; Rechtsgrundlagen: Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO); Website: https://www.youtube.com. Datenschutzerklärung: https://policies.google.com/privacy.
                        </li>
                        <li>
                            Discord: Soziales Netzwerk; Dienstanbieter: Discord Inc., 444 De Haro St, San Francisco, CA 94107, USA; Rechtsgrundlagen: Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO); Website: https://discord.com. Datenschutzerklärung: https://discord.com/privacy.    
                        </li>
                        <li>
                            Bluesky: Soziales Netzwerk; Dienstanbieter: Bluesky Social, Inc., 1015 Galleria Blvd, Suite 120, Roseville, CA 95678, USA; Rechtsgrundlagen: Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO); Website: https://bsky.app. Datenschutzerklärung: https://bsky.app/privacy.
                        </li>
                    </ul>
                    <br><br>
                    <a href="https://datenschutz-generator.de/">Erstellt mit kostenlosem Datenschutz-Generator.de von Dr. Thomas Schwenke</a>
                </TreeViewItem>
            </svelte:fragment>
        </TreeViewItem>
    </TreeView>
</div>