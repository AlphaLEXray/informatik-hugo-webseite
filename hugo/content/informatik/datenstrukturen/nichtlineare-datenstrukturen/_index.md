+++
title = "Nichtlineare Datenstrukturen"
weight = 1
+++

Um Graphen (und auch Baeume) zu erstellen gibt es eine gute Webseite:

https://csacademy.com/app/graph_editor/

## Graphen

### Definition:

Ein Graph besteht aus **Knoten** die mit **Kanten** verbunden sind. Zudem können Kanten gewichtet werden. Ein praktisches Beispiel eines Graphen ist das Internet, wo viele veschiedene Computer (Knoten) mit Kabeln (Kanten) verbunden sind.

Es gibt verschiedene Arten von Graphen die nicht exlusiv zueinander sind. 

Dazu gehören:
- ungerichtete/gerichtete Graphen
- ungewichtete/gewichtete Graphen

Beispiel eines **ungerichteten** Graphen:

![Beispiel eines ungerichteten Graphen](nichtlineare-datenstrukturen/ungerichteter-graph-beispiel.png)

Beispiel eines **gerichteten** Graphen:

![Beispiel eines gerichteten Graphen](nichtlineare-datenstrukturen/gerichteter-graph-beispiel.png)

## Bäume

### Begriffe:

- Baumstruktur:
    - Eine hierarchische Struktur, die aus Knoten und Kanten besteht 
- Teilbaum:		
- Wurzel:
    - Einziger Knoten ohne Vorgänger 
- Pfad:
    - Der Weg über Kanten den man gehen muss, um von einem Knoten zu einem anderen zu gelangen
- Tiefe:
    - Anzahl der Kanten auf dem Pfad von der Wurzel bis zu diesem Knoten. 
- Grad:
    - Der (Verzweigungs-) Grad eines Baumes bezeichnet die maximale Anzahl der Nachfolger, die ein Knoten dieses Baumes haben kann. 


### Kriterien eines binären Baums: 
- es gibt nur genau eine Wurzel.
- jeder Knoten außer der Wurzel hat genau einen Vaterknoten.
- Die Wurzel ist der Vorfahre jedes Knotens.
- Jeder Knoten hat höchstens zwei Kinderknoten, ein linkes und ein rechtes.

### Kriterien eines binären Suchbaums
#### Traversierungsmethoden:

**Preorder Traversierung**:

Wurzel, linker Teilbaum, rechter Teilbaum

**Inorder Traversierung**:

linker Teilbaum, Wurzel, rechter Teilbaum

**Postorder Traversierung**:

linker Teilbaum, rechter Teilbaum, Wurzel