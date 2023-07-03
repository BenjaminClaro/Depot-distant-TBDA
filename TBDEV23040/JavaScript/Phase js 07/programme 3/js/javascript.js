var nb1 = window.prompt("Donnez un nombre");
var nb2 = window.prompt("Donnez un deuxième nombre");
var ope = window.prompt("Donnez un opérateur");


switch (ope)
{
    case "+" :
        document.write((+nb1) + (+nb2));
        break;

    case "-" :
        document.write((nb1-nb2));
        break;
    
    case "*" :
        document.write((nb1*nb2));
        break;

    case "/" :
        if (nb2 == 0){
            document.write("On ne peux pas diviser par 0");
        }
        else{
            document.write((nb1/nb2));
        }
        break;

    default :
        document.write("Opérateur invalide");
}