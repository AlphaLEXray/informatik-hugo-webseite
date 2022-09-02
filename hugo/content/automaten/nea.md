+++
title = "Nea"
weight = 3
+++

**nichtdeterministisch**:

für eine Kombination aus Zustand und Eingabezeichen kann es mehrere Folgezustände geben, oder keinen Folgezustand. Dann wird auf die leere Menge abgebildet (Fehlerzustand).

- A = (Q, Σ, F, δ, s)
- Q: nichtleere, endliche Menge von Zuständen
- Σ: nichtleeres, endliches Eingabealphabet
- F⊆Q Menge der akzeptierten Zustände
- δ: QxΣ → P(Q) Übergangsfunktion die jeder Kombination einen Nachfolgezustand zuordnet
- s∈Q Startzustand

P(Q) ist die Potenzmenge von Q, also die Menge aller Teilmengen von Q. Dabei gehört auch die leere Menge ∅ bzw. {} dazu.

**Beispiel**:

- A = (Q, Σ, F, δ, s)
- Q = {q<sub>0</sub>, q<sub>1</sub>, q<sub>2</sub>}
- Σ = {0, 1}
- F = {q<sub>2</sub>}
- s = q<sub>0</sub>
- δ:
    
    |     | 0   | 1   |
    | --- | --- | --- |
    | q<sub>0</sub> | {q<sub>0</sub>} | {q<sub>0</sub>, q<sub>1</sub>} |
    | q<sub>1</sub> | {q<sub>2</sub>} | {q<sub>2</sub>} |
    | q<sub>2</sub> | {}  | {}  |
    

**oder**

![NEA Beispiel](nea-beispiel.jpg)

### Hinweise

- ein NEA kann ϵ-Übergänge besitzen, die einen automatischen Übergang zum Folgezustand bedeuten
- ϵ muss nicht explizit zum Eingabealphabet hinzugefügt werden
- ϵ steht für "das leere Wort"

### Verhalten eines NEA

- NEA erhält ein Eingabewort w=w<sub>1</sub>...w<sub>n</sub>
- er startet in q<sub>0</sub> und liest in jedem Schritt genau ein Eingabezeichen
- es kann mehrere Berechnungen geben, die parallel stattfinden
<!-- To-Do: steckenbleiben ändern -->
- dabei kann der NEA bei einer Berechnung steckenbleiben, falls es für den aktuellen Zustand und das aktuelle Eingabezeichen keinen Folgezustand gibt.
- ein Eingabewort w wird akzeptiert, wenn es mindestens eine Berechnung gibt, die in einem akzeptierenden Zustand endet. Dann gehört das Wort zur Sprache L(A) das Automaten A.
