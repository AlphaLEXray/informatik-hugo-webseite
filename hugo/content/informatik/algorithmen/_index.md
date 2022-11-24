+++
title = "Algorithmen"
weight = 1
+++

## Sortierverfahren

### Sortierfahren Definitionen

#### Bubble Sort
Der Bubble Sort Algorythmus Vergleicht jeweils zwei benachbarte Zahlen. Falls sie in der 	falschen Reihenfolge sind, werden sie getauscht. Dies wird so oft wiederholt, bis keine Zahlen 	mehr getauscht werden müssen.
	
**Beispiel**:

Erster Durchlauf:
( 5 1 4 2 8 ) –> ( 1 5 4 2 8 ), 5 ist größer als 1, daher werden die Elemente getauscht
( 1 5 4 2 8 ) –>  ( 1 4 5 2 8 ), Tausch, da 5 > 4 
( 1 4 5 2 8 ) –>  ( 1 4 2 5 8 ), Tausch, da 5 > 2 
( 1 4 2 5 8 ) –> ( 1 4 2 5 8 ), Kein Tausch, da die Reihenfolge hier schon richtig ist

Zweiter Durchlauf: 
( 1 4 2 5 8 ) –> ( 1 4 2 5 8 ) 
( 1 4 2 5 8 ) –> ( 1 2 4 5 8 ), Tausch, da 4 > 2 
( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) 
( 1 2 4 5 8 ) –>  ( 1 2 4 5 8 ) 
Die Zahlenreihe ist hier zwar sortiert, jedoch weiß der Algorithmus dies nicht. Er muss erst ein weiteres mal die komplette Liste durchlaufen, ohne einen wechsel vor nehmen zu müssen. 

Dritter Durchlauf: 
( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) 
( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) 
( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) 
( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) 
 
→Die Zahlenreihe ist sortiert

#### Selection Sort
Der Selection Sort Algorithmus durchsucht eine Zahlenliste nach der kleinsten Zahl. Diese 	verschiebt er an den Anfang. Die nächst kleinste Zahl wird an die zweite Position gesetzt und so 	weiter.

// suche nach der kleinsten zahl in [0...4]
// und Platziere sie am Index 0
11 25 12 22 64

// suche nach der kleinsten zahl in [1...4]
// und Platziere sie am Index 1
11 12 25 22 64

// suche nach der kleinsten zahl in [2...4]
// und Platziere sie am Index 2
11 12 22 25 64

// suche nach der kleinsten zahl in [3...4]
// und Platziere sie am Index 3
11 12 22 25 64 

#### Insertion Sort
Beim Insertion Sort Algorithmus wird die Zahlenliste praktisch in einen sortierten und einen unsortierten Teil aufgeteilt. Die Werte aus dem unsortierten Teil werden ausgewählt und an der richtigen Stelle im sortierten Teil eingefügt.

Funktionsweise: 
1. Iterieren Sie von Index 1 bis index n  der Liste.
2. Vergleiche hierbei  das aktuelle Element (Schlüssel) mit seinem Vorgänger. 
3. Wenn das Schlüsselelement kleiner ist als sein Vorgänger, vergleiche es mit den Elementen davor. Verschiebe die höheren Elemente um eine Position nach oben, um Platz für das vertauschte Element zu schaffen.