"use strict";

/*das ist Uhrzeit 1*/

alert("Bingen") /*Pop Up Fenster, mit dem Inhalt "Bingen", test für Java-Script*/
function time() /*Function zum festlegen der Variablen */
{
var date =new Date(); 
var hours = date.getUTCHours() +1; /*Den Variablen werden die Uhrzeit zugeteilt, +1 damit die Uhrzeit mit der Deutschen übereinstimmt*/
var minutes = date.getUTCMinutes();
var secounds = date.getUTCSeconds();

if (hours <10) /*Überprüfen, ob Stunde größer gleich 10 oder geringer */
{hours = "0"+hours; /*Falls kleiner 10 dann wird eine 0 vor die Stunde gestellt*/
}
if(minutes <10)
{minutes = "0"+minutes;
}
if(secounds <10)
{secounds = "0"+secounds;
}

document.getElementById("uhr").innerHTML = hours+":"+minutes+":"+secounds; /*alle Zeiten zusammenaddiert */
window.setTimeout("time()",1000)
}

/* ab hier Uhrzeit 2*/

alert("NY")
function timeNY()
{
var date =new Date();
var hours = date.getUTCHours() -5;
var minutes = date.getUTCMinutes();
var secounds = date.getUTCSeconds();

if (hours <10)
{hours = "0"+hours;
}

if(minutes <10)
{minutes = "0"+minutes;
}
if(secounds <10)
{secounds = "0"+secounds;
}

document.getElementById("timeNY").innerHTML = hours+":"+minutes+":"+secounds;
window.setTimeout("timeNY()",1000)
}


