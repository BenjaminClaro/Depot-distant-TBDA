
// Marche pas pour le moment

var mot = window.prompt("Donnez moi un mot");
var max = mot.length;
var nb = 0;

for(p=0; p<max; ++p){


    var lettre = (mot.substring(p, 1));  
    
    document.write("<br>"+lettre+"<br>");

    switch(lettre){

        case "a" :
        case "e" :
        case "i" :
        case "o" :
        case "u" :
        case "y" :
            document.write("a");
            nb = ++nb;
            document.write(nb);
            break;

        default :
            document.write("n");

    }
}
document.write("<br>"+ (mot.indexOf("u")+1));
document.write("<br>"+nb);