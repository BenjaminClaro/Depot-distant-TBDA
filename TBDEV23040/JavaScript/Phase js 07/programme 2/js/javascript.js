var annee = window.prompt("Quel est votre année de naissance?");

var age = 2023 - annee;


if (age < 18){
    document.write("Vous êtes mineur, vous avez " + age + " ans");
}
else{
    document.write("Vous êtes majeur, vous avez " + age + " ans");
}