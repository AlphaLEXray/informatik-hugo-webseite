+++
title = "Abhaengigkeiten"
weight = 6
+++

|Abhängigkeiten|Bedeutung|Beispiel|
|:---|:---|:---|
|funktional abhängig|Ein Attribut B ist von einem Attribut A funktional abhängig, wenn jeder Wert von Attribut A einem eindeutigen Wert von Attribut B zugeordnet werden kann|A &rarr; B|
|voll funktional abhängig|Ein Attribut B ist von einer Attributkombination (A<sub>1</sub>, A<sub>2</sub>) voll funktional abhängig, wenn ein Attribut B funktional abhängig von der Kombination (A<sub>1</sub>, A<sub>2</sub>) ist, aber nicht schon von A<sub>1</sub> oder A<sub>2</sub>|B &rarr; (A<sub>1</sub>, A<sub>2</sub>) und B nicht &rarr; A<sub>1</sub> oder &rarr; A<sub>2</sub>|
|transitiv abhängig|Ein Attribut C ist von Attribut A transitiv abhängig, wenn es ein Attribut B gitb welches von A abhängig ist. Dabei darf A nicht funktional abhängig von B sein.|A &rarr; B &rarr; C|
