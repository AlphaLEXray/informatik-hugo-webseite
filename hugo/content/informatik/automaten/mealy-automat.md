+++
title = "Mealy Automat"
weight = 1
+++

endlich: Eingabealphabet, (Ausgabealphabet), Zustände sind **endlich**

- A = (Q, Σ, δ, Ω, λ,s)
- Q: nichtleere, endliche Menge von Zuständen
- Σ: nichtleeres, endliches Eingabealphabet
- Ω: nichtleeres, endliches Ausgabealphabet
- δ: QxΣ → Q Übergangsfunktion, die jeder Kombination (Zustand, Eingabezeichen) einen Nachfolgezustand zuordnet
- λ: QxΣ → Ω Ausgabefunktion, die jeder Kombination (Zustand, Eingabezeichen) eine Ausgabe zuordnet
- s∈Q: Startzustand

### Beispiel:

- A = (Q, Σ,Ω, δ, λ,s) mit:
    
- Q = {q<sub>0</sub>, q<sub>1</sub>}
    
    - q<sub>0</sub>: zu, q<sub>1</sub>: offen
- Σ = {O, S}
    
    - O: öffnen, S: schließen
- Ω = {GO, GS, N}
    
    - GO: "Tür wird geöffnet", GS: "Tür wird geschlossen", N: keine Ausgabe
- s = q<sub>0</sub>
    
- δ:
    
    |     | O   | S   |
    | --- | --- | --- |
    | q<sub>0</sub> | q<sub>1</sub> | q<sub>0</sub> |
    | q<sub>1</sub> | q<sub>1</sub> | q<sub>0</sub> |
    
- λ:
    
    |     | O   | S   |
    | --- | --- | --- |
    | q<sub>0</sub> | GO  | N   |
    | q<sub>1</sub> | N   | GS  |
    

**oder** als Übergangsgraph:

![Mealy-Automat](mealy-automat-beispiel.jpg)
