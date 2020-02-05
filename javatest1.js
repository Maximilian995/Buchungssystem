"use strict";
 
alert("test") /*Test ob Javascript aufgerufen wird*/


let tabelleAnfang = new Array(); /*Erstellen /Deklarieren eines neuen Array */
for(let i =0; i<3; i++) { /*Festlegen, dass die Eingabe 3 mal erfolgen muss*/
    let eingabe= prompt("Namen"+ " " +[i+1] + " " + "eingeben"); /*Eingabeaufforderung, Zählt "Namennummer" mit*/
    tabelleAnfang.push(eingabe);
}
tabelleEnde1("Tabelle1");
tabelleEnde("Tabelle2");

function tabelleEnde1() { /*Erste Funktion für unsortiere Tabelle*/
    let XXX = "<table border = ''>"; /* XXX Deklarieren & Festlegen, dass Tabellenborder um jede Spalte/Zeile*/
    for (let i = 0; i < tabelleAnfang.length; i++) { /*Hier wird festgelegt, dass i so hoch wie "länge" Eingabe ist (bezogen auf Zeile 7)*/
    XXX = XXX + "<tr>" + "<td>" + (i+1) + "</td>" + "<td>" + tabelleAnfang[i] +"</td>" /*Festlegen wie eine Tabelle erstellt und gefüllt werden soll*/
    document.getElementById("tabelle2").innerHTML = XXX; /*Befehl zur Übernahme der Tabelle in HTML*/
}
}

function tabelleEnde() { /*Funktion mit ".sort-Befehl" */
    tabelleAnfang.sort(); /*Sortieren der Eingabe*/
    let text = "<table border = ''>";
    for (let i = 0; i < tabelleAnfang.length; i++) {
    text = text + "<tr>" + "<td>" + (i+1) + "</td>" + "<td>" + tabelleAnfang[i] +"</td>"
    document.getElementById("tabelle1").innerHTML = text;
}
}