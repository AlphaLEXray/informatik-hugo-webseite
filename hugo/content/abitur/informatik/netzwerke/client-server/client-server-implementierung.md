+++
title = "Client Server Implementierung"
weight = 3
+++

*Um durch die Abiturklassen eine Verbindung auf zu bauen, werden einige Methoden und Vererbungen benötigt.**
![Implementationsdiagramm Netzwerke](implementationsdiagramm-netzwerke.png)

**Der Client muss hier bei diese Methode implementieren:**
``+ProcessMessage(pMessage: String): void``
Hierbei ist auch wichtig, dass die jeweilige Client Klasse von der Abiturklasse „Client“ erbt (extends). Hierbei muss auch darauf geachtet werden, dass ein Client Objekt durch super mit einer Server IP sowie Port erstellt wird.

**Der Server muss hierbei folgende Methoden Implementieren:**
```
+processNewConnection(pClientIP: String, pClientPort: int): void
+processMessage(pClientIP: String, pClientPort: int, pMessage: String): void
+processClosingConnection(pClientIP: String, pClientPort: int): void
```
Es ist darauf zu achten, dass die implementierende Klasse von der Abiturklasse „Server“ erbt (extends), sowie durch einen „super()“ Aufruf eine „Server“ Klasse erstellt.

**Beispiel für eine Server-Implementierung**

```java
public class ShopServer extends Server
{
	public ShopServer(int pPortnummer)
	{
		super(pPortnummer);
	}
	public void processNewConnection(String pClientIP, int pClientPort){
	}
	public void processMessage(String pClientIP, int pClientPort, String pMessage){
	}
	public void processClosingConnection(String pClientIP, int pClientPort){
	}
}
```
