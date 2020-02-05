"use strict";

/*Zeile 3-17 waren vorgegeben*/
let spielfeld = document.getElementById('spielfeld');
let meinFeld = new Array();
let neuesBild = new Image(40, 40)
neuesBild.src = "images/kreis.png";
neuesBild.id = 0;
spielfeld.appendChild(neuesBild);
meinFeld.push(neuesBild);
document.getElementById('spielfeld').addEventListener('mousedown', felderZuruecksetzen)
document.getElementById('spielfeld').addEventListener('click', meinKlickHandler);

function felderZuruecksetzen() {
    for (let i = 0; i < 10; i++)
        meinFeld[i].src = "images/kreis.png"
}


var Zahl /*Zeile 20-22, hier werden die globalen Variablen deklaiert*/
var spielername
var eingegebenePos

function meinKlickHandler() {
    Zahl = event.target.id;
    meinFeld[Zahl].src = "images/beides.png";
}

function positionabfragen() { /*Funktion zur Ausgabe der aktuellen Spielerposition*/
    alert("aktuelle Position: " + Zahl + "\n" + "aktueller Spielername: " + spielername) 
}

function SpielerName() { /*Hier wird die Funktion erstellt, mittels welcher ein neuer Spieler eingelesen werden kann*/
    spielername = prompt('Wie ist ihr Name?', '');

    let NAME = new Spieler(spielername, meinFeld[0])
    Zahl = 0
    meinFeld[0].src = "images/beides.png"
    meinFeld[1].src = "images/kreis.png"
    meinFeld[2].src = "images/kreis.png"
    meinFeld[3].src = "images/kreis.png"
    meinFeld[4].src = "images/kreis.png"
    meinFeld[5].src = "images/kreis.png"
    meinFeld[6].src = "images/kreis.png"
    meinFeld[7].src = "images/kreis.png"
    meinFeld[8].src = "images/kreis.png"
    meinFeld[9].src = "images/kreis.png"
    alert("Spielername: " + NAME.name)
}

function neuePosition() { /*Die Funktion dient zur Positionsauswahl*/
    eingegebenePos = prompt('An welcher Position möchen Sie stehen? (0-9)', '');
    Zahl = eingegebenePos;
    meinFeld[0].src = "images/kreis.png"
    meinFeld[1].src = "images/kreis.png"
    meinFeld[2].src = "images/kreis.png"
    meinFeld[3].src = "images/kreis.png"
    meinFeld[4].src = "images/kreis.png"
    meinFeld[5].src = "images/kreis.png"
    meinFeld[6].src = "images/kreis.png"
    meinFeld[7].src = "images/kreis.png"
    meinFeld[8].src = "images/kreis.png"
    meinFeld[9].src = "images/kreis.png"
    meinFeld[Zahl].src = "images/beides.png";
}

for (let i = 1; i < 10; i++) {
    let neuesBild = new Image(40, 40);
    neuesBild.src = "images/kreis.png";
    neuesBild.id = i
    spielfeld.appendChild(neuesBild);
    meinFeld.push(neuesBild);
}

class Spieler {
    constructor(neuerName, neuePosition) {
        this.name = neuerName;
        this.position = neuePosition;
    }
}