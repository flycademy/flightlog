# FlyCademy Flight Log — Web-App

Stand: Build 2026-10-01c

## Einmalig einrichten (GitHub Pages)

1. Auf github.com anmelden, oben rechts **+** → **New repository**.
   Name z. B. `flightlog`, Sichtbarkeit **Public** (GitHub Pages ist im kostenlosen Tarif nur für öffentliche Repositories verfügbar), dann **Create repository**.
2. Auf der leeren Repository-Seite auf **uploading an existing file** klicken und **alle Dateien aus diesem Paket**
   (nicht den Ordner, sondern die Dateien darin) in das Fenster ziehen → unten **Commit changes**.
3. **Settings** → links **Pages** → unter *Build and deployment*: Source **Deploy from a branch**,
   Branch **main**, Ordner **/ (root)** → **Save**.
4. Nach 1–2 Minuten erscheint oben die Adresse, z. B. `https://BENUTZERNAME.github.io/flightlog/`.

## Auf dem iPhone / iPad installieren

1. Die Adresse in **Safari** öffnen (nicht in einem anderen Browser).
2. **Teilen**-Symbol → **Zum Home-Bildschirm** → **Hinzufügen**.
3. Ab jetzt über das Icon **FlightLog** starten — Vollbild, funktioniert auch offline.

Android: Adresse in Chrome öffnen → Menü → **App installieren**.

## Updates einspielen

Neue Dateien genauso hochladen (**Add file → Upload files**, vorhandene werden ersetzt) → **Commit changes**.
Die App holt sich die neue Version beim nächsten Start mit Internetverbindung automatisch.

## Gut zu wissen

- **Daten bleiben auf dem Gerät.** Eingaben und Entwürfe werden nur lokal gespeichert und nie hochgeladen.
  Jedes Gerät (und auch die installierte App getrennt vom Safari-Tab) hat seinen eigenen Speicher.
- **Öffentlich ist nur der App-Code** (inkl. Flottendaten und openAIP-Schlüssel), nicht eure Flugdaten.
  Die Seite ist für Suchmaschinen gesperrt (noindex).
- **PDF auf iPhone/iPad:** „Drucken / PDF" bzw. „Kniebrett-Log" erzeugt das PDF direkt in der App
  → **Teilen / In Dateien sichern** (Dateien, Mail, AirDrop, Drucker). Am Computer öffnet sich wie gewohnt der Druckdialog.
- **Offline:** Die App selbst startet ohne Netz; Wetter, Höhenwinde, Karte und MSA-Gelände brauchen Internet.
- **Lizenzen:** Quellenangaben stehen in der App unter „Quellen & Lizenzen" (Seitenende), die Lizenztexte der
  enthaltenen Software zusätzlich in `THIRD-PARTY-LICENSES.txt`. Schriften sind eingebettet — keine Verbindung zu Google.
- **Open-Meteo (Modellwetter, Höhenwinde, Gelände, Ortssuche):** Der kostenlose Zugang ist nur für nicht-kommerzielle
  Nutzung bzw. Erprobung gedacht. Mit einem Open-Meteo-Abo den Schlüssel unter „Einstellungen" (Seitenende) eintragen —
  er wird nur auf dem jeweiligen Gerät gespeichert und nie hochgeladen.
