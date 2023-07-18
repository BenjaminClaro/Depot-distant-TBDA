var validation = document.getElementById("idSubForm1");

            var societe = document.getElementById("societe");
            var societe_valid = new RegExp("^[A-Za-z0-9-']+$");

            var contact = document.getElementById("contact");
            var contact_valid = new RegExp("^[A-Za-z-]+$");

            var ville = document.getElementById("ville");
            var ville_valid = new RegExp("^[A-Za-z-]+$");

            var postal = document.getElementById("postal");
            var postal_valid = new RegExp("^[0-9]{5}$");

            var mail = document.getElementById("email");
            var mail_valid = new RegExp("^[a-z0-9.-]+@[a-z0-9.-]{2,}.[a-z]{2,4}$");







            validation.addEventListener("click", f_valid);

            function f_valid(e) {
                if (societe.validity.valueMissing){
                    e.preventDefault();
                    alert("Veuillez remplir le champ Société");
                }
                else if(societe_valid.test(societe.value)== false){
                    event.preventDefault();
                    alert("Société invalide");
                }
                else{

                }

                
                if (contact.validity.valueMissing){
                    e.preventDefault();
                    alert("Veuillez remplir le champ Personne à contacter");
                }
                else if(contact_valid.test(contact.value)== false){
                    event.preventDefault();
                    alert("Personne à contacter invalide");
                }
                else{

                }


                if (postal.validity.valueMissing){
                    e.preventDefault();
                    alert("Veuillez remplir le champ Code postal");
                }
                else if(postal_valid.test(postal.value)== false){
                    event.preventDefault();
                    alert("Code postal invalide");
                }
                else{

                }


                if (ville.validity.valueMissing){
                    e.preventDefault();
                    alert("Veuillez remplir le champ Ville");
                }
                else if(ville_valid.test(ville.value)== false){
                    event.preventDefault();
                    alert("Ville invalide");
                }
                else{

                }

                if (mail.validity.valueMissing){
                    e.preventDefault();
                    alert("Veuillez remplir le champ E-mail");
                }
                else if(mail_valid.test(mail.value)== false){
                    mail.preventDefault();
                    alert("E-mail invalide");
                }
                else{

                }

            }