function strtok(str1, str2, n){
    const marray = str1.split(str2);

    document.write(marray[n-1]);
}

var mots = window.prompt("liste de mot");
var sepa = window.prompt("séparateur");
var no = window.prompt("mot numéro combien?");

strtok(mots, sepa, no);


