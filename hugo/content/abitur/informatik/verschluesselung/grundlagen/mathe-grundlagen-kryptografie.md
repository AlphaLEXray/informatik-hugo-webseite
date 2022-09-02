+++
title = "Mathematische Grundlagen der Kryptografie"
weight = 2
+++

## Primzahlen

Eine Primzahl ist eine Zahl, die größer als eins ist und nur durch sich selbst und eins teilbar ist.

## Primfaktorzerlegung

Jede natürliche Zahl die größer als eins ist und selbst keine Primzahl ist, lässt sich als ein Produkt von mindestens zwei Primzahlen schreiben.

Beispiel:

> 60= 2*30 = 2*2*15= 2²*3*5

## Teilbarkeit

Eine ganze Zahl a ist durch eine andere ganze Zahl b teilbar, wenn bei der Division a:b kein Rest entsteht.

Beispiel:

> Teilbar: 8:4 = 2
> Nicht Teilbar (mit Rest): 8:7= 1 r 1

*Teiler einer Zahl: ggT (größter gemeinsamer Teiler)*

Beispiel:

> gemeinsame Teiler von 12 und 18: 1,2,3,6
> größter gemeinsame Teiler von 12 und 18: ggT(12,18) = 6

## Die Modulo-Funktion

- a mod m ist der Rest, den eine Zahl bei der Division durch eine Zahl lässt. Es gibt also eine Zahl k mit a=k*m+r
- Der Rest r kann also nur die Werte 0 bis m-1 annehmen.

Beispiel:

> 19 mod 5 = 4, da 19:5 = 3 (Rest 4)

## Kongruenzen

Sei m > 1 eine natürliche Zahl. Lassen zwei ganze Zahlen a und b bei der Division durch m den gleichen Rest, dann nennt man a und b kongurent modulo m und schreibt dafür kurz: a≡b mod m

Beispiel:
> 30≡4mod13, da 30mod13=4 und 4mod13=4

## Rechengesetze für Modulo-Funktionen

- (x+y) mod m = ((x mod m) + (y mod m)) mod m
- (x\*y) mod m = ((y mod m) \* (y mod m)) mod m

Beispiel:

> 23 mod 5 = (12+11) mod 5 = ((12 mod 5) + (11 mod 5)) mod 5 = (2+1) mod 5 = 5 mod 5
