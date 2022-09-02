+++
title = "Umsetzung"
weight = 2
+++

|Begriff|Bedeutung|Beispiel|
|:---|:---|:---|
|Relationsschema|Jede Entitätsmenge wird im relationalen Modell einer eigenständigen Relation überführt|Verlag(**VID**, Name, Sitz, Ansprechpartner)|
|Fremdschlüssel|Primärschlüssel der in einer Relation vorkommt und mit einem senkreckten Pfeil gekennzeichnet wird|
|m:n-Beziehung|Wird im relationalem Modell (Relationsschema) in eine eigene Relation überführt. Attribute sind die Primärschlüssel der beiden an der Beziehung beteiligten Entitätsmengen (als Fremdschlüssel), die gemeinsam den Primärschlüssel der Beziehungstabelle bilden, sowie ggf. Attribute der Beziehungsmenge||
|1:n-Beziehung|Die Relation mit der Kardinalität n wird der Primärschlüssel der Relation mit der Kardinalität 1 als Fremdschlüssel angefügt. Attribute der Beziehungsmenge werden ggf. auch dieser Relation hinzugefügt| Jedes Buch kann nur von einem Verlag herausgebracht werden aber ein Verlag kann mehrere Bücher herausbringen: Buch n – 1 Verlag: Buch (**ISBN**, Titel, Autor, Preis, Kategorie, ↑VID)|
|1:1-Beziehung|Einer an der Beziehung beteiligten Relation wird der Primärschlüssel der anderen Relation als Fremdschlüssel angefügt. Attribute der Beziehungsmenge werden ggf. auch dieser Relation angefügt.||
