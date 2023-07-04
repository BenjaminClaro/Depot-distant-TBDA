var moy = 0;
var add = 0;
var i = 0;

var nb = window.prompt("Saisissez un nombre");


while (nb != 0){
    moy = moy + +nb;
    add = add + +nb;
    i = ++i;
    var nb = window.prompt("Saisissez un nombre");

}


document.write("Somme : " + add + "<br>Moyenne : " + moy/i);