+++
title = "Client Server Modellierung"
weight = 1
+++

**Allgemein**:
|Nr.|Client an Server|Server an Client|
|:-------------:|:-------------:|:-------------:|
|1|Anfrage|Reaktion auf diese Anfrage (Was geschieht bei dieser Anfrage)|
|2|Message|Was passiert beim Erhalt der Message (bei variablen, was für fälle gibt es)|
|...|...|...|

**Beispiel**:
|Nr.|Client an Server|Server an Client|
|:-------------|:-------------|:-------------|
|1|```ANMELDUNG```|Begrüßung, Aufforderung zur Wahl der Größe und Farbe des T-Shirts|
|2|```HOODIE: <Groesse>:<Farbe>```|Größe und Farbe werden bestätigt,<br> Preis wird übermittelt,<br> Bestätigung wird angefordert,<br> Größe oder Farbe ist falsch,<br> Aufforderung für eine korrekte Eingabe|
|3|```BESTAETIGUNG:<Wahl>```|<ul><li>Bei ```<Wahl>``` = ja (gleich) wird dem Kunden gedankt</li><li>Bei ```<Wahl>``` = (gleich) nein wird der Kunde abgemeldet</li><li>Bei ```<Wahl>``` != (ungleich) (ja oder nein), Aufforderung für eine korrekte Eingabe</li>|
|4|```ABMELDEN```|Der Kunde wird verabschiedet|
|5|Sonstige Nachricht|Unbekannte Anweisung, Aufforderung für eine korrekte Eingabe|
