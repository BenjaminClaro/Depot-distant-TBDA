var jeune = 0;
var moyen = 0;
var vieux = 0;

var age = 0


while (age < 100){
    var age = window.prompt("Donnez un age (le centenaire en dernier )");
    if (age<20){
        jeune = ++jeune ;
    }
    else{
        if (age>=20 && age<=40){
            moyen = ++moyen;
        }
        else{
            vieux = ++vieux;
        }
    }
}


document.write("Il y a " + jeune + " jeunes, " + moyen + " d'age moyen et " + vieux + " vieux");