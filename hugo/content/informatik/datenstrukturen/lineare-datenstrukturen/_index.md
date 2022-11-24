+++
title = "Lineare Datenstrukturen"
weight = 1
+++

## Queue
### Aufbau
![Aufbau einer Queue](lineare-datenstrukturen/queue-illustration.png)

### Methoden
- enqueue()
    - Hängt ein Objekt am Anfang der Schlange an
- dequeue()
    - Entfernt das Objekt am Ende der Schlange
- getContent()
    - Gibt das Inhaltsobjekt am Ende der Schlange wieder 
- isEmpty()
    - Gibt true zurück wenn die Schlange leer ist

## List
### Aufbau
![Aufbau einer List]()

### Methoden
- isEmpty()
    - Gibt true zurück wenn die Liste leer ist
- hasAccess()
    - Gibt true zurück falls der Pointer auf ein valides Objekt zeigt
- next()
    - Bewegt den Pointer eine Information weiter
- toFirst()
    - Setzt den Pointer zurück auf die erste information in der Liste
- toLast()
	- Setzt den Pointer auf das letzte Element in der Liste
- getContent()
	- Gibt das aktuelle inhaltsobjekt zurück
- setContent(pContent)
	- setzt den aktuellen Inhalt auf den Parameter
- insert(pContent)
	- fügt ein Objekt nach dem Pointer ein
- append(pContent)
	- fügt am ende der Liste ein Objekt hinzu
- concat()
	- setzt zwei Listen zu einer zusammen
- remove()
	- entfernt das aktuelle Objekt aus der Liste

## Stack
### Aufbau
![Aufbau eines Stacks]()

### Methoden
- top()
    - Gibt das Objekt das oben auf dem Stapel liegt zurück
- push()
    - Legt ein Objekt oben auf den Stapel
- pop()
    - Entfernt das oberste Objekt
- isEmpty()
    - gibt true zurück, falls der Stapel keine Inhaltsobjekte hat