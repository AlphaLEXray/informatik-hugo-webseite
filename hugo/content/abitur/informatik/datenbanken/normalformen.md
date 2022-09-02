+++
title = "Normalformen"
weight = 5
+++

|Normalform|Bedingung|
|:---|:---|
|Erste Normalform (1NF)|ist erreicht, wenn alle Attribute einen atomaren Wertebereich haben|
|Zweite Normalform (2NF)|ist erreicht, wenn die Datenbank in der 1NF ist und zusätzlich jedes Nichtschlüsselattribut vom Primärschlüssel voll funktional abhängig ist und nicht von einem Teil der Schlüsselattribute|
|Dritte Normalform (3NF)|ist erreicht, wenn die Datenbank in der 2NF ist und es zusätzlich kein Nichtschlüsselattribut gibt, das transitiv abhängig von einem Schlüsselattribut ist. Es darf also keine funktionalen Abhängigkeiten zwischen Nichtschlüsselattributen geben|