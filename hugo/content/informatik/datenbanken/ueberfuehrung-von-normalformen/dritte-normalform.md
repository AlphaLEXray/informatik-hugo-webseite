+++
title = "Dritte Normalform"
weight = 3
+++

Befindet sich eine Beziehung in der ersten Normalform und ist jedes Nicht-Primärschlüssel-Attribut funktional vollständig vom Primärschlüssel abhängig, dann befindet sich die Beziehung in der zweiten Normalform (2NF).

|StudentNr.|Kursnummer|Kurspreis|
|:---|:---|:---|
|1|43|50|
|2|21|60|
|3|21|60|
|4|13|60|


&rarr; Kurspreis kann nicht allein den Wert von Kursnummer oder StudentNr. bestimmen

&rarr; Kurspreis kann zusammen mit StudentNr. nicht über den Wert von Kursnummer entscheiden

&rarr; Kurspreis kann zusammen mit Kursnummer nicht über den Wert von StudentNr. entscheiden

Lösung: Wir teilen das Schema in 2 Tabellen auf. 

|StudentNr.|Kursnummer| 	
|:---|:---|
|1|43|
|2|21|
|3|21|
|4|13|

|Kursnummer|Kurspreis|
|:---|:---|
|43|50|
|21|60|
|21|60|
|13|60|

Da alle nicht Schlüssel Attribute von der Kombination (Kursnummer,StudentNr.) voll funktional abhängig sind, befindet sich die Tabelle in der zweiten Normalform.

#### Überführung in die dritte Normalform:

Eine Relation befindet sich in der dritten Normalform, wenn keine transitiven Abhängigkeiten bei nicht schlüssel attributen bestehen.

Unser vorheriges Beispiel erfüllt dieses Kriterium bereits, deswegen nutzen wir ein anderes Beispiel.

|StudentNr.|Name|Bundesland|Land|Alter|
|:---|:---|:---|:---|:---|
|1|Lukas|Bayern|DE|20| 
|2|Tim|Berlin|DE|18|
|3|Kevin|Berlin|DE|21|

Das Attribut "StudentNr." ist in dieser tabelle transitiv abhängig von "Bundesland".

Lösung: Wir teilen das Schema in zwei Tabellen.

|StudentNr.|Name|Alter|Bundesland|
|:---|:---|:---|:---|
|1|Lukas|20|Bayern|
|2|Tim|18|Berlin|
|3|Kevin|21|Berlin|

|Bundesland|Land|
|:---|:---|
|Bayern|Deutschland|
|Berlin|Deutschland|

Da sich die Tabelle in der 2.NF befand, und jetzt alle transitiven abhängigkeiten aufgelöst wurden, befindet sie sich in der dritten Normalform.