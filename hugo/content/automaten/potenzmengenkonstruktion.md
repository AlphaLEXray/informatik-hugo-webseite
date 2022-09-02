+++
title = "Potenzmengenkonstruktion"
weight = 5
+++

**Idee**
Konstruiere zu NEA einen DEA durch:

- merke im Zustand des DEA, in welchen Zuständen der NEA sein könnte
- Zustände des DEA sind Mengen von Zuständen des NEA

**Beispiel**
<!-- To-Do: Add Übergangstabelle -->

*NEA*
![Potenzmengenkonstruktion NEA](potenzmengenkonstruktion-nea.jpg)
*DEA*
![Potenzmengenkonstruktion DEA](potenzmengenkonstruktion-dea.jpg)

> Jeder Zustand des DEA, der mindestens einen Endzustand vom NEA enthält, wird ein akzeptierender Zustand.

### Algorithmus

- starte mit Menge des Anfangszustands
- solange es unbearbeiteten Zustand S={q<sub>1</sub>,..., q<sub>k</sub>} gibt
    - für jedes Eingabezeichen a:
        - für jeden Zustand q<sub>1</sub>,..., q<sub>k</sub>
            - bestimme die Nachfolger für die Eingabe a im NEA und füge sie s' hinzu
        - falls es den Zustand s' noch nicht gibt, füge ihn hinzu
        - füge den Übergang von s zu s' hinzu
    - markiere s als bearbeitet