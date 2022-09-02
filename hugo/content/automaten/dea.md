+++
title = "Dea"
weight = 2
+++

**deterministisch**:
für jeden Zustand gibt es für jedes Eingabezeichen nur genau einen Folgezustand

- A = (Q, Σ, F, δ, s)
- Q: nichtleere, endliche Menge von Zuständen
- Σ: nichtleeres, endliches Eingabealphabet
- F⊆Q Menge der akzeptierenden Zustände
- δ: QxΣ → Q Übergangsfunktion, die jeder Kombination (Zustand, Eingabezeichen) einen Nachfolgezustand zuordnet
- s∈Q Startzustand

**Beispiel**:

- A = (Q, Σ, F, δ, s)
- Q = {q<sub>0</sub>, q<sub>1</sub>}
- Σ = {0, 1}
- F = {q<sub>0</sub>, q<sub>3</sub>}
- s = q<sub>0</sub>
- δ =
    
    |     | 0   | 1   |
    | --- | --- | --- |
    | q<sub>0</sub> | q<sub>3</sub> | q<sub>2</sub> |
    | q<sub>1</sub> | q<sub>3</sub> | q<sub>2</sub> |
    | q<sub>2</sub> | q<sub>3</sub> | q<sub>1</sub> |
    | q<sub>3</sub> | q<sub>2</sub> | q<sub>3</sub> |
    

**oder**

![DEA Beispiel](dea-beispiel.jpg)

### Begriffe

- Alphabet: Ein Alphabet Σ ist eine endliche, nicht leere Menge, die Symbole verschiedener Art enthalten kann.
- Buchstabe: Ein Buchstabe ist ein Element eines Alphabets.
- Wort: Ein Wort über einem Alphabet Σ ist eine endliche Folge von Buchstaben aus Σ.
- vom Automaten akzeptierte Sprache: Die Menge der Wörter, die von einem Automaten akzeptiert werden.

### Verhalten eines DEA

- DEA erhält Eingabewort w=w<sub>1</sub>...w<sub>n</sub>
- er startet in q<sub>0</sub> und liest in jedem Schritt genau ein Eingabezeichen
- er stoppt, sobald die Eingabe vollständig gelesen wurde
- befindet er sich dann in einem akzeptierenden Zustand, dann gehört das Wort zur Sprache des Automaten L(A)

### Zeigen, dass ein Wort zur Sprache eines DEA gehört (siehe Beispiel-DEA)

Zustandsfolgen für die Eingabewörter:

1.  1011 q<sub>0</sub> → q<sub>2</sub> → q<sub>3</sub> → q<sub>3</sub> → q<sub>3</sub>; Das Wort wird akzeptiert, da q<sub>3</sub> ein akzeptierender Zustand ist. (Auf den Pfeilen steht das gelesene Symbol)
2.  111 q<sub>0</sub> → q<sub>2</sub> → q<sub>1</sub> → q<sub>2</sub>; Das Wort wird nicht akzeptiert, da q<sub>2</sub> kein akzeptierender Zustand ist.

### Sprache eines Automaten

Die Sprache eines DEA A besteht aus allen Eingabewörtern, die von A akzeptiert werden.
