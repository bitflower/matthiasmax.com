---
title: Transparenz im Shopfloor - Wie REMONDIS mit CaseOS® Produktionsdaten auswertet
date: July 08, 2021
url: /blog/transparenz-im-shopfloor-wie-remondis-mit-case-os-produktionsdaten-auswertet
author: Matthias Max
twitter: bitflowertweets
description: Der Bedarf nach Transparenz im Shopfloor nimmt stetig zu. Die aktuellen Produktionszahlen tragen bei der Führung des Unternehmens maßgeblich zu sinnvollen wirtschaftlichen Entscheidungen bei. Der weltweit größte Dienstleister für Recycling, Service und Wasser REMONDIS hat am Standort Heilbronn nun eine Lösung mit CaseOS® entwickelt, die zuverlässig, in Echtzeit und ohne manuellen Aufwand die Ballenproduktion überwacht und Transparenz schafft.
img: /assets/img/blog/posts/remondis-case-os.jpg
tags: OPC UA, IoT, IIoT, KPI, Dashboard, Industrie 4.0, Produktionsdaten, Sensor, Siemens S7, PLC, Subscription
relatedProjects: 0
---

![Remondis + CaseOS](/assets/img/blog/posts/remondis-case-os.jpg)

<b>Der Bedarf nach Transparenz im Shopfloor nimmt stetig zu. Die aktuellen Produktionszahlen tragen bei der Führung des Unternehmens maßgeblich zu sinnvollen wirtschaftlichen Entscheidungen bei. Der weltweit größte Dienstleister für Recycling, Service und Wasser REMONDIS hat am Standort Heilbronn nun eine Lösung mit CaseOS® entwickelt, die zuverlässig, in Echtzeit und ohne manuellen Aufwand die Ballenproduktion überwacht und Transparenz schafft.</b>

## Der Pain Point

<i>"Wir wollen die Zahlen nicht mehr in Excel erfassen und auswerten. Das ist manueller Aufwand, die Informationen sind schlecht zugänglich und es droht die Gefahr, dass die Zahlen auch mal nicht stimmen. So kann man keine vernünftigen Auswertungen erstellen und daraus Maßnahmen ableiten."</i> berichtete Tobias Kutz, Niederlassungsleiter des Standorts Heilbronn bei der REMONDIS Süd GmbH bei unserem Erstgespräch.

Weiter führte er aus: <i>"Transparenz bei den Produktionszahlen ist aber nicht nur für das Management wichtig. Auch für die Motivation der Mitarbeiter ist es von Bedeutung. Die zukünftige Lösung soll daher die Kommunikation der Ergebnisse auf einfache Art und Weise ermöglichen."</i>.

## Die Gegebenheiten

Die Voraussetzungen für eine digitale Lösung waren mit der vorhandenen Siemens S7-gesteuerten Ballenpressenanlage geschaffen. Da die Anlage bereits mit Konnektivtät in Form einer OPC UA Schnittstelle ausgestattet war, konnten Sensorwerte direkt gelesen werden. Mit dem CaseOS® OPC UA Adapter war somit eine reibungslose Datenanbindung möglich.

Anhand der bestehenden Excelauswertungen konnten die Business-Anforderungen für das neue digitale Dashboard abgeleitet werden. Zu den Anforderungen zählt die Zeitreihenanalyse mit der Möglichkeit zeitlich zu filtern. Sowohl eine Tabellenansicht als auch Diagramme waren gefordert. Außerdem eine Jahresplannungssicht mit Fokus auf die Monatsergebnisse, die es erlaubt, bestimmte Szenarien parametrisiert durchzuspielen und die Auswirkung auf Kennzahlen / KPIs zu simulieren.

## Die Lösung

- automatisiertes Sytem das selbstständig Daten auswertet und zur Visualisierung anbietet
- 

## Setup

CaseOS® ermöglicht ein schnelles Setup (oft innerhalb eines Tages abhängig von der Unternehmens IT). Es integriert sich nahtlos in die bestehende Unternehmens IT und kann nativ oder als Docker-Netzwerk betrieben werden. Mit diesem On-Premise-Ansatz bleibt die Datenhoheit zu 100% beim Unternehmen, auf die Flexibilität der Cloud-Vielfalt muss aber trotzdem nicht verzichtet werden.

### On-Premise Hosting

In Abstimmung mit Remondis wurde eine Cloud-Architektur gewählt, die im folgenden Diagramm dargestellt wird.

![On-Premise Architektur](/assets/img/blog/posts/on-premise-hosting.png)

### CaseOS® Systemarchitektur

Die CaseOS® Systemarchitektur deckt mit ihren Basismodulen viele Anforderungen ab. Eigene Module können jederzeit entwickelt werden. Das Schichtmodell und das offene API-Design sorgen dafür, dass Erweiterungen von Entwicklern Sprachen-unabhängig entwickelt werden können.

![CaseOS Core Systemarchitektur](/assets/img/blog/posts/co-arc.png)

## Eingesetzte Module

Die Dashboard-Lösung für REMONDIS nutzt viele der Basis-Module von CaseOS®. Die Basis-Module erlauben es, sich direkt mit der fachlichen Anforderung und deren Lösungsimplementierung zu befassen. Es kann Zeit bei der Entwicklung technischer Notwendigkeiten gespart werden und es bleibt mehr Kapazität für die Entwicklung der wertstiftenden Business-Features.

### OPC UA Konnektor

Konfigurierbare Modul für die OPC UA Konnektivität

- Ignore-Regeln
- Datenanreicherung
- Datenpufferung zum Schutz von Ausfällen des Anwendungsservers

### Dynamische REST-Services

Konfigurierbare Datenschemata mit autom. REST-Schnittstelle

- Abbilden eigener Datenentitäten
- Anbindung bestehender Systeme
  
### WebSocket Echtzeit-Verbindung

Echtzeitverbindung zwischen Browser und Server

- Anlagendaten erscheinen nahezu in Echtzeit auf dem Bildschirm
- Alle verbundenen Clients sind stets synchron & aktuell

### Benutzer- und Rechteverwaltung

Benutzerauthentifizierung und -autorisierung

- Benutzer können sich am System anmelden
- Benutzer haben einen definierten Handlungsspielraum
- Attribut- & Rollenbasierte Berechtigungen

### AtomicUI View Engine

Frei-konfigurierbare Seiten und visuelle Blöcke

- Atoms (Buttons, Checkboxen, Dropdownliste)
- komplexe UI-Blöcke die aus Atomen bestehen

### Kundenspezifische Komponenten

Entwicklung maßgescheiderter Web-Komponenten

- zur Abbildung von Individualfunktionalität
- Entwicklung von individuellen KPI-Berechnungen

### Logikregeln zur Zeitstrahlanalyse

Fertige Aggregationsregeln für die Analyse von Zeitbasierten Daten

- Summe
- Durchschnitt
- Zeitraumfilter
- Charts mit Legende & Labels

### OpenCI

Erscheinungsbild der Lösung ist 100% dem Corporate Design angepasst

- Schriftarten
- Farbschema
- Abstände
- Logos und Illustrationen

### Daten-Export und Drucken

Datenexport-Modul für Tabellen und Diagramme

- Export zu CSV & Bildformaten
- Drucken

# Testimonial

"Total klasse! So wollte ich das haben." - Tobias Kutz, REMONDIS Süd GmbH, Niederlassungsleiter Heilbronn

# Dateien

<video controls="true">
  <source src="/assets/img/blog/posts/case-os-remondis-showcase.mp4" type="video/mp4">
</video>

# Weitere Informationen zu CaseOS®

Ihre Fragen zu CaseOS® beantworten wir gerne in einem persönlichen Gespräch. Oder Sie vereinbaren einen Termin für eine Produktpräsentation mit uns.

CaseOS® ist eine eingetragene Wortmarke.
## Kontakt

bitflower - beautiful coding
Tafingerstraße 14
71665 Vaihingen/Enz

Ansprechpartner: Matthias Max
Email: matthias.max@bitflower.net
Mobil: +49 171 41 77 266
