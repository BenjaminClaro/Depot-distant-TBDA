
// Marche pas pour le moment
var n = 0
var mot = window.prompt("Donnez moi un mot");
var max = mot.length;
var nb = 0;
document.write(mot + "<br>");
for(p=1; p<max+1; ++p){


    var lettre = (mot.substring(p, n));  
    


    switch(lettre){

        case "a" :
        case "e" :
        case "i" :
        case "o" :
        case "u" :
        case "y" :

            nb = ++nb;

            break;

        default :


    }

    n = ++n;
}

document.write("Il y a " + nb + " voyelles dans ce mot");