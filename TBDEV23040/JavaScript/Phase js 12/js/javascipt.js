var table = [];
var i = 0;
var somme = 0;

var nombre = window.prompt("Donnez une valeur (0 pour finir)");
while (nombre != 0){
    table[i] = nombre;
    i = ++i;
    var nombre = window.prompt("Donnez une valeur (0 pour finir)");
}


for (j = 0; j < i; ++j){
    var somme = +somme + +table[j];
}

document.write("Vous avez saisi " + i + " nombres <br>");
document.write("La somme de ces nombres est de " + somme + "<br> La moyenne de ces nombres est de " + somme/i);