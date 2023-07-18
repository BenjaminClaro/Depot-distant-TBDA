var validation = document.getElementById("envoie");

var nom = document.getElementById("nom");
var nom_m = document.getElementById("nom_manquant");
var nom_v = new RegExp("^[A-Za-z-]+$");

var prenom = document.getElementById("prenom");
var prenom_m = document.getElementById("prenom_manquant");
var prenom_v = new RegExp("^[A-Za-z-]+$");

var postal = document.getElementById("code_postal");
var postal_m = document.getElementById("postal_manquant");
var postal_v = new RegExp("^[0-9]{5}$");

var mail = document.getElementById("email");
var mail_m = document.getElementById("email_manquant");
var mail_v = new RegExp("^[a-z0-9.-]+@[a-z0-9.-]{2,}.[a-z]{2,4}$");

var question = document.getElementById("votre_question");
var question_m = document.getElementById("question_manquant");
var question_v = new RegExp("^[a-zA-Zéèêçà -'\s0-9]+$");

validation.addEventListener("click", f_valid);


function f_valid(e){

    if (nom.validity.valueMissing){
        e.preventDefault();
        nom_m.textContent = "Champ nom vide";
        nom_m.style.color = "red";
    }
    else if (nom_v.test(nom.value) == false){
        e.preventDefault();
        nom_m.textContent = "Champ nom invalide";
        nom_m.style.color = "red";
    }
    else{    
            
    }


    if (prenom.validity.valueMissing){
        e.preventDefault();
        prenom_m.textContent = "Champ prénom vide";
        prenom_m.style.color = "red";
    }
    else if (prenom_v.test(prenom.value) == false){
        e.preventDefault();
        prenom_m.textContent = "Champ prenom invalide";
        prenom_m.style.color = "red";
    }
    else{    
            
    }

    if (postal.validity.valueMissing){
        e.preventDefault();
        postal_m.textContent = "Champ code postal vide";
        postal_m.style.color = "red";
    }
    else if (postal_v.test(postal.value) == false){
        e.preventDefault();
        postal_m.textContent = "Champ code postal invalide";
        postal_m.style.color = "red";
    }
    else{    
            
    }

    if (mail.validity.valueMissing){
        e.preventDefault();
        mail_m.textContent = "Champ E-mail vide";
        mail_m.style.color = "red";
    }
    else if (mail_v.test(mail.value) == false){
        e.preventDefault();
        mail_m.textContent = "Champ E-mail invalide";
        mail_m.style.color = "red";
    }
    else{    
            
    }

    if (question.validity.valueMissing){
        e.preventDefault();
        question_m.textContent = "Champ question vide";
        question_m.style.color = "red";
    }
    else if (question_v.test(question.value) == false){
        e.preventDefault();
        question_m.textContent = "Champ question invalide";
        question_m.style.color = "red";
    }
    else{    
            
    }




}