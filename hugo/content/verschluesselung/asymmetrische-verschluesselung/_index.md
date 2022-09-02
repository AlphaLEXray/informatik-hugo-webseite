+++
title = "Asymmetrische Verschluesselung"
weight = 3
+++

Die asymmetrische Verschlüsselung basiert, anders als die symmetrische Verschlüsselung, auf zwei verschiedenen Schlüsseln. Diese sind der öffentliche und der private Schlüssel. Der öffentliche Schlüssel wird an die Kommunikationspartner verschickt. Diese verschlüsseln ihre Nachrichten mit diesem öffentlichem Schlüssel. Wenn eine Nachricht (oder Datei) mit einem öffentlichen Schlüssel verschlüsselt wurde, kann sie nur mithilfe des privaten Schlüssels entschlüsselt werden. Der private Schlüssel soll privat gehalten werden, weshalb er (idealerweise) auf dem Gerät bleiben sollte. Eine Kommunikation zwischen zwei Kommunikationspartnern könnte wie folgt ablaufen:

1. Partner0 sendet Partner1 seinen öffentlichen Schlüssel
2. Partner1 verschlüsselt seine Nachricht an Partner0 mit dessen öffentlichen Schlüssel den er von ihm bekommen hat
3. Partner0 erhält die Nachricht von Partner1 und entschlüsselt diese mit seinem privaten Schlüssel.
4. Nachdem Partner0 die Nachricht enthalten hat, kann er noch eine Nachricht als Bestätigung schicken. Diese wird mit dem private Schlüssel verschlüsselt und kann mit dem öffentlichen Schlüssel entschlüsselt werden. Somit bestätigt Partner0, dass er wirklich er selbst ist da er den privaten Schlüssel besitzt. Dies nennt man auch Signatur und sie enthält keine sensitiven Daten.
