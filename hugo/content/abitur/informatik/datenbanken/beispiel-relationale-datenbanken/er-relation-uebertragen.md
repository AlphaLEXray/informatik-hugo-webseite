+++
title = "Er Relation Uebertragen"
weight = 2
+++

Nun wird jede Entität in eine eigene Relation übertragen. Dabei sind die Attribute die Spalten der Relation.

>Kundenart(**KID**, Art)   
>Kunden(**KID**, Name, Art)  
>Auftrag(**KID**, AID, PID)  
>Auftragsart(**AID**, Art)  
>Positionsarten(**PaID**, Position)  
>Personal_Info(**PID**, PaID, FID, Email, TelefonNr, Straße, Hausnummer, Stadt, PLZ, Geburtsdatum, KontoNr)  
>Fachgebiete(**FID**, Gebiete)  
>Personal(**PID**, Name, Vorname)
>
>Hinweis: Die Primärschlüssel sind eigentlich unterstrichen (wir im ER-Modell, hier aber **Fett** da man in Markdown schlecht unterstreichen kann.)