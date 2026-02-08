# 🌿 CO₂-Footprint / Green Energy

Green Energy ist eine gemeinnützige Webplattform, die CO₂-Emissionsdaten transparent und verständlich darstellt. Ziel des Projekts ist es, das Bewusstsein für den Klimawandel zu stärken, datenbasierte Entscheidungen zu fördern und nachhaltiges Handeln zu unterstützen. Die Website wurde als statische Anwendung mit HTML, CSS und JavaScript entwickelt. Das Design basiert auf Bootstrap 5 und alle Inhalte sind auf Deutsch verfügbar.

---

## Über das Projekt

CO₂-Emissionen für alle verständlich darstellen

Emissionsdaten von Ländern, Branchen und Unternehmen transparent aufzeigen

Bewusstsein für den Klimawandel schaffen

Nachhaltige und datenbasierte Entscheidungen unterstützen

Die Plattform sammelt öffentlich verfügbare Daten und visualisiert diese in Form von Nachrichten, Informationsartikeln und filterbaren Emissionstabellen.

---

## Funktionen im Überblick

Responsives Design (Desktop, Tablet und Smartphone)

Informationsinhalte zu CO₂ und Klimawandel

Aktuelle CO₂-Nachrichten und Artikel

Filterbare Emissionstabelle nach Land und Unternehmen

Kontaktformular mit Validierung und XSS-Schutz

---

## Seiten im Detail

### Startseite (`Home/home.html`)

- **Navigation:** Links zu Home, CO₂ Nachrichten, CO₂ Emissionsdaten, About, Kontakt
- **Header:** Titel „Green Energy“
- **Karussell:** Wechselnde Bilder zu CO₂- und Klimathemen
- **CO₂-Erklärung:** Kurzer Text zu Kohlendioxid, Treibhauseffekt und industriellen Emissionen
- **Nachrichten-Karten:** Drei Karten mit aktuellen CO₂-Meldungen und Link zur Infoseite
- **Über uns:** Wer wir sind, Ziele (Bewusstsein, Daten, Nachhaltigkeit), was wir tun
- **Kontakt:** Formular mit E-Mail und Nachricht (größere Eingabefelder, nur Felder verbreitert), Absenden mit Validierung

### CO₂ Nachrichten & Informationen (`Co2-Infos/Co2.Infos.html`)

- Aktuelle CO₂-Nachrichten in Kartenlayout
- Themen u. a.: Global Carbon Budget, Rekordemissionen, COP29, Energiesektor, KI und Emissionen (z. B. Google)
- Einheitliche Navigation und Footer wie auf der Startseite

### CO₂ Emissionsdaten (`Co2-tabelle/tabelle.html`)

- Tabelle mit Spalten: **Land**, **Unternehmen**, **Sektor**, **Jahres-Emissionen (kt CO₂eq)**, **Anpassung (J/N)**
- **Filter:** „Nach Land filtern“ und „Nach Unternehmen filtern“ (Eingaben werden bereinigt, Filterung in Echtzeit)
- Beispieldaten u. a. für Deutschland, China, USA, Russland, Frankreich, Indien, Brasilien (RWE, CHN Energy, ExxonMobil, GazProm, Deutsche Bahn, TotalEnergies, Petrobras usw.)
- Responsive Tabellendarstellung

### Kontaktformular (auf der Startseite)

- **Felder:** E-Mail-Adresse (Pflicht), Nachricht (Pflicht)
- **Validierung:** Prüfung auf ausgefüllte Felder, Anzeige von Fehler- bzw. Erfolgsmeldung
- **Sicherheit:** Eingaben werden per `sanitizeInput()` bereinigt (XSS-Schutz)
- **Hinweis:** Formular wird derzeit nicht an einen Server gesendet (Demo), zeigt nur eine Danke-Nachricht

---

## Projektstruktur

```
Co2-Footprint/
├── Home/
│   ├── home.html          # Startseite
│   ├── style.css          # Layout, Farben, Kontaktbereich, Responsive
│   └── script.js          # Kontaktformular-Validierung, Eingabebereinigung
├── Co2-Infos/
│   ├── Co2.Infos.html     # CO₂-Nachrichten und -Informationen
│   ├── Co2-Infos.css      # Stile für die Infoseite
│   └── script.js          # (optional genutzte Skripte)
├── Co2-tabelle/
│   ├── tabelle.html       # Emissionsdaten-Tabelle
│   ├── tabelle.css        # Tabellen- und Filter-Stile
│   └── script.js          # Filter nach Land/Unternehmen, Eingabebereinigung
├── Image/                 # Bilder und Logos (CO₂, Karussell, Karten, Logos)
├── .vscode/               # VS-Code-Konfiguration (z. B. launch.json)
└── README.md              # Diese Datei
```

---

## Lokal starten

Es handelt sich um eine **statische Website ohne Build-Schritt**. Damit absolute Pfade wie `/Home/home.html` und `/Image/` funktionieren, muss die Seite über einen **lokalen Webserver** geöffnet werden (nicht per `file://`).

### Option 1: VS Code Live Server

1. Erweiterung **Live Server** in VS Code installieren.
2. Rechtsklick auf `Home/home.html` → **„Open with Live Server“**.
3. Im Browser erscheint die Startseite (z. B. `http://127.0.0.1:5500/Home/home.html`).

## Technologien

| Technologie | Verwendung |
|-------------|------------|
| **HTML5** | Struktur aller Seiten, semantische Bereiche, Formulare, Tabellen |
| **CSS3** | Eigenes Layout, Farbverläufe, responsive Breakpoints, Kontaktformular-Stile |
| **JavaScript** | Formularvalidierung, Tabellenfilter (Land/Unternehmen), XSS-Bereinigung |
| **Bootstrap 5.3** | Grid, Navbar, Karussell, Karten, Formulare, Buttons |
| **Google Fonts** | Schriftart „Poppins“ |

---

## Lizenz

© 2025 CO₂-Footprint Initiative. Alle Rechte vorbehalten.
