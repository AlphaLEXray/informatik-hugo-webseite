+++
title = "Kasiski Test"
weight = 3
+++

- Wird benutzt, um die Länge des Schlüsselworts bei der Vigenere Verschlüsselung zu bestimmen
- Nachdem die Länge bestimmt wurde, können einfach wie auch beim Caesar verfahren alle Möglichkeiten durchprobiert werden.

Beispiel:

> AXTRX TRYLC TYSZO EMLAF QWEUZ HRKDP NRVWM WXRPI
> JTRHN IKMYF WLQIE NNOXW OTVXB NEXRK AFYHW KXAXF
> QYAWD PKKWB WLZOF XRLSN AAWUX WTURH RFWLL WWKYF
> WGAXG LPCTG ZXWOX RPIYB CSMYF WIKPA DHYBC SMYFW
> KGMTE EUWAD LHSLP AVHFK HMWLK

Dieser Text wurde mit dem Wort „ALTESTESTAMENT“ verschlüsselt. Wir versuchen nun die Schlüssellänge heraus zu finden. Dazu müssen wir zunächst wiederkehrende Zeichenketten von einer Mindestlänge von 3 finden.

> A```XTR``` ```X TR```YLC TYSZO EMLAF QWEUZ HRKDP NRVWM W```XRPI```
> JTRHN IKM```YF W```LQIE NNOXW OTVXB NEXRK AFYHW KXAXF
> QYAWD PKKWB WLZOF XRLSN AAWUX WTURH RFWLL WWK```YF
> W```GAXG LPCTG ZXWO```X RPI``` ```YB CSMYF W```IKPA DH```YBC SMYFW```
> KGMTE EUWAD LHSLP AVHFK HMWLK

- XTR:         Abstand 3
- XRPI:        Abstand 98
- YFW:         Abstand 70
- YBCSMYFW:    Abstand 14

Zuletzt zerlegen wir die Zahlen noch in ihre Primfaktoren:

3   =      3
98   = 2 ×         7 × 7
70   = 2 ×     5 × 7
14   = 2 ×         7

Nun suchen wir ein gemeinsames Vielfaches der Zahlen. Hierbei fällt die Zahl 14 auf:

2 * 7 = 14

**Dieses Vielfache passt zu allen Zahlen. Eventuell war der Abstand von 3 nur ein zufälliges Auftreten. 14 stimmt in diesem Fall.**
