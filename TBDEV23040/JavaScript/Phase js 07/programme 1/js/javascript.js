var nb = window.prompt("Donnez un nombre");


var reste = nb % 2;

if (reste == 0){
    document.write(nb + " est paire");
}
else{  
    document.write(nb + " n'est pas paire ");
}