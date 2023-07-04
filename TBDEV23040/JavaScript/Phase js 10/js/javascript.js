var letableau = [];

var col = window.prompt("Combien de colones");
var lig = window.prompt("Combien de lignes");



for (i = 0; i < lig; ++i ){
    for (j = 0; j < col; ++j){
        letableau[i, j] = window.prompt("Valeur de la " + i + " ème ligne " + j + " ème colone");
        document.write(letableau[i,j] + " | ");
    }
    document.write( "<br>");
}
