+++
title = "Kellerautomat"
weight = 6
+++

- A = (Q, Σ, K, F, δ, s, #)
- Q: nichtleere, endliche Menge von Zuständen
- Σ: nichtleeres, endliches Eingabealphabet
- F⊆Q Menge der akzeptierenden Zustände
- s∈Q Startzustand
- δ: Übergangsfunktion, die jeder Kombination (Zustand, Eingabezeichen (ϵ ist auch möglich, gehört aber nicht zum Eingabealphabet), Kellerzeichen) einen Nachfolgezustand und eine Kelleroperation zuordnet
- #ϵK Anfangssymbol im Keller

**Beispiel**

- A = (Q, Σ, K, F, δ, s, #)
- Q = {z<sub>0</sub>, z<sub>1</sub>, z<sub>2</sub>}
- Σ = {a, b}
- K = {#, A}
- F = {Z<sub>2</sub>}
- s = Z<sub>0</sub>
- δ:
	|Zustand|Eingabezeichen|Kellerzeichen|Folgezustand|Kelleroperation|
	|:---|:---|:---|:---|:---|
	|z<sub>0</sub>|a|#|z<sub>0</sub>|push(A)|
	|z<sub>0</sub>|a|A|z<sub>0</sub>|push(A)|
	|z<sub>0</sub>|b|A|z<sub>1</sub>|pop()|
	|z<sub>1</sub>|b|A|z<sub>1</sub>|pop()|
	|z<sub>1</sub>|ϵ|#|z<sub>2</sub>|nop|

> alle nicht aufgelisteten Übergänge führen in einen Fehlerzustand

**oder**:

![Kellerautomat Beispiel](kellerautomat-example.jpg)
