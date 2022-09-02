+++
title = "RSA-Verschlüsselung"
weight = 1
+++

privater Schlüssel: (d, N)
>Beispiel:	(11, 14)

öffentlicher Schlüssel: (e, N)
>Beispiel: (5, 14)

Nachricht: m
>Beispiel: c (3)

## Verschlüsseln
m^e (als Zahl) mod N

Beispiel:
> 3 mod 14 = 5 (e)
> Cyphertext  (c) = 5 (e)

## Entschlüsseln
c^d (als Zahl) mod N

Beispiel:
> 5 mod 15 = 3 (c)

## RSA-Schlüsselgeneration
Um eine Nachricht mit dem RSA-Verfahren zu verschlüsseln braucht man einen privaten und einen öffentlichen Schlüssel. Dieser wird generell in 5 Schritten erzeugt.

- Schritt 1 – p und q  
Wähle zwei zufällige möglichst große Primzahlen aus. Diese nennen wir p und q

- Schritt 2 – N  
Nun ermittlen wir die Zahl N, indem wir p mit q multiplizieren.

- Schritt 3 – r  
Als nächstes wird nun r mit ermittelt, indem p und q jeweils mit 1 subtrahiert werden und danach multipliziert werden.

- Schritt 4 – e  
Wähle eine zufällige Zahl e, die keinen gemeinsamen Teiler mit r hat.

- Schritt 5 – d  
Als letzes wird die Zahl d so gewählt, dass e*d mod r = 1 gilt.

Nun haben wir alle nötigen Komponenten, um unsere privaten und öffentlichen Schlüssel zu erstellen.

Diese sehen wie folgt aus:

(**e**, **N**) &rarr; öffentlicher Schlüssel
(**d**, **N**) &rarr; privater Schlüssel

