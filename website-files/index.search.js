var relearn_search_index = [
  {
    "breadcrumb": "Informatik",
    "content": "Sortierverfahren Sortierfahren Definitionen Bubble Sort Der Bubble Sort Algorythmus Vergleicht jeweils zwei benachbarte Zahlen. Falls sie in der falschen Reihenfolge sind, werden sie getauscht. Dies wird so oft wiederholt, bis keine Zahlen mehr getauscht werden müssen.\nBeispiel: Erster Durchlauf:\n( 5 1 4 2 8 ) –\u003e ( 1 5 4 2 8 ), 5 ist größer als 1, daher werden die Elemente getauscht\n( 1 5 4 2 8 ) –\u003e ( 1 4 5 2 8 ), Tausch, da 5 \u003e 4 ( 1 4 5 2 8 ) –\u003e ( 1 4 2 5 8 ), Tausch, da 5 \u003e 2 ( 1 4 2 5 8 ) –\u003e ( 1 4 2 5 8 ), Kein Tausch, da die Reihenfolge hier schon richtig ist\nZweiter Durchlauf: ( 1 4 2 5 8 ) –\u003e ( 1 4 2 5 8 ) ( 1 4 2 5 8 ) –\u003e ( 1 2 4 5 8 ), Tausch, da 4 \u003e 2 ( 1 2 4 5 8 ) –\u003e ( 1 2 4 5 8 ) ( 1 2 4 5 8 ) –\u003e ( 1 2 4 5 8 ) Die Zahlenreihe ist hier zwar sortiert, jedoch weiß der Algorithmus dies nicht. Er muss erst ein weiteres mal die komplette Liste durchlaufen, ohne einen wechsel vor nehmen zu müssen.\nDritter Durchlauf: ( 1 2 4 5 8 ) –\u003e ( 1 2 4 5 8 ) ( 1 2 4 5 8 ) –\u003e ( 1 2 4 5 8 ) ( 1 2 4 5 8 ) –\u003e ( 1 2 4 5 8 ) ( 1 2 4 5 8 ) –\u003e ( 1 2 4 5 8 ) →Die Zahlenreihe ist sortiert\nSelection Sort Der Selection Sort Algorithmus durchsucht eine Zahlenliste nach der kleinsten Zahl. Diese verschiebt er an den Anfang. Die nächst kleinste Zahl wird an die zweite Position gesetzt und so weiter.\nBeispiel: // suche nach der kleinsten zahl in [0…4]\n// und Platziere sie am Index 0\n11 25 12 22 64\n// suche nach der kleinsten zahl in [1…4]\n// und Platziere sie am Index 1\n11 12 25 22 64\n// suche nach der kleinsten zahl in [2…4]\n// und Platziere sie am Index 2\n11 12 22 25 64\n// suche nach der kleinsten zahl in [3…4]\n// und Platziere sie am Index 3\n11 12 22 25 64\nInsertion Sort Beim Insertion Sort Algorithmus wird die Zahlenliste praktisch in einen sortierten und einen unsortierten Teil aufgeteilt. Die Werte aus dem unsortierten Teil werden ausgewählt und an der richtigen Stelle im sortierten Teil eingefügt.\nFunktionsweise: Iterieren Sie von Index 1 bis index n der Liste. Vergleiche hierbei das aktuelle Element (Schlüssel) mit seinem Vorgänger. Wenn das Schlüsselelement kleiner ist als sein Vorgänger, vergleiche es mit den Elementen davor. Verschiebe die höheren Elemente um eine Position nach oben, um Platz für das vertauschte Element zu schaffen. ",
    "description": "",
    "tags": null,
    "title": "Algorithmen",
    "uri": "/informatik/algorithmen.html"
  },
  {
    "breadcrumb": "Informatik \u003e Netzwerke \u003e Schichtenmodell",
    "content": " Stellt Dienste für die jeweilige Anwendung bereit Übersetzt die Daten in eine Systemunabhängige Form Verbindet jeweils die an einer Sitzung beteiligten Anwendungen ",
    "description": "",
    "tags": null,
    "title": "Anwendungsschicht",
    "uri": "/informatik/netzwerke/schichtenmodell/anwendungsschicht.html"
  },
  {
    "breadcrumb": "Informatik \u003e Netzwerke \u003e Netzwerktopologien",
    "content": "Beschreibung:\nAlle Rechner sind direkt mit dem Übertragungsmedium verbunden, dem sogenannten BUS. Dies führt dazu, dass nur ein Teilnehmer zu einem Zeitpunkt Daten versenden kann.\nVorteile Nachteile Einfache Installation Der Ausfall eines Kabels führt zum Ausfall des gesamten Netzwerks Kurze Leitungen Besitzt einen hohen Organisationsaufwand wegen der eingeschränkten Sendemöglichkeiten ",
    "description": "",
    "tags": null,
    "title": "Bus Topologie",
    "uri": "/informatik/netzwerke/netzwerktopologien/bus-topologie.html"
  },
  {
    "breadcrumb": "Informatik \u003e Verschluesselung \u003e Symmetrische Verschluesselung",
    "content": "Das Caesar-Verfahren ist ein unsicheres, symmetrisches Verschlüsselungsverfahren. Bei der Verschlüsselung wird das Alphabet um einen festen Schlüssel verschoben, wobei dieser eine Zahl von 1-25 an nehmen kann. Das Verfahren ist unsicher, da es nur 25 verschiedene Schlüssel gibt, wodurch alle möglichen Kombinationen schnell ausprobiert werden können.\nBeispiel:\nVerschlüsseln wir eine Nachricht:\n→ “TEST”\nWir erhalten:\nT → W\nE → H\nS → V\nT → W\nVerschlüsselt: WHVW\nBeim Entschlüsseln wird dieser Vorgang einfach rückwärts durchgeführt.\n",
    "description": "",
    "tags": null,
    "title": "Caesar-Verschlüsselung",
    "uri": "/informatik/verschluesselung/symmetrische-verschluesselung/ceasar.html"
  },
  {
    "breadcrumb": "Informatik \u003e Netzwerke \u003e Client Server",
    "content": "Allgemein:\nNr. Client an Server Server an Client 1 Anfrage Reaktion auf diese Anfrage (Was geschieht bei dieser Anfrage) 2 Message Was passiert beim Erhalt der Message (bei variablen, was für fälle gibt es) … … … Beispiel:\nNr. Client an Server Server an Client 1 ANMELDUNG Begrüßung, Aufforderung zur Wahl der Größe und Farbe des T-Shirts 2 HOODIE: \u003cGroesse\u003e:\u003cFarbe\u003e Größe und Farbe werden bestätigt, Preis wird übermittelt, Bestätigung wird angefordert, Größe oder Farbe ist falsch, Aufforderung für eine korrekte Eingabe 3 BESTAETIGUNG:\u003cWahl\u003e Bei \u003cWahl\u003e = ja (gleich) wird dem Kunden gedanktBei \u003cWahl\u003e = (gleich) nein wird der Kunde abgemeldetBei \u003cWahl\u003e != (ungleich) (ja oder nein), Aufforderung für eine korrekte Eingabe 4 ABMELDEN Der Kunde wird verabschiedet 5 Sonstige Nachricht Unbekannte Anweisung, Aufforderung für eine korrekte Eingabe ",
    "description": "",
    "tags": null,
    "title": "Client Server Modellierung",
    "uri": "/informatik/netzwerke/client-server/client-server-modellierung.html"
  },
  {
    "breadcrumb": "Informatik \u003e Datenbanken \u003e Ueberfuehrung Von Normalformen",
    "content": "Alle Werte müsen atomar sein, das heißt, dass sie nicht weiter zerlegbar sind. Beispiel:\nName Telefon Nummer Kevin 0217817563, 021738498 Name Telefon Nummer Kevin 0217817563 Kevin 021738498 Die Tabelle befindet sich nun in der ersten Normalform, da die Attribute nicht weiter aufgebrochen werden können.\n",
    "description": "",
    "tags": null,
    "title": "Erste Normalform",
    "uri": "/informatik/datenbanken/ueberfuehrung-von-normalformen/erste-normalform.html"
  },
  {
    "breadcrumb": "Informatik \u003e Datenbanken",
    "content": " Fachwörter Definition Primärschlüssel eine minimale Menge von Attributen, die jeden möglichen Datensatz eindeutig identifiziert Redundanz wenn Daten mehrmals gespeichert werden. Sie können weggelassen werden, ohne dass Informationen verloren gehen Anomalien Probleme und Fehler, die bei Operationen auf den Datensätzen einer Datenbank entstehen können. Es werden Änderungs-, Einfüge- und Löschanomalien unterschieden Inkonsistenzen Widersprüche im Datenbestand einer Datenbank. Sie können durch Anomalien hervorgerufen werden ",
    "description": "",
    "tags": null,
    "title": "Fachwoerter",
    "uri": "/informatik/datenbanken/fachwoerter.html"
  },
  {
    "breadcrumb": "Informatik \u003e Verschluesselung \u003e Grundlagen",
    "content": " Begriff Definition Klartext (Plaintext) Beschreibt eine unverschlüsselte Nachricht Klartextalphabet Zeichen, aus denen der Klartext bestehen kann Geheimtext (Ciphertext) Beschreibt eine verschlüsselte Nachricht Geheimtextalphabet Zeichen, aus denen der Geheimtext bestehen kann Verschlüsseln (Chiffrieren) Vorgang, um einen Klartext durch ein Verfahren in einen Geheimtext umzuwandeln Entschlüsseln (Dechiffriern) Vorgang, um einen Geheimtext in einen Klartext umzuwandeln Schlüssel nformation oder Algorithmus, welcher angibt, wie das Verschlüsselungsverfahren in einer Situation angewendet werden soll. Kryptographie Die Wissenschaft der Entwicklung von Verschlüsselungsvervahren, sowie der Ver- und Entschlüsselung von Daten Kryptoanalyse Die Wissenschaft des Brechens von Verschlüsselungsverfahren Kryptologie Zusammenfassung von Kryptoanalyse und Kryptographie ",
    "description": "",
    "tags": null,
    "title": "Grundbegriffe",
    "uri": "/informatik/verschluesselung/grundlagen/grundbegriffe.html"
  },
  {
    "breadcrumb": "Informatik \u003e Verschluesselung",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Grundlagen",
    "uri": "/informatik/verschluesselung/grundlagen.html"
  },
  {
    "breadcrumb": "Informatik \u003e Datenschutz",
    "content": " Verbot mit Erlaubnisvorbehalt Die Verarbeitung, d. h. zum Beispiel die Erhebung, Speicherung, Weitergabe oder allgemeine Verwendung personenbezogener Daten ist grundsätzlich verboten – es sei denn, die betroffene Person hat der Verarbeitung für einen konkreten Zweck zugestimmt oder es gibt eine explizite gesetzliche Regelung, die eine Verarbeitung für einen konkreten Zweck erlaubt. Datenminimierung Die Verarbeitung personenbezogener Daten ist an dem Ziel auszurichten, so wenig personenbezogene Daten wie möglich zu verarbeiten. Insbesondere sind personenbezogene Daten nach Möglichkeit zu anonymisieren bzw. zu pseudonymisieren. Sie sind zu löschen, sobald sie nicht mehr benötigt werden. Zweckbindung Personenbezogene Daten dürfen nur zu einem konkreten Zweck erhoben und verarbeitet werden. Eine weitergehende Verarbeitung zu einem anderen Zweck ist in der Regel nicht erlaubt. Transparenz Werden personenbezogene Daten verarbeitet, so ist die betroffene Person, sofern sie nicht bereits auf andere Weise Kenntnis erlangt hat, darüber zu informieren. Dazu gehören unter anderem Informationen zum Zweck der Verarbeitung, zur verarbeitenden Stelle bzw. Institution und zu der Frage, wie lange die Daten gespeichert werden. Ausnahmen gibt es z. B. im Bereich der Strafverfolgung. Erforderlichkeit Personenbezogene Daten dürfen nur dann verarbeitet werden, wenn sie für den Zweck, zu dem sie verarbeitet werden, wirklich benötigt werden oder die Aufgabenerfüllung der verantwortlichen Stelle zumindest erheblich erleichtert wird. ",
    "description": "",
    "tags": null,
    "title": "Grundprinzipien",
    "uri": "/informatik/datenschutz/grundprinzipien.html"
  },
  {
    "breadcrumb": "",
    "content": "Dies ist eine Sammlung von Lernmaterialen für den Informatikunterricht als Vorbereitung für das Abitur (in NRW).\nThis is a collection of computer science materials for the German Abitur (Majors/A-Levels).\nVorgaben Abitur 2022 NRW Link: https://www.standardsicherung.schulministerium.nrw.de/cms/zentralabitur-gost/faecher/getfile.php?file=5024#page=4\nMaterialien zu den zentralen Abiturprüfungen im Fach Informatik Link: https://www.schulentwicklung.nrw.de/lehrplaene/upload/klp_SII/if/Dokumentation_ZA-IF_GK-LK_ab_2018_2021_12_22.pdf\n",
    "description": "",
    "tags": null,
    "title": "Informatik",
    "uri": "/informatik.html"
  },
  {
    "breadcrumb": "Informatik \u003e Datenstrukturen",
    "content": "Queue Aufbau Methoden enqueue() Hängt ein Objekt am Anfang der Schlange an dequeue() Entfernt das Objekt am Ende der Schlange getContent() Gibt das Inhaltsobjekt am Ende der Schlange wieder isEmpty() Gibt true zurück wenn die Schlange leer ist List Aufbau Methoden isEmpty() Gibt true zurück wenn die Liste leer ist hasAccess() Gibt true zurück falls der Pointer auf ein valides Objekt zeigt next() Bewegt den Pointer eine Information weiter toFirst() Setzt den Pointer zurück auf die erste information in der Liste toLast() Setzt den Pointer auf das letzte Element in der Liste getContent() Gibt das aktuelle inhaltsobjekt zurück setContent(pContent) setzt den aktuellen Inhalt auf den Parameter insert(pContent) fügt ein Objekt nach dem Pointer ein append(pContent) fügt am ende der Liste ein Objekt hinzu concat() setzt zwei Listen zu einer zusammen remove() entfernt das aktuelle Objekt aus der Liste Stack Aufbau Methoden top() Gibt das Objekt das oben auf dem Stapel liegt zurück push() Legt ein Objekt oben auf den Stapel pop() Entfernt das oberste Objekt isEmpty() gibt true zurück, falls der Stapel keine Inhaltsobjekte hat ",
    "description": "",
    "tags": null,
    "title": "Lineare Datenstrukturen",
    "uri": "/informatik/datenstrukturen/lineare-datenstrukturen.html"
  },
  {
    "breadcrumb": "Informatik \u003e Automaten",
    "content": "endlich: Eingabealphabet, (Ausgabealphabet), Zustände sind endlich\nA = (Q, Σ, δ, Ω, λ,s) Q: nichtleere, endliche Menge von Zuständen Σ: nichtleeres, endliches Eingabealphabet Ω: nichtleeres, endliches Ausgabealphabet δ: QxΣ → Q Übergangsfunktion, die jeder Kombination (Zustand, Eingabezeichen) einen Nachfolgezustand zuordnet λ: QxΣ → Ω Ausgabefunktion, die jeder Kombination (Zustand, Eingabezeichen) eine Ausgabe zuordnet s∈Q: Startzustand Beispiel: A = (Q, Σ,Ω, δ, λ,s) mit:\nQ = {q0, q1}\nq0: zu, q1: offen Σ = {O, S}\nO: öffnen, S: schließen Ω = {GO, GS, N}\nGO: “Tür wird geöffnet”, GS: “Tür wird geschlossen”, N: keine Ausgabe s = q0\nδ:\nO S q0 q1 q0 q1 q1 q0 λ:\nO S q0 GO N q1 N GS oder als Übergangsgraph:\n",
    "description": "",
    "tags": null,
    "title": "Mealy Automat",
    "uri": "/informatik/automaten/mealy-automat.html"
  },
  {
    "breadcrumb": "Informatik \u003e Datenbanken \u003e Er Modell",
    "content": " Begriff Bedeutung Entität Objekt aus der Realsituation, über das Informationen gespeichert werden Entitätsmenge Zusammenfassung mehrerer gleichartiger Entitäten Attribut Eigenschaft aller Entitäten einer Entitätsmenge Beziehungen Zusammenhang von Entitäten untereinander Beziehungsmengen Zusammenfassung von gleichartigen Beziehungen Kardinalitäten beschreiben, wie viele Entitäten einer Entitätsmenge an einer bestimmten Beziehung beteiligt sein können oder müssen. Es wird zwischen den Kardinalitäten -1 (kein oder ein) und -m bzw. n (kein, ein oder mehrere) unterschieden. Somit sind drei Beziehungsarten möglich (1:1, 1:n und m:n) ",
    "description": "",
    "tags": null,
    "title": "Modellierung",
    "uri": "/informatik/datenbanken/er-modell/modellierung.html"
  },
  {
    "breadcrumb": "Informatik \u003e Netzwerke",
    "content": " Quelle: https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/NetworkTopologies_%28de%29.svg/640px-NetworkTopologies_%28de%29.svg.png\n",
    "description": "",
    "tags": null,
    "title": "Netzwerktopologien",
    "uri": "/informatik/netzwerke/netzwerktopologien.html"
  },
  {
    "breadcrumb": "Informatik \u003e Datenstrukturen",
    "content": "Um Graphen (und auch Baeume) zu erstellen gibt es eine gute Webseite:\nhttps://csacademy.com/app/graph_editor/\nGraphen Definition: Ein Graph besteht aus Knoten die mit Kanten verbunden sind. Zudem können Kanten gewichtet werden. Ein praktisches Beispiel eines Graphen ist das Internet, wo viele veschiedene Computer (Knoten) mit Kabeln (Kanten) verbunden sind.\nEs gibt verschiedene Arten von Graphen die nicht exlusiv zueinander sind.\nDazu gehören:\nungerichtete/gerichtete Graphen ungewichtete/gewichtete Graphen Beispiel eines ungerichteten Graphen:\nBeispiel eines gerichteten Graphen:\nBäume Begriffe: Baumstruktur: Eine hierarchische Struktur, die aus Knoten und Kanten besteht Teilbaum: Wurzel: Einziger Knoten ohne Vorgänger Pfad: Der Weg über Kanten den man gehen muss, um von einem Knoten zu einem anderen zu gelangen Tiefe: Anzahl der Kanten auf dem Pfad von der Wurzel bis zu diesem Knoten. Grad: Der (Verzweigungs-) Grad eines Baumes bezeichnet die maximale Anzahl der Nachfolger, die ein Knoten dieses Baumes haben kann. Kriterien eines binären Baums: es gibt nur genau eine Wurzel. jeder Knoten außer der Wurzel hat genau einen Vaterknoten. Die Wurzel ist der Vorfahre jedes Knotens. Jeder Knoten hat höchstens zwei Kinderknoten, ein linkes und ein rechtes. Kriterien eines binären Suchbaums Traversierungsmethoden: Preorder Traversierung:\nWurzel, linker Teilbaum, rechter Teilbaum\nInorder Traversierung:\nlinker Teilbaum, Wurzel, rechter Teilbaum\nPostorder Traversierung:\nlinker Teilbaum, rechter Teilbaum, Wurzel\n",
    "description": "",
    "tags": null,
    "title": "Nichtlineare Datenstrukturen",
    "uri": "/informatik/datenstrukturen/nichtlineare-datenstrukturen.html"
  },
  {
    "breadcrumb": "Informatik \u003e Netzwerke \u003e Pruefverfahren",
    "content": "Definition:\nAn die Bitfolge wird ein Prüfbit angehängt, durch das die Anzahl der Einsen in der Bitfolge gerade wird.\nBeispiel: Bitfolge: 10010111 Berechnung: Anzahl der Einsen ist ungerade Prüfbit: 1 ",
    "description": "",
    "tags": null,
    "title": "Paritaetsbit",
    "uri": "/informatik/netzwerke/pruefverfahren/paritaetsbit.html"
  },
  {
    "breadcrumb": "Informatik \u003e Verschluesselung \u003e Asymmetrische Verschluesselung",
    "content": "privater Schlüssel: (d, N)\nBeispiel:\t(11, 14)\nöffentlicher Schlüssel: (e, N)\nBeispiel: (5, 14)\nNachricht: m\nBeispiel: c (3)\nVerschlüsseln m^e (als Zahl) mod N\nBeispiel:\n3 mod 14 = 5 (e) Cyphertext (c) = 5 (e)\nEntschlüsseln c^d (als Zahl) mod N\nBeispiel:\n5 mod 15 = 3 (c)\nRSA-Schlüsselgeneration Um eine Nachricht mit dem RSA-Verfahren zu verschlüsseln braucht man einen privaten und einen öffentlichen Schlüssel. Dieser wird generell in 5 Schritten erzeugt.\nSchritt 1 – p und q\nWähle zwei zufällige möglichst große Primzahlen aus. Diese nennen wir p und q\nSchritt 2 – N\nNun ermittlen wir die Zahl N, indem wir p mit q multiplizieren.\nSchritt 3 – r\nAls nächstes wird nun r mit ermittelt, indem p und q jeweils mit 1 subtrahiert werden und danach multipliziert werden.\nSchritt 4 – e\nWähle eine zufällige Zahl e, die keinen gemeinsamen Teiler mit r hat.\nSchritt 5 – d\nAls letzes wird die Zahl d so gewählt, dass e*d mod r = 1 gilt.\nNun haben wir alle nötigen Komponenten, um unsere privaten und öffentlichen Schlüssel zu erstellen.\nDiese sehen wie folgt aus:\n(e, N) → öffentlicher Schlüssel (d, N) → privater Schlüssel\n",
    "description": "",
    "tags": null,
    "title": "RSA-Verschlüsselung",
    "uri": "/informatik/verschluesselung/asymmetrische-verschluesselung/rsa.html"
  },
  {
    "breadcrumb": "Informatik \u003e Algorithmen",
    "content": "/** * Beschreiben Sie hier die Klasse SortierAlgorythmen. */ public class SortierAlgorythmen { //Initialisieren eines leeren Integerarrays mit dem Namen zahlen als Attribut/Globalvariabel int[] zahlen; /** * Konstruktor für Objekte der Klasse SortierAlgorythmen */ public SortierAlgorythmen() { //Das Array bekommt Werte zugewiesen zahlen = new int[]{24, 45, 106, 2, 321, 486, 3, 2345, 5543, 4456, 455}; } /** * Diese Methode führt den Bubblesortalgorithmus auf dem Array zahlen aus */ public void bubbleSort() { //Die Variabel n gleich die Länge des Arrays zahlen setzen int n = zahlen.length; //Temporäre Variabel namens temp erstellen um Integers zwischenzuspeichern int temp; //Solange die Länge des Arrays größer als 1 ist while (n \u003e 1){ //Für n - 1 for(int i=0; i\u003cn-1; i++){ //Überprüft ob der Wert der aktuellen Stelle größer ist als der nächste Wert if (zahlen[i] \u003e zahlen[i +1]) { //Ist dies der Fall werden diese beiden Getauscht //Die aktuelle Zahl (also die größere Zahl) wird in der Variabel temp zwischengespeichert temp = zahlen[i]; //Die aktuelle Zahl im Array wird gleich der nächsten Stelle des Arrays gesetzt (also der kleinereren Zahl) zahlen[i] = zahlen[i+1]; //Die nächste Zahl wird der Variabel temp gesetzt in der die größere Zahl gespeichert wurde zahlen[i+1] = temp; //Somit wurden die beiden Zahlen im Array getauscht System.out.println(zahlen[i]); } } //n wird um eins reduziert, da wieder eine Zahl sortiert wurde n = n-1; } //Das ganze Array wird durchgegangen und ausgegeben for (int i = 0; i\u003c zahlen.length; i++) { System.out.println(zahlen[i]); } } /** * Diese Methode fürht den Selectionsort auf dem Array Zahlen aus */ public void selectionSort() { //Die Integervariabel links wird als 0 initialisiert int links = 0; //Die Variabel n wird der Länge des Arrays zahlen gesetzt int n = zahlen.length; //Instanzierung von der Variabel temp int temp; while (links \u003c n) { int min = links; for(int i= links+1; i\u003czahlen.length; i++) { if (zahlen[i] \u003c zahlen[min]) { min = i; } } temp = zahlen[min]; zahlen[min] = zahlen[links]; zahlen[links] = temp; links = links+1; } for (int i = 0; i\u003c zahlen.length; i++) { System.out.println(zahlen[i]); } } }",
    "description": "",
    "tags": null,
    "title": "Sortieralgorithmen implementation",
    "uri": "/informatik/algorithmen/sortieralgorithmen.html"
  },
  {
    "breadcrumb": "Informatik \u003e Automaten \u003e Formale Sprachen Grammatiken",
    "content": "Regelsystem zur Kombination elementarer Zeichen zu zusammengesetzten Zeichen, z.B.: Syntaxregeln einer Grammatik, etc.\n",
    "description": "",
    "tags": null,
    "title": "Syntax",
    "uri": "/informatik/automaten/formale-sprachen-grammatiken/syntax.html"
  },
  {
    "breadcrumb": "Informatik \u003e Datenbanken \u003e Operatoren",
    "content": " Symbol Operation = gleich \u003c\u003e ungleich \u003e größer \u003c kleiner \u003e= größer gleich \u003c= kleiner gleich LIKE gibt Inhalte die eine bestimmte Zeichenfolge beinhaltet zurück (’%…%') BETWEEN gibt nur die Inhalte zwischen zwei Werten zurück IN gitb die spezifizierten Werte zurück IS NULL Überprüft, ob das Element vorhanden ist ",
    "description": "",
    "tags": null,
    "title": "Vergleichs Operatoren",
    "uri": "/informatik/datenbanken/operatoren/vergleichs-operatoren.html"
  },
  {
    "breadcrumb": "Informatik \u003e Datenbanken \u003e Operatoren",
    "content": " Symbol Operation + addition - subtration * multiplikation / division ",
    "description": "",
    "tags": null,
    "title": "Arithmetische Operatoren",
    "uri": "/informatik/datenbanken/operatoren/arithmetische-operatoren.html"
  },
  {
    "breadcrumb": "Informatik \u003e Netzwerke \u003e Client Server",
    "content": "Kommunikation zwischen Client und Server:\nClient sendet Server sendet Anfrage → ← Antwort Anfrage → ← … ",
    "description": "",
    "tags": null,
    "title": "Client Server Kommunikation",
    "uri": "/informatik/netzwerke/client-server/client-server-kommunikation.html"
  },
  {
    "breadcrumb": "Informatik",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Datenstrukturen",
    "uri": "/informatik/datenstrukturen.html"
  },
  {
    "breadcrumb": "Informatik \u003e Automaten",
    "content": "deterministisch: für jeden Zustand gibt es für jedes Eingabezeichen nur genau einen Folgezustand\nA = (Q, Σ, F, δ, s) Q: nichtleere, endliche Menge von Zuständen Σ: nichtleeres, endliches Eingabealphabet F⊆Q Menge der akzeptierenden Zustände δ: QxΣ → Q Übergangsfunktion, die jeder Kombination (Zustand, Eingabezeichen) einen Nachfolgezustand zuordnet s∈Q Startzustand Beispiel:\nA = (Q, Σ, F, δ, s) Q = {q0, q1} Σ = {0, 1} F = {q0, q3} s = q0 δ = 0 1 q0 q3 q2 q1 q3 q2 q2 q3 q1 q3 q2 q3 oder\nBegriffe Alphabet: Ein Alphabet Σ ist eine endliche, nicht leere Menge, die Symbole verschiedener Art enthalten kann. Buchstabe: Ein Buchstabe ist ein Element eines Alphabets. Wort: Ein Wort über einem Alphabet Σ ist eine endliche Folge von Buchstaben aus Σ. vom Automaten akzeptierte Sprache: Die Menge der Wörter, die von einem Automaten akzeptiert werden. Verhalten eines DEA DEA erhält Eingabewort w=w1…wn er startet in q0 und liest in jedem Schritt genau ein Eingabezeichen er stoppt, sobald die Eingabe vollständig gelesen wurde befindet er sich dann in einem akzeptierenden Zustand, dann gehört das Wort zur Sprache des Automaten L(A) Zeigen, dass ein Wort zur Sprache eines DEA gehört (siehe Beispiel-DEA) Zustandsfolgen für die Eingabewörter:\n1011 q0 → q2 → q3 → q3 → q3; Das Wort wird akzeptiert, da q3 ein akzeptierender Zustand ist. (Auf den Pfeilen steht das gelesene Symbol) 111 q0 → q2 → q1 → q2; Das Wort wird nicht akzeptiert, da q2 kein akzeptierender Zustand ist. Sprache eines Automaten Die Sprache eines DEA A besteht aus allen Eingabewörtern, die von A akzeptiert werden.\n",
    "description": "",
    "tags": null,
    "title": "Dea",
    "uri": "/informatik/automaten/dea.html"
  },
  {
    "breadcrumb": "Informatik \u003e Automaten \u003e Formale Sprachen Grammatiken",
    "content": "Eine Formale Sprache L über einem Alphabet Σ ist eine Teilmenge aller möglichen Verknüpfungen des Alphabets\nZusammenhang zwischen Automaten und Grammatiken Automaten können die Wörter einer Sprache erkennen. Grammatiken geben die Struktur der Wörter einer Sprache vor. Mittels Produktionsregeln lassen sich Wörter der Sprache erzeugen.\n",
    "description": "",
    "tags": null,
    "title": "Formale Sprach",
    "uri": "/informatik/automaten/formale-sprachen-grammatiken/formale-sprach.html"
  },
  {
    "breadcrumb": "Informatik \u003e Verschluesselung \u003e Grundlagen",
    "content": "Primzahlen Eine Primzahl ist eine Zahl, die größer als eins ist und nur durch sich selbst und eins teilbar ist.\nPrimfaktorzerlegung Jede natürliche Zahl die größer als eins ist und selbst keine Primzahl ist, lässt sich als ein Produkt von mindestens zwei Primzahlen schreiben.\nBeispiel:\n60= 230 = 2215= 2²3*5\nTeilbarkeit Eine ganze Zahl a ist durch eine andere ganze Zahl b teilbar, wenn bei der Division a:b kein Rest entsteht.\nBeispiel:\nTeilbar: 8:4 = 2 Nicht Teilbar (mit Rest): 8:7= 1 r 1\nTeiler einer Zahl: ggT (größter gemeinsamer Teiler)\nBeispiel:\ngemeinsame Teiler von 12 und 18: 1,2,3,6 größter gemeinsame Teiler von 12 und 18: ggT(12,18) = 6\nDie Modulo-Funktion a mod m ist der Rest, den eine Zahl bei der Division durch eine Zahl lässt. Es gibt also eine Zahl k mit a=k*m+r Der Rest r kann also nur die Werte 0 bis m-1 annehmen. Beispiel:\n19 mod 5 = 4, da 19:5 = 3 (Rest 4)\nKongruenzen Sei m \u003e 1 eine natürliche Zahl. Lassen zwei ganze Zahlen a und b bei der Division durch m den gleichen Rest, dann nennt man a und b kongurent modulo m und schreibt dafür kurz: a≡b mod m\nBeispiel:\n30≡4mod13, da 30mod13=4 und 4mod13=4\nRechengesetze für Modulo-Funktionen (x+y) mod m = ((x mod m) + (y mod m)) mod m (x*y) mod m = ((y mod m) * (y mod m)) mod m Beispiel:\n23 mod 5 = (12+11) mod 5 = ((12 mod 5) + (11 mod 5)) mod 5 = (2+1) mod 5 = 5 mod 5\n",
    "description": "",
    "tags": null,
    "title": "Mathematische Grundlagen der Kryptografie",
    "uri": "/informatik/verschluesselung/grundlagen/mathe-grundlagen-kryptografie.html"
  },
  {
    "breadcrumb": "Informatik \u003e Netzwerke \u003e Pruefverfahren",
    "content": "Definition:\nEs werden alle Bits der Bitfolge addiert. Die Summe wird modulo n gerechnet, wobei durch n die Länge der Prüfsumme bestimmt wird.\nBeispiel: Bitfolge: 10110111 Berechnung: (1+0+1+1+0+1+1+1)mod4 = 1 r 2 Prüfsumme: 10 (Rest 2) ",
    "description": "",
    "tags": null,
    "title": "Pruefsumme",
    "uri": "/informatik/netzwerke/pruefverfahren/pruefsumme.html"
  },
  {
    "breadcrumb": "Informatik \u003e Netzwerke",
    "content": "Prüfverfahren\n",
    "description": "",
    "tags": null,
    "title": "Pruefverfahren",
    "uri": "/informatik/netzwerke/pruefverfahren.html"
  },
  {
    "breadcrumb": "Informatik \u003e Netzwerke \u003e Netzwerktopologien",
    "content": "Beschreibung:\nJeder Computer im Netzwerk ist mit genau zwei weiteren verbunden. Die Daten werden vom Sender über die anderen Computer an den Empfänger geleitet.\nVorteile Nachteile Verteilte Steuerung mit gleichberechtigten Teilnehmern Es gibt nur einen Alternativweg bei einer Störung Große Netzwerkausdehnung wegen der Signalverstärkung der einzelnen Computer möglich Hoher Verkabelungsaufwand ",
    "description": "",
    "tags": null,
    "title": "Ring Topologie",
    "uri": "/informatik/netzwerke/netzwerktopologien/ring-topologie.html"
  },
  {
    "breadcrumb": "Informatik \u003e Datenschutz",
    "content": "Es gibt 7 Schutzziele in der Informationssicherheit. Diese sind in keiner besonderen Reihenfolge:\nVertraulichkeit\nDie Information einer Nachricht ist nur den befugten Personen zugänglich. Integrität\nDer Inahlt der Nachricht kann entweder nicht bearbeitet werden oder nicht unbemerkt bearbeitet werden. Verfügbarkeit\nEin Dienst muss zur vereinbarten Zeit verfügbar sein. Die Verfügbarkeit setzt sich aus der eigentlichen Aktivzeit geteilt durch die vereinbarte Zeit zusammen. Authentizität\nBeinhaltet, dass der aktuelle Kommunikationsparnter auch der gewollte bzw. richtige Kommunikationspartner ist. Man kann dies auch als Identitätsnachweis nennen. Nichtabstreitbarkeit\nDer Urheber einer Nachricht kann dies nicht gegenüber anderer Personen abstreiten. Zurechenbarkeit\nEine Nachricht soll einem Nutzer zugewiesen werden können. Privatsphäre\nDie privaten Nachrichten von Nutzern sollen nicht veröffentlicht werden. Dabei gibt es die Anonymität wo der Nutzer nicht bekannt ist und die Pseudonymität wo ein Nutzer identifiziert werden kann aber nicht mit einer echten Person in verbindung gebracht werden kann. Quelle: https://www.kryptowissen.de/schutzziele.php\n",
    "description": "",
    "tags": null,
    "title": "Schutzziele in der Informationssicherheit",
    "uri": "/informatik/datenschutz/schutzziele.html"
  },
  {
    "breadcrumb": "Informatik \u003e Datenbanken",
    "content": " Befehl Nutzen SELECT(DISTINCT)…FROM WHERE Bedingung GROUP BY Gruppiert nach dem angegebenen Attribut ORDER BY Ordnet nach einem bestimmten Spalte (wird als Zahl angegeben) ASC Ordnet die Ausgabe vom kleinsten zum größten Element DESC Ordnet die Ausgabe von größtem zum kleinsten Element LEFT JOIN…ON Verbindet zwei Tabellen, wobei die linke Tabelle die Primärtabelle ist, wobei ON den Primärschlüssel definiert RIGHT JOIN…ON Verbindet zwei Tabellen, wobei die rechte Tabelle die Primärtabelle ist, wobei ON den Primärschlüssel definiert INNER JOIN…ON Verbindet alle Zeilen, die in beiden Tabellen vorhanden sind JOIN…ON Ist eine andere Schreibweise zum INNER JOIN UNION Vereinigt die Zeilen aus zwei Tabellen mit den gleichen Attributen in einer Tabelle AS bennent eine Spalte in der Ergebnistabelle NULL ",
    "description": "",
    "tags": null,
    "title": "Sql Befehle",
    "uri": "/informatik/datenbanken/sql-befehle.html"
  },
  {
    "breadcrumb": "Informatik \u003e Verschluesselung",
    "content": "Die symmetrische Verschlüsselung benutzt nur einen Schlüssel, um die Nachricht zu ver- und entschlüsseln. Dies hat den Nachteil, dass dieser Schlüssel geheim gehalten werden muss und deshalb über ein sicheres Übertragungsmedium mitgeteilt werden muss. Es gibt aber auch Verfahren, mit denen man einen symmetrischen Schlüssel über eine nicht sichere Verbindung austauschen kann. Dies ist der Diffie-Hellman-Schlüsselaustausch.\n",
    "description": "",
    "tags": null,
    "title": "Symmetrische Verschluesselung",
    "uri": "/informatik/verschluesselung/symmetrische-verschluesselung.html"
  },
  {
    "breadcrumb": "Informatik \u003e Netzwerke \u003e Schichtenmodell",
    "content": " Stellt eine zuverlässige Verbindung zwischen den Computern her ",
    "description": "",
    "tags": null,
    "title": "Transportschicht",
    "uri": "/informatik/netzwerke/schichtenmodell/transportschicht.html"
  },
  {
    "breadcrumb": "Informatik \u003e Datenbanken \u003e Er Modell",
    "content": " Begriff Bedeutung Beispiel Relationsschema Jede Entitätsmenge wird im relationalen Modell einer eigenständigen Relation überführt Verlag(VID, Name, Sitz, Ansprechpartner) Fremdschlüssel Primärschlüssel der in einer Relation vorkommt und mit einem senkreckten Pfeil gekennzeichnet wird m:n-Beziehung Wird im relationalem Modell (Relationsschema) in eine eigene Relation überführt. Attribute sind die Primärschlüssel der beiden an der Beziehung beteiligten Entitätsmengen (als Fremdschlüssel), die gemeinsam den Primärschlüssel der Beziehungstabelle bilden, sowie ggf. Attribute der Beziehungsmenge 1:n-Beziehung Die Relation mit der Kardinalität n wird der Primärschlüssel der Relation mit der Kardinalität 1 als Fremdschlüssel angefügt. Attribute der Beziehungsmenge werden ggf. auch dieser Relation hinzugefügt Jedes Buch kann nur von einem Verlag herausgebracht werden aber ein Verlag kann mehrere Bücher herausbringen: Buch n – 1 Verlag: Buch (ISBN, Titel, Autor, Preis, Kategorie, ↑VID) 1:1-Beziehung Einer an der Beziehung beteiligten Relation wird der Primärschlüssel der anderen Relation als Fremdschlüssel angefügt. Attribute der Beziehungsmenge werden ggf. auch dieser Relation angefügt. ",
    "description": "",
    "tags": null,
    "title": "Umsetzung",
    "uri": "/informatik/datenbanken/er-modell/umsetzung.html"
  },
  {
    "breadcrumb": "Informatik \u003e Verschluesselung \u003e Symmetrische Verschluesselung",
    "content": "Das VIGENÈRE-Verfahren ist ein unsicheres Verschlüsselungsverfahren, welches durch ein Schlüsselwort den Quellbuchstaben durch ein sich veränderndes Alphabet ein anderen Wert zu ordnet.\nBeispiel:\nNachricht: Test Schlüsselwort: Test Im Vigenere Quadrat:\n„Test“ mit dem Schlüssel „Test“ ergibt: MIKM\nBeim Entschlüsseln wird dieses Verfahren einfach rückwärts angewandt.\n",
    "description": "",
    "tags": null,
    "title": "Vigenere",
    "uri": "/informatik/verschluesselung/symmetrische-verschluesselung/vigenere.html"
  },
  {
    "breadcrumb": "Informatik \u003e Datenbanken \u003e Ueberfuehrung Von Normalformen",
    "content": "Befindet sich eine Beziehung in der ersten Normalform und ist jedes Nicht-Primärschlüssel-Attribut funktional vollständig vom Primärschlüssel abhängig, dann befindet sich die Beziehung in der zweiten Normalform (2NF).\nStudentNr. Kursnummer Kurspreis 1 43 50 2 21 60 3 21 60 4 13 60 → Kurspreis kann nicht allein den Wert von Kursnummer oder StudentNr. bestimmen\n→ Kurspreis kann zusammen mit StudentNr. nicht über den Wert von Kursnummer entscheiden\n→ Kurspreis kann zusammen mit Kursnummer nicht über den Wert von StudentNr. entscheiden\nLösung: Wir teilen das Schema in 2 Tabellen auf.\nStudentNr. Kursnummer 1 43 2 21 3 21 4 13 Kursnummer Kurspreis 43 50 21 60 21 60 13 60 Da alle nicht Schlüssel Attribute von der Kombination (Kursnummer,StudentNr.) voll funktional abhängig sind, befindet sich die Tabelle in der zweiten Normalform.\n",
    "description": "",
    "tags": null,
    "title": "Zweite Normalform",
    "uri": "/informatik/datenbanken/ueberfuehrung-von-normalformen/zweite-normalform.html"
  },
  {
    "breadcrumb": "Informatik \u003e Verschluesselung",
    "content": "Die asymmetrische Verschlüsselung basiert, anders als die symmetrische Verschlüsselung, auf zwei verschiedenen Schlüsseln. Diese sind der öffentliche und der private Schlüssel. Der öffentliche Schlüssel wird an die Kommunikationspartner verschickt. Diese verschlüsseln ihre Nachrichten mit diesem öffentlichem Schlüssel. Wenn eine Nachricht (oder Datei) mit einem öffentlichen Schlüssel verschlüsselt wurde, kann sie nur mithilfe des privaten Schlüssels entschlüsselt werden. Der private Schlüssel soll privat gehalten werden, weshalb er (idealerweise) auf dem Gerät bleiben sollte. Eine Kommunikation zwischen zwei Kommunikationspartnern könnte wie folgt ablaufen:\nPartner0 sendet Partner1 seinen öffentlichen Schlüssel Partner1 verschlüsselt seine Nachricht an Partner0 mit dessen öffentlichen Schlüssel den er von ihm bekommen hat Partner0 erhält die Nachricht von Partner1 und entschlüsselt diese mit seinem privaten Schlüssel. Nachdem Partner0 die Nachricht enthalten hat, kann er noch eine Nachricht als Bestätigung schicken. Diese wird mit dem private Schlüssel verschlüsselt und kann mit dem öffentlichen Schlüssel entschlüsselt werden. Somit bestätigt Partner0, dass er wirklich er selbst ist da er den privaten Schlüssel besitzt. Dies nennt man auch Signatur und sie enthält keine sensitiven Daten. ",
    "description": "",
    "tags": null,
    "title": "Asymmetrische Verschluesselung",
    "uri": "/informatik/verschluesselung/asymmetrische-verschluesselung.html"
  },
  {
    "breadcrumb": "Informatik",
    "content": "Endliche Automaten Anmerkung: Bei den Graphen werden die Fehlerzustände, der Übersichtlichkeit halber, nicht mitgezeichnet.\n",
    "description": "",
    "tags": null,
    "title": "Automaten",
    "uri": "/informatik/automaten.html"
  },
  {
    "breadcrumb": "Informatik \u003e Netzwerke \u003e Client Server",
    "content": "Um durch die Abiturklassen eine Verbindung auf zu bauen, werden einige Methoden und Vererbungen benötigt.* Der Client muss hier bei diese Methode implementieren: +ProcessMessage(pMessage: String): void Hierbei ist auch wichtig, dass die jeweilige Client Klasse von der Abiturklasse „Client“ erbt (extends). Hierbei muss auch darauf geachtet werden, dass ein Client Objekt durch super mit einer Server IP sowie Port erstellt wird.\nDer Server muss hierbei folgende Methoden Implementieren:\n+processNewConnection(pClientIP: String, pClientPort: int): void +processMessage(pClientIP: String, pClientPort: int, pMessage: String): void +processClosingConnection(pClientIP: String, pClientPort: int): voidEs ist darauf zu achten, dass die implementierende Klasse von der Abiturklasse „Server“ erbt (extends), sowie durch einen „super()“ Aufruf eine „Server“ Klasse erstellt.\nBeispiel für eine Server-Implementierung\npublic class ShopServer extends Server { public ShopServer(int pPortnummer) { super(pPortnummer); } public void processNewConnection(String pClientIP, int pClientPort){ } public void processMessage(String pClientIP, int pClientPort, String pMessage){ } public void processClosingConnection(String pClientIP, int pClientPort){ } }",
    "description": "",
    "tags": null,
    "title": "Client Server Implementierung",
    "uri": "/informatik/netzwerke/client-server/client-server-implementierung.html"
  },
  {
    "breadcrumb": "Informatik \u003e Datenbanken \u003e Ueberfuehrung Von Normalformen",
    "content": "Befindet sich eine Beziehung in der ersten Normalform und ist jedes Nicht-Primärschlüssel-Attribut funktional vollständig vom Primärschlüssel abhängig, dann befindet sich die Beziehung in der zweiten Normalform (2NF).\nStudentNr. Kursnummer Kurspreis 1 43 50 2 21 60 3 21 60 4 13 60 → Kurspreis kann nicht allein den Wert von Kursnummer oder StudentNr. bestimmen\n→ Kurspreis kann zusammen mit StudentNr. nicht über den Wert von Kursnummer entscheiden\n→ Kurspreis kann zusammen mit Kursnummer nicht über den Wert von StudentNr. entscheiden\nLösung: Wir teilen das Schema in 2 Tabellen auf.\nStudentNr. Kursnummer 1 43 2 21 3 21 4 13 Kursnummer Kurspreis 43 50 21 60 21 60 13 60 Da alle nicht Schlüssel Attribute von der Kombination (Kursnummer,StudentNr.) voll funktional abhängig sind, befindet sich die Tabelle in der zweiten Normalform.\nÜberführung in die dritte Normalform: Eine Relation befindet sich in der dritten Normalform, wenn keine transitiven Abhängigkeiten bei nicht schlüssel attributen bestehen.\nUnser vorheriges Beispiel erfüllt dieses Kriterium bereits, deswegen nutzen wir ein anderes Beispiel.\nStudentNr. Name Bundesland Land Alter 1 Lukas Bayern DE 20 2 Tim Berlin DE 18 3 Kevin Berlin DE 21 Das Attribut “StudentNr.” ist in dieser tabelle transitiv abhängig von “Bundesland”.\nLösung: Wir teilen das Schema in zwei Tabellen.\nStudentNr. Name Alter Bundesland 1 Lukas 20 Bayern 2 Tim 18 Berlin 3 Kevin 21 Berlin Bundesland Land Bayern Deutschland Berlin Deutschland Da sich die Tabelle in der 2.NF befand, und jetzt alle transitiven abhängigkeiten aufgelöst wurden, befindet sie sich in der dritten Normalform.\n",
    "description": "",
    "tags": null,
    "title": "Dritte Normalform",
    "uri": "/informatik/datenbanken/ueberfuehrung-von-normalformen/dritte-normalform.html"
  },
  {
    "breadcrumb": "Informatik \u003e Automaten \u003e Formale Sprachen Grammatiken",
    "content": " G = (N, T, P, S) N: nichtleere, endliche Menge von Nichtterminalen T: nichtleere, endliche Menge von Terminalen P: endliche Menge von Produktionsregeln (Jede Regel bildet eine beliebige Kombination aus T und N, die mindestens ein N enthält, auf eine beliebige Kombination von Terminalen und Nichtterminalen ab.) s∈N ist das Startsymbol Beispiel: L = {anbncn|n≥0}\nG = (N, T, S, P) N = {S, S’, B} T = {a, b, c} S Startsymbol P = {\nS → S’ | ϵ\nS’ → aS’Bc | abc\ncB → Bc\nbB → bb} rechtsreguläre Grammatik Außschließlich Produktionsregeln der Form: N → T | TN (Wörter wachsen nach rechts) | ϵ\nlinksreguläre Grammatik Außschließlich Produktionsregeln der Form: N → T | NT (Wörter wachsen nach links) | ϵ\nkontextfreie Grammatik Außschließlich Produktionsregeln der Form: N → (NUT)∗ (alle Kombinationen aus ϵ, N, T) , also auch N → ϵ\nZeigen, dass ein Wort sich aus einer Grammatik ableiten lässt (siehe Grammatik oben) aabbcc: S → S’ → aS’Bc → aabcBc → aabBcc → aabbcc (Ableitung des Wortes)\nHirarchie formaler Sprachen reguläre und kontextfreie Sprachen Die Sprache L ist regulär ⇔ es existiert eine reguläre Grammatik, die L erzeugt ⇔ es existiert ein DEA, der L erkennt\nDie Sprache L ist kontextfrei ⇔ es existiert eine kontextfreie Grammatik, die L erzeugt ⇔ es existiert ein NICHTDETERMINISTISCHER Kellerautomat, der L erkennt\n",
    "description": "",
    "tags": null,
    "title": "Formale Grammatik",
    "uri": "/informatik/automaten/formale-sprachen-grammatiken/formale-grammatik.html"
  },
  {
    "breadcrumb": "Informatik \u003e Netzwerke \u003e Schichtenmodell",
    "content": " Die Daten werden vom Sender zum Empfänger über das Netzwerk verschickt ",
    "description": "",
    "tags": null,
    "title": "Internetschicht",
    "uri": "/informatik/netzwerke/schichtenmodell/internetschicht.html"
  },
  {
    "breadcrumb": "Informatik \u003e Verschluesselung \u003e Symmetrische Verschluesselung",
    "content": " Wird benutzt, um die Länge des Schlüsselworts bei der Vigenere Verschlüsselung zu bestimmen Nachdem die Länge bestimmt wurde, können einfach wie auch beim Caesar verfahren alle Möglichkeiten durchprobiert werden. Beispiel:\nAXTRX TRYLC TYSZO EMLAF QWEUZ HRKDP NRVWM WXRPI JTRHN IKMYF WLQIE NNOXW OTVXB NEXRK AFYHW KXAXF QYAWD PKKWB WLZOF XRLSN AAWUX WTURH RFWLL WWKYF WGAXG LPCTG ZXWOX RPIYB CSMYF WIKPA DHYBC SMYFW KGMTE EUWAD LHSLP AVHFK HMWLK\nDieser Text wurde mit dem Wort „ALTESTESTAMENT“ verschlüsselt. Wir versuchen nun die Schlüssellänge heraus zu finden. Dazu müssen wir zunächst wiederkehrende Zeichenketten von einer Mindestlänge von 3 finden.\nAXTR X TRYLC TYSZO EMLAF QWEUZ HRKDP NRVWM WXRPI JTRHN IKMYF WLQIE NNOXW OTVXB NEXRK AFYHW KXAXF QYAWD PKKWB WLZOF XRLSN AAWUX WTURH RFWLL WWKYF WGAXG LPCTG ZXWOX RPI YB CSMYF WIKPA DHYBC SMYFW KGMTE EUWAD LHSLP AVHFK HMWLK\nXTR: Abstand 3 XRPI: Abstand 98 YFW: Abstand 70 YBCSMYFW: Abstand 14 Zuletzt zerlegen wir die Zahlen noch in ihre Primfaktoren:\n3 = 3 98 = 2 × 7 × 7 70 = 2 × 5 × 7 14 = 2 × 7\nNun suchen wir ein gemeinsames Vielfaches der Zahlen. Hierbei fällt die Zahl 14 auf:\n2 * 7 = 14\nDieses Vielfache passt zu allen Zahlen. Eventuell war der Abstand von 3 nur ein zufälliges Auftreten. 14 stimmt in diesem Fall.\n",
    "description": "",
    "tags": null,
    "title": "Kasiski Test",
    "uri": "/informatik/verschluesselung/symmetrische-verschluesselung/kasiski-test.html"
  },
  {
    "breadcrumb": "Informatik \u003e Datenbanken \u003e Operatoren",
    "content": " AND OR NOT ",
    "description": "",
    "tags": null,
    "title": "Logische Operatoren",
    "uri": "/informatik/datenbanken/operatoren/logische-operatoren.html"
  },
  {
    "breadcrumb": "Informatik \u003e Automaten",
    "content": "nichtdeterministisch:\nfür eine Kombination aus Zustand und Eingabezeichen kann es mehrere Folgezustände geben, oder keinen Folgezustand. Dann wird auf die leere Menge abgebildet (Fehlerzustand).\nA = (Q, Σ, F, δ, s) Q: nichtleere, endliche Menge von Zuständen Σ: nichtleeres, endliches Eingabealphabet F⊆Q Menge der akzeptierten Zustände δ: QxΣ → P(Q) Übergangsfunktion die jeder Kombination einen Nachfolgezustand zuordnet s∈Q Startzustand P(Q) ist die Potenzmenge von Q, also die Menge aller Teilmengen von Q. Dabei gehört auch die leere Menge ∅ bzw. {} dazu.\nBeispiel:\nA = (Q, Σ, F, δ, s) Q = {q0, q1, q2} Σ = {0, 1} F = {q2} s = q0 δ: 0 1 q0 {q0} {q0, q1} q1 {q2} {q2} q2 {} {} oder\nHinweise ein NEA kann ϵ-Übergänge besitzen, die einen automatischen Übergang zum Folgezustand bedeuten ϵ muss nicht explizit zum Eingabealphabet hinzugefügt werden ϵ steht für “das leere Wort” Verhalten eines NEA NEA erhält ein Eingabewort w=w1…wn er startet in q0 und liest in jedem Schritt genau ein Eingabezeichen es kann mehrere Berechnungen geben, die parallel stattfinden dabei kann der NEA bei einer Berechnung steckenbleiben, falls es für den aktuellen Zustand und das aktuelle Eingabezeichen keinen Folgezustand gibt. ein Eingabewort w wird akzeptiert, wenn es mindestens eine Berechnung gibt, die in einem akzeptierenden Zustand endet. Dann gehört das Wort zur Sprache L(A) das Automaten A. ",
    "description": "",
    "tags": null,
    "title": "Nea",
    "uri": "/informatik/automaten/nea.html"
  },
  {
    "breadcrumb": "Informatik \u003e Datenbanken",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Operatoren",
    "uri": "/informatik/datenbanken/operatoren.html"
  },
  {
    "breadcrumb": "Informatik \u003e Netzwerke",
    "content": "Schichtenmodell\n",
    "description": "",
    "tags": null,
    "title": "Schichtenmodell",
    "uri": "/informatik/netzwerke/schichtenmodell.html"
  },
  {
    "breadcrumb": "Informatik \u003e Datenschutz",
    "content": "Eine Stellungsnahme besteht aus drei Teilen. Die These, die Argumente und als letztes die Positionierung.\nThese Die These ist eine Behauptung zu der man Stellung nehmen soll. Je nach Aufgabenstellung kann man seine eigenen These entwickeln oder man bekommt eine These.\nArgumente Bei den Argumenten sammelt man verschiedene die für die These oder gegen sie sprechen. Dabei kann man verschiedene Argumentationsverläufe verwenden, wie zum Beispiel:\nPing-Pong: Pro und Contra Argumente folgen einander im Argumentationsverlauf. Sanduhr: Die Argumente für eine Seite werden von stärksten zum schwächsten aufgeführt. Danach werden die Gegenargumente vom schwächsten zum stärksten Argument aufgeführt. Somit ergibt sich die Form einer Sanduhr. Positionierung Hier wägt man die aufgelisteten pro und contra Argumente gegeneinander ab und kommt zu einer begrüdeten Position, die man als Autor explizit aufschreiben sollte.\n",
    "description": "",
    "tags": null,
    "title": "Stellungnahme im Fach Informatik",
    "uri": "/informatik/datenschutz/stellungnahme.html"
  },
  {
    "breadcrumb": "Informatik \u003e Netzwerke \u003e Netzwerktopologien",
    "content": "Beschreibung:\nJeder Computer ist mit nur einem Zentralen verbunden. Alle Daten werden über diesen verteilt.\nVorteile Nachteile Einfache Erweiterung des Netzwerks wegen der geringen Kabellänge Hoher Verkabelungsaufwand Geringe Störungsanfälligkeit beim Ausfall eines Computers, welcher nicht die Zentrale ist Kompletter Netzausfall bei einer Störung des zentralen Rechners ",
    "description": "",
    "tags": null,
    "title": "Stern Topologie",
    "uri": "/informatik/netzwerke/netzwerktopologien/stern-topologie.html"
  },
  {
    "breadcrumb": "Informatik \u003e Netzwerke \u003e Pruefverfahren",
    "content": "Definition:\nMehrere gleich lange Teile einer Bitfolge werden XOR-verknüpft. Es entsteht eine Prüfsumme, die die gleiche Länge wie die einzelnen Bitfolgen hat.\nBeispiel: Bitfolge: 10110011 Berechnung:\t10110011 XOR\t01101000 Prüfsumme:\t11011011 ",
    "description": "",
    "tags": null,
    "title": "XOR-Pruefsumme",
    "uri": "/informatik/netzwerke/pruefverfahren/xor-pruefsumme.html"
  },
  {
    "breadcrumb": "Informatik \u003e Automaten \u003e Formale Sprachen Grammatiken",
    "content": " Parser: kontextsensitive Grammatik Scanner: reguläre Grammatik Übersetzung von Quellcode in Maschinensprache Um einen Quellcode in eine Maschinensprache zu übersetzen, verwendet man einen Compiler, welcher mithilfe von verschiedenen Schritten mit speziellen Aufgaben, den Quelltext analysiert und umwandelt:\nScanner → lexikalische Analyse Parser → syntaktische Analyse semantische Analyse Codegenerator → Synthesepahse In der folgenden Section werden der Scanner (Schritt 1) und der Parser (Schritt 2) näher behandelt.\nScanner lexikalische (zeichenweise) Analyse des Quelltextes wird auch Lexer genannt bildet die Grundlage für den Parser Scanner zerlegt den Text in seine Bestandteile (Token) arbeitet nach den Regeln der regulüren Grammatik erkennt das Wort einer Sprache mithilfe eines DEAs erstellt eine Tokenliste (indizierte Liste aller Token mit Typen und Speicheradressen) Parser syntaktische Analyse des Quellcodes → Analyse der syntaktischen Korrektheit Scanner bildet die Grundlage für die semantische Analyse übernimmt sowohl die lexikalische als auch die syntaktische Analyse, wenn man bei der Worterkennung nicht zwischen den beiden unterscheidet erzeugt ein Ableitungsbaum Zusammenarbeit zwischen Scanner und Parser Scanner Parser können auf zwei Arten zusammenarbeiten:\nDer Parser erhält jedes Token einzeln vom Scanner, wenn dieser mit dem Token fertig ist Der Parser erhält eine Tokenliste vom Scanner, nachdem dieser mit allen Token fertig ist Die Methode, die verwendet wird, hängt von der Komplexität der Sprache ab.\nVerwendung von Sprachen und Grammatiken Scanner:\nDamit der Scanner überprüfen kann, od die Folge der Eingabezeichen des Quellcodes den Terminalen der regulären Sprache entspricht, verwendet er DEAs als Akzeptoren und arbeitet somit nach den Regeln der regulären Grammatik.\nParser:\nParser hingegen verwenden eine Kontextfreie Grammatik, um zu überprüfen, ob die Folge der Token der gegebenen Grammatik entspricht\nWeitere Schritte eines Compilers Semantische Analyse Bei der semantische Analyse wird überprüft, ob die Programmteile sinnvoll zusammenpassen bzw., ob das Programm Sinn ergibt. Allerdings wird hier der Quellcode nicht auf die Funktionsweise bzw. das Ergebnis überprüft.\nCodegenerator Der Codegenerator ist der letzte Schritt im Compileprozess. Er findet statt, wenn die anderen Schritte keine Fehlermeldungen zurückgegeben haben. Hier wird alles in einem Code in der entsprechenden Maschinensprache zusammengeführt, welcher vom Prozessor aus- und lesbar ist.\n",
    "description": "",
    "tags": null,
    "title": "Anwendung",
    "uri": "/informatik/automaten/formale-sprachen-grammatiken/anwendung.html"
  },
  {
    "breadcrumb": "Informatik \u003e Netzwerke",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Client Server",
    "uri": "/informatik/netzwerke/client-server.html"
  },
  {
    "breadcrumb": "Informatik",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Datenbanken",
    "uri": "/informatik/datenbanken.html"
  },
  {
    "breadcrumb": "Informatik \u003e Verschluesselung \u003e Symmetrische Verschluesselung",
    "content": "Das Diffie-Hellman-Verfahren wird genutzt, um einen symmetrischen Schlüssel über eine ungesicherte Verbindung auszutauschen.\nBeispiel:\nQuelle: Wikimedia Commons, Public Domain → https://commons.wikimedia.org/wiki/File:Diffie-Hellman_Key_Exchange_(de).svg\nQuelle: https://openclipart.org\n",
    "description": "",
    "tags": null,
    "title": "Diffie Hellman Verfahren",
    "uri": "/informatik/verschluesselung/symmetrische-verschluesselung/diffie-hellman-verfahren.html"
  },
  {
    "breadcrumb": "Informatik \u003e Datenbanken",
    "content": " Funktion Nutzen COUNT Zählt die Anzahl der Zeilen SUM Zählt die Werte der Spalte MAX gibt den höchsten Wert zurück MIN gibt den kleinsten Wert zurück AVG gibt den Mittlewert (von int) zurück ",
    "description": "",
    "tags": null,
    "title": "Funktionen",
    "uri": "/informatik/datenbanken/funktionen.html"
  },
  {
    "breadcrumb": "Informatik \u003e Netzwerke \u003e Schichtenmodell",
    "content": " Stellt eine zuverlässige physikalische Verbindung her Überträgt die Daten mithilfe von physischen Signalen (wie Licht oder elektrischem Strom) ",
    "description": "",
    "tags": null,
    "title": "Netzzugangsschicht",
    "uri": "/informatik/netzwerke/schichtenmodell/netzzugangsschicht.html"
  },
  {
    "breadcrumb": "Informatik \u003e Netzwerke \u003e Netzwerktopologien",
    "content": "Beschreibung:\nJeder Computer im Netzwerk ist mit mindestens einem weiteren verbunden. Die Daten haben meistens mehrere Routen vom Sender zum Empfänger. Wenn alle Rechner mit allen anderen verbunden sind heißt diese vollvermascht.\nVorteile Nachteile Hoch Ausfallsicherheit durch alternative Wege von einem Rechner zum anderen Aufwändige Organisation für Wegbestimmung der Daten notwendig Die Verkabelung ist sehr hochwertig und somit teuer ",
    "description": "",
    "tags": null,
    "title": "Vermaschte Topologie",
    "uri": "/informatik/netzwerke/netzwerktopologien/vermaschte-topologie.html"
  },
  {
    "breadcrumb": "Informatik \u003e Automaten",
    "content": " DEAs und NEAs beschreiben die gleiche Sprachklasse (reguläre Sprachen) wesentlicher Unterschied: bei NEA sind auch mehrere Folgezustände bzw. kein Folgezustand mögliche der DEA ist ein Spezialfall von einem NEA jeder NEA lässt sich mittels Potenzmengenkonstruktion in einen äquivalenten DEA umwandeln ",
    "description": "",
    "tags": null,
    "title": "Zusammenhang Dea Nea",
    "uri": "/informatik/automaten/zusammenhang-dea-nea.html"
  },
  {
    "breadcrumb": "Informatik",
    "content": "Hier handelt es sich um Netzwerke.\n",
    "description": "",
    "tags": null,
    "title": "Netzwerke",
    "uri": "/informatik/netzwerke.html"
  },
  {
    "breadcrumb": "Informatik \u003e Datenbanken",
    "content": " Normalform Bedingung Erste Normalform (1NF) ist erreicht, wenn alle Attribute einen atomaren Wertebereich haben Zweite Normalform (2NF) ist erreicht, wenn die Datenbank in der 1NF ist und zusätzlich jedes Nichtschlüsselattribut vom Primärschlüssel voll funktional abhängig ist und nicht von einem Teil der Schlüsselattribute Dritte Normalform (3NF) ist erreicht, wenn die Datenbank in der 2NF ist und es zusätzlich kein Nichtschlüsselattribut gibt, das transitiv abhängig von einem Schlüsselattribut ist. Es darf also keine funktionalen Abhängigkeiten zwischen Nichtschlüsselattributen geben ",
    "description": "",
    "tags": null,
    "title": "Normalformen",
    "uri": "/informatik/datenbanken/normalformen.html"
  },
  {
    "breadcrumb": "Informatik \u003e Automaten",
    "content": "Idee Konstruiere zu NEA einen DEA durch:\nmerke im Zustand des DEA, in welchen Zuständen der NEA sein könnte Zustände des DEA sind Mengen von Zuständen des NEA Beispiel\nNEA DEA Jeder Zustand des DEA, der mindestens einen Endzustand vom NEA enthält, wird ein akzeptierender Zustand.\nAlgorithmus starte mit Menge des Anfangszustands solange es unbearbeiteten Zustand S={q1,…, qk} gibt für jedes Eingabezeichen a: für jeden Zustand q1,…, qk bestimme die Nachfolger für die Eingabe a im NEA und füge sie s’ hinzu falls es den Zustand s’ noch nicht gibt, füge ihn hinzu füge den Übergang von s zu s’ hinzu markiere s als bearbeitet ",
    "description": "",
    "tags": null,
    "title": "Potenzmengenkonstruktion",
    "uri": "/informatik/automaten/potenzmengenkonstruktion.html"
  },
  {
    "breadcrumb": "Informatik \u003e Datenbanken",
    "content": " Abhängigkeiten Bedeutung Beispiel funktional abhängig Ein Attribut B ist von einem Attribut A funktional abhängig, wenn jeder Wert von Attribut A einem eindeutigen Wert von Attribut B zugeordnet werden kann A → B voll funktional abhängig Ein Attribut B ist von einer Attributkombination (A1, A2) voll funktional abhängig, wenn ein Attribut B funktional abhängig von der Kombination (A1, A2) ist, aber nicht schon von A1 oder A2 B → (A1, A2) und B nicht → A1 oder → A2 transitiv abhängig Ein Attribut C ist von Attribut A transitiv abhängig, wenn es ein Attribut B gitb welches von A abhängig ist. Dabei darf A nicht funktional abhängig von B sein. A → B → C ",
    "description": "",
    "tags": null,
    "title": "Abhaengigkeiten",
    "uri": "/informatik/datenbanken/abhaengigkeiten.html"
  },
  {
    "breadcrumb": "Informatik \u003e Automaten",
    "content": " A = (Q, Σ, K, F, δ, s, #) Q: nichtleere, endliche Menge von Zuständen Σ: nichtleeres, endliches Eingabealphabet F⊆Q Menge der akzeptierenden Zustände s∈Q Startzustand δ: Übergangsfunktion, die jeder Kombination (Zustand, Eingabezeichen (ϵ ist auch möglich, gehört aber nicht zum Eingabealphabet), Kellerzeichen) einen Nachfolgezustand und eine Kelleroperation zuordnet #ϵK Anfangssymbol im Keller Beispiel\nA = (Q, Σ, K, F, δ, s, #) Q = {z0, z1, z2} Σ = {a, b} K = {#, A} F = {Z2} s = Z0 δ: stand|E ngabezeichen|K llerzeichen|F lgezustand|K lleroperation| sub\u003e0|a # z sub\u003e0|p sh(A)| sub\u003e0|a A z sub\u003e0|p sh(A)| sub\u003e0|b A z sub\u003e1|p p()| sub\u003e1|b A z sub\u003e1|p p()| sub\u003e1|� |# z sub\u003e2|n p| alle nicht aufgelisteten Übergänge führen in einen Fehlerzustand\noder:\n",
    "description": "",
    "tags": null,
    "title": "Kellerautomat",
    "uri": "/informatik/automaten/kellerautomat.html"
  },
  {
    "breadcrumb": "Informatik \u003e Automaten",
    "content": "DEA/NEA Beantwortung von Entscheidungsfragen (gehört die Eingabe einer bestimmten Sprache?) z.B.: zur Prüfung der syntaktischen Korrektheit von Quellcode (if, for, ..) erkennt reguläre Sprachen Kellerautomaten (nichtdeterministisch) Erkennung beliebig vieler Klammernschachtelnungen erkennt kontextfreie Sprachen erkennt keine Sprachen der Form L = {anbncn|n\u003e0} ",
    "description": "",
    "tags": null,
    "title": "Vergleich Automaten",
    "uri": "/informatik/automaten/vergleich-automaten.html"
  },
  {
    "breadcrumb": "Informatik",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Verschluesselung",
    "uri": "/informatik/verschluesselung.html"
  },
  {
    "breadcrumb": "Informatik",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Datenschutz",
    "uri": "/informatik/datenschutz.html"
  },
  {
    "breadcrumb": "Informatik \u003e Datenbanken",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Er Modell",
    "uri": "/informatik/datenbanken/er-modell.html"
  },
  {
    "breadcrumb": "Informatik \u003e Datenbanken",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Ueberfuehrung Von Normalformen",
    "uri": "/informatik/datenbanken/ueberfuehrung-von-normalformen.html"
  },
  {
    "breadcrumb": "Informatik \u003e Automaten",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Formale Sprachen Grammatiken",
    "uri": "/informatik/automaten/formale-sprachen-grammatiken.html"
  },
  {
    "breadcrumb": "",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Categories",
    "uri": "/categories.html"
  },
  {
    "breadcrumb": "",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tags",
    "uri": "/tags.html"
  }
]
