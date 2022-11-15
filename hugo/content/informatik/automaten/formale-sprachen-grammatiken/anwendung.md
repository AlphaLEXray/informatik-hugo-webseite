+++
title = "Anwendung"
weight = 4
+++

- Parser: kontextsensitive Grammatik
- Scanner: reguläre Grammatik

# Übersetzung von Quellcode in Maschinensprache

Um einen Quellcode in eine Maschinensprache zu übersetzen, verwendet man einen Compiler, welcher mithilfe von verschiedenen Schritten mit speziellen Aufgaben, den Quelltext analysiert und umwandelt:

1. Scanner &rarr; lexikalische Analyse
2. Parser &rarr; syntaktische Analyse
3. semantische Analyse
4. Codegenerator &rarr; Synthesepahse

In der folgenden Section werden der Scanner (Schritt 1) und der Parser (Schritt 2) näher behandelt.

## Scanner

- lexikalische (zeichenweise) Analyse des Quelltextes
- wird auch Lexer genannt
- bildet die Grundlage für den Parser
- Scanner zerlegt den Text in seine Bestandteile (Token)
- arbeitet nach den Regeln der regulüren Grammatik
- erkennt das Wort einer Sprache mithilfe eines DEAs
- erstellt eine Tokenliste (indizierte Liste aller Token mit Typen und Speicheradressen)

## Parser

- syntaktische Analyse des Quellcodes &rarr; Analyse der syntaktischen Korrektheit
- Scanner bildet die Grundlage für die semantische Analyse
- übernimmt sowohl die lexikalische als auch die syntaktische Analyse, wenn man bei der Worterkennung nicht zwischen den beiden unterscheidet
- erzeugt ein Ableitungsbaum

## Zusammenarbeit zwischen Scanner und Parser

Scanner Parser können auf zwei Arten zusammenarbeiten:
1. Der Parser erhält jedes Token einzeln vom Scanner, wenn dieser mit dem Token fertig ist
2. Der Parser erhält eine Tokenliste vom Scanner, nachdem dieser mit allen Token fertig ist

Die Methode, die verwendet wird, hängt von der Komplexität der Sprache ab.

## Verwendung von Sprachen und Grammatiken

**Scanner**:  
Damit der Scanner überprüfen kann, od die Folge der Eingabezeichen des Quellcodes den Terminalen der regulären Sprache entspricht, verwendet er DEAs als Akzeptoren und arbeitet somit nach den Regeln der regulären Grammatik.

**Parser**:  
Parser hingegen verwenden eine Kontextfreie Grammatik, um zu überprüfen, ob die Folge der Token der gegebenen Grammatik entspricht

## Weitere Schritte eines Compilers

### Semantische Analyse
Bei der semantische Analyse wird überprüft, ob die Programmteile sinnvoll zusammenpassen bzw., ob das Programm Sinn ergibt. Allerdings wird hier der Quellcode nicht auf die Funktionsweise bzw. das Ergebnis überprüft.

### Codegenerator
Der Codegenerator ist der letzte Schritt im Compileprozess. Er findet statt, wenn die anderen Schritte keine Fehlermeldungen zurückgegeben haben. Hier wird alles in einem Code in der entsprechenden Maschinensprache zusammengeführt, welcher vom Prozessor aus- und lesbar ist.
