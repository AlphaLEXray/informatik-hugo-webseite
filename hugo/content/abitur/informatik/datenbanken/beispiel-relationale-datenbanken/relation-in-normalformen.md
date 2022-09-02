+++
title = "Relation in Normalformen"
weight = 3
+++

Dies kann kann schlecht an unserem Beispiel gezeigt werden, da wir schon in der Planungsphase versucht haben darauf zu achten, dass die Attribute atomar sind. Hätten wir dies nicht getan könnte ein Beispiel so aussehen:

|Vorher|Nachher|
|:--|:--|
|Personal_Info(**PID**, PaID, FID, Email, TelefonNr, Anschrift, Geburtsdatum, KontoNr)|Personal_Info(**PID**, PaID, FID, Email, TelefonNr, Straße, Hausnummer, Stadt, PLZ, Geburtsdatum, KontoNr)|

Wie man in der Tabelle oben sieht wurde das Attribut *Anschrift* in seine kleinsten Bestandteile aufgeteilt.

>Anschrift &rarr; Straße, Hausnummer, Stadt, PLZ