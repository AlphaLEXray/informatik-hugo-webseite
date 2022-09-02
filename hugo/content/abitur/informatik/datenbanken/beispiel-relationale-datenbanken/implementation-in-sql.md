+++
title = "Implementation in Sql"
weight = 4
+++

```SQL
CREATE TABLE Kundenart(
    KID STRING(255),
    Art varchar(255)
);
CREATE TABLE Kunden(
    KID STRING(255),
    Name varchar(255),
    Art varchar(255)
);
CREATE TABLE Auftrag(
    KID STRING(255),
    AID STRING(255),
    PID STRING(255)
);
CREATE TABLE Auftragsart(
    AID STRING(255),
    Art varchar(255)
);
CREATE TABLE Positionsarten(
    PaID STRING(255),
    Position varchar(255)
);
CREATE TABLE Personal_Info(
    PID STRING(255),
    PaID STRING(255),
    FID STRING(255),
    Email varchar(255),
    TelefonNr int(20),
    Straße varchar(255),
    Hausnummer varchar(255),
    Stadt varchar(255),
    PLZ int(10),
    Geburtsdatum date,
    KontoNr int(30)
);
CREATE TABLE Fachgebiete(
    FID STRING(255),
    Gebiete varchar(255)
);
CREATE TABLE Personal(
    PID STRING(255),
    Name varchar(255),
    Vorname varchar(255)
);
```