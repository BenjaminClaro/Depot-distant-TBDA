var nombre = 0;

var saisie = window.prompt("Donnez un nom");

var noms = saisie;


while (saisie != ""){
    var saisie = window.prompt("Donnez un nom (laissez vide si vous avez fini");
    var nombre = ++nombre;
    var noms = noms + " " + saisie;
}


document.write("Vous avez saisi " + nombre + " noms <br>");
document.write(noms);