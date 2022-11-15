+++
title = "Formale Grammatik"
weight = 3
+++

- G = (N, T, P, S)
- N: nichtleere, endliche Menge von Nichtterminalen
- T: nichtleere, endliche Menge von Terminalen
- P: endliche Menge von Produktionsregeln (Jede Regel bildet eine beliebige Kombination aus T und N, die mindestens ein N enthält, auf eine beliebige Kombination von Terminalen und Nichtterminalen ab.)
- s∈N ist das Startsymbol

**Beispiel**: L = {a<sup>n</sup>b<sup>n</sup>c<sup>n</sup>|n≥0}

- G = (N, T, S, P)
- N = {S, S', B}
- T = {a, b, c}
- S Startsymbol
- P = {  
	S &rarr; S' | ϵ  
	S' &rarr; aS'Bc | abc  
	cB &rarr; Bc  
	bB &rarr; bb}

### rechtsreguläre Grammatik
Außschließlich Produktionsregeln der Form:
N &rarr; T | TN (Wörter wachsen nach rechts) | ϵ

### linksreguläre Grammatik
Außschließlich Produktionsregeln der Form:
N &rarr; T | NT (Wörter wachsen nach links) | ϵ

### kontextfreie Grammatik
Außschließlich Produktionsregeln der Form:
N &rarr; (NUT)∗ *(alle Kombinationen aus ϵ, N, T)* , also auch N &rarr; ϵ

### Zeigen, dass ein Wort sich aus einer Grammatik ableiten lässt (siehe Grammatik oben)
aabbcc: S &rarr; S' &rarr; aS'Bc &rarr; aabcBc &rarr; aabBcc &rarr; aabbcc (Ableitung des Wortes)

## Hirarchie formaler Sprachen
![Hierarchie formaler Sprachen](chomsky-hirarchie.jpg)

## reguläre und kontextfreie Sprachen
Die Sprache L ist regulär ⇔ es existiert eine reguläre Grammatik, die L erzeugt ⇔ es existiert ein DEA, der L erkennt

Die Sprache L ist kontextfrei ⇔ es existiert eine kontextfreie Grammatik, die L erzeugt ⇔ es existiert ein NICHTDETERMINISTISCHER Kellerautomat, der L erkennt
