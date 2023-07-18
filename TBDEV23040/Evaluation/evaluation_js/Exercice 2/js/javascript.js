function TableMultiplicartion(x){
    for (i=0; i<=10; ++i){
        document.write(i + " x " + x + " = " + i*x + "<br>");
    }
}



var x = window.prompt("Donnez un chiffre");
TableMultiplicartion(x);