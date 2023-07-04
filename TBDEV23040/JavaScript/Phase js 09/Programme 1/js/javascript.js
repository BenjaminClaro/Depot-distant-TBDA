function affichImg(image){

    document.getElementById("papillon").innerHTML = image;

}


function produit(x, y){
    document.write(x*y);
}


var nb1 = window.prompt("Nombre 1");
var nb2 = window.prompt("Nombre 2");




affichImg("assets/images/papillon.jpg");
produit(nb1, nb2);



