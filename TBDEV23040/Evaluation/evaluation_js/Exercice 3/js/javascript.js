var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];


var nom = window.prompt("Donnez moi un nom");


for (i=0; i<10; ++i){
    if (nom == tab[i]){
        for (j=i; j<10; ++j){
            tab[j] = tab[j+1];
            tab[9] = " "
        }
        
    }
    
    
    
    

document.write(tab[i] + "<br>");
}

if(tab[9]=="Stéphane"){
    alert("No introuvable");
}
